---
title: "How to Setup Varnish Cache on Kubernetes"
summary: "A step-by-step guide to configuring and deploying Varnish Cache on Kubernetes, including setting up Varnish as a caching proxy and integrating it with your applications."
date: "Sep 5, 2023"
draft: false
tags:
  - Kubernetes
  - Caching
---

Varnish is an open-source HTTP accelerator that can help improve the performance of web applications by caching frequently requested content. In a Kubernetes environment, setting up a Varnish cache cluster can help improve the scalability and availability of your web applications. In this article, we’ll walk through the steps to create a Varnish cache cluster in Kubernetes.

Prerequisites
Before you begin, you’ll need the following:

- A Kubernetes cluster
- kubectl installed and configured to work with your cluster
- A Varnish Docker image. You can use the official Varnish image from Docker Hub or build your own.


Step 1: Create a ConfigMap for Varnish Configuration
To configure Varnish, we’ll create a ConfigMap that contains the Varnish configuration file. Here’s an example of a Varnish configuration file:
```
vcl 4.0;
backend default {
    .host = "example.com";
    .port = "80";
}
sub vcl_recv {
    if (req.url ~ "^/admin") {
        return (pass);
    }
}
sub vcl_backend_response {
    if (beresp.status == 503) {
        return (retry);
    }
}
sub vcl_deliver {
    unset resp.http.X-Powered-By;
}
```
Save this configuration file to a file named varnish.vcl.

Next, create the ConfigMap using the kubectl create configmap command:

`$ kubectl create configmap varnish-config --from-file=varnish.vcl`

Step 2: Create a Deployment for Varnish
Next, create a Deployment that runs the Varnish container. Here’s an example Deployment YAML file:
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: varnish
  labels:
    app: varnish
spec:
  replicas: 3
  selector:
    matchLabels:
      app: varnish
  template:
    metadata:
      labels:
        app: varnish
    spec:
      containers:
      - name: varnish
        image: varnish:latest
        ports:
        - containerPort: 80
        volumeMounts:
        - name: varnish-config
          mountPath: /etc/varnish
      volumes:
      - name: varnish-config
        configMap:
          name: varnish-config
```
Save this file to a file named varnish-deployment.yaml.

This Deployment YAML file specifies that we want to run three replicas of the Varnish container, and that we want to mount the varnish-config ConfigMap as a volume at the /etc/varnish path inside the container.

Create the Deployment using the kubectl apply command:

`$ kubectl apply -f varnish-deployment.yaml`

Step 3: Create a Service for Varnish
Next, create a Service that exposes the Varnish Deployment within the Kubernetes cluster. Here’s an example Service YAML file:
```
apiVersion: v1
kind: Service
metadata:
  name: varnish
  labels:
    app: varnish
spec:
  selector:
    app: varnish
  ports:
  - name: http
    port: 80
    targetPort: 80
```
Save this file to a file named varnish-service.yaml.

This Service YAML file specifies that we want to expose the Varnish Deployment on port 80 within the Kubernetes cluster.

Create the Service using the kubectl apply command:

`$ kubectl apply -f varnish-service.yaml`

Step 4: Test the Varnish Cache
From a pod inside the namespace curl varnish.

`$ curl varnish:80`

And that’s it! You have a working Varnish setup.
Thank you all for reading my article.

Notes:

This setup will provide a stale cache because cache invalidation will happen only in a single pod. To get that fixed, you can create a proxy that would send BAN or PURGE requests to all Varnish pods. Proxy should track all Varnish endpoints using:

kubectl get endpoints \<varnish-service>