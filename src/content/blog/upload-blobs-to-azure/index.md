---
title: "Upload Files in Chunks to Azure Blob Storage Using Azure REST API"
summary: "A detailed guide on how to upload large files in chunks to Azure Blob Storage using the Azure REST API, including handling authentication, creating blobs, and uploading data."
date: "Aug 10, 2023"
draft: false
tags:
  - Azure
  - Cloud
---

Azure provides multiple ways you can upload files to blob storage. However, sometimes the situation does not allow us to use all of them. One of the easier ways is to use Azure Rest API.

The simplest example is to use a single API call to upload your file:
```
Request Syntax:  
PUT https://myaccount.blob.core.windows.net/mycontainer/myblockblob HTTP/1.1  
  
Request Headers:  
x-ms-version: 2015-02-21  
x-ms-date: <date>  
Content-Type: text/plain; charset=UTF-8  
x-ms-blob-content-disposition: attachment; filename="fname.ext"  
x-ms-blob-type: BlockBlob  
x-ms-meta-m1: v1  
x-ms-meta-m2: v2  
x-ms-expiry-option: RelativeToNow
x-ms-expiry-time: 30000
Authorization: SharedKey myaccount:YhuFJjN4fAR8/AmBrqBz7MG2uFinQ4rkh4dscbj598g=  
Content-Length: 11  
  
Request Body:  
hello world
```
But, if you need to upload bigger files, this will cause issues, because Azure API has size limits.


To overcome this, we can utilize block blobs and upload them in chunks. Briefly, how to do it:

Create an empty blob using PUT blob endpoint.
Add different blob chunks using PUT block API endpoint.
Commit blob blocks using PUT block list API endpoint.
Doing that manually takes time and will be a headache when trying to upload large files. You can automate these actions using scripts. Use my script as a base:

```
#!/bin/bash

local_file="$1"

file_name=$(basename "$local_file")
file_size=$(stat -c %s "$local_file")

chunk_size=$((4 * 1024 * 1024)) # 4MB
num_chunks=$((($file_size + $chunk_size - 1) / $chunk_size))

sas_token=""
base_url=""

xml_data="<?xml version=\"1.0\" encoding=\"utf-8\"?>
<BlockList>"

# Create initial blob
curl -i -v -X PUT -H "x-ms-version: 2019-12-12" -H "x-ms-blob-content-type: application/x-tar" -H "x-ms-blob-type: BlockBlob" -d "" "$base_url/$file_name?$sas_token"

# Upload chunks
for ((i = 0; i < num_chunks; i++)); do
    start_byte=$((i * chunk_size))
    end_byte=$((start_byte + chunk_size - 1))
    if ((end_byte >= file_size)); then
        end_byte=$((file_size - 1))
    fi
    
    # Calculate the byte range
    byte_range="$start_byte-$end_byte"

    # Create a temporary chunk file
    chunk_file="chunk_$i"
    dd if="$local_file" of="$chunk_file" bs=$chunk_size skip=$i count=1 2>/dev/null
    
    block_id="$(echo -n "${file_name}_$(printf "%04d" $i)" | base64 -w 0)"

    # Upload the chunk to Azure Blob Storage using Azure Blob REST API
    curl -i --retry 5 -v -X PUT -H "x-ms-version: 2019-12-12" -H "Content-Length: $((end_byte - start_byte + 1))" -H "Content-Range: bytes $byte_range/$file_size" --data-binary "@$chunk_file" "$base_url/$file_name?$sas_token&comp=block&blockid=$block_id"
    
    rm "$chunk_file"

    xml_data+="
    <Latest>$block_id</Latest>"
done

xml_data+="
</BlockList>"

echo "$xml_data"

curl -i -v -X PUT -H "x-ms-version: 2019-12-12" -H "x-ms-blob-content-type: application/x-tar" -H "Content-Type: application/xml" -d "$xml_data" "$base_url/$file_name?$sas_token&comp=blocklist"
chunk_upload.sh
Pateikiama: „chunk_upload.sh“.
This script will do the actions described above. To use it, choose the chunk size that you want to use and put it as the chunk_size variable. Then populate the base_urland sas_token variables, they are needed to connect to your storage account.
```
Run the script using sh \<your-script>.sh \<your-file> command.

And wholia, after it finishes running, you will have the file uploaded to blob storage using chunks and Azure REST API.