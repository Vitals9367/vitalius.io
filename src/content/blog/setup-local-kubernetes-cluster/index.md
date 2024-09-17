---
title: "How to Create an Advanced Local Kubernetes Cluster"
summary: "A comprehensive guide to setting up an advanced local Kubernetes cluster using various tools and configurations to enhance your development environment."
date: "Jul 20, 2023"
draft: false
tags:
  - Kubernetes
---

There are a lot of tutorials on how to create a local Kubernetes cluster, but I will show you how to take it no the next level.

Prerequisites:
1. Docker desktop

    Docker Desktop is designed to let you build, share and run containers as easily on Mac and Windows as you do on Linux.

    Install Docker desktop from here. After installation is complete, make sure Enable Kubernetes is on in Docker.


2. Kind

    Kind is a tool for running local Kubernetes clusters using Docker container “nodes”. Kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI.

    Instructions here. A couple of installation options:

    On macOS via Homebrew:
    brew install kind

    On macOS via MacPorts:
    sudo port selfupdate && sudo port install kind

    On Windows via Chocolatey (https://chocolatey.org/packages/kind):
    choco install kind

## Cluster setup

First we need to create local image registry and Kind cluster. You can do it by creating a shell script file and putting this code in it.


Put this code to cluster.sh file and run it with bash cluster.sh

The image registry is running on localhost:5001.
You can make local images accessible in Kind Kubernetes cluster by tagging them like this:

`<registry>:<registry-port>/<image-name>:<image-tag>`

Example: localhost:5001/api:k8

Also don’t forget to push your images with this command:

`docker image push <registry>:<registry-port>/<image-name>:<image-tag>`

Example: docker image push localhost:5001/api:k8

## Ingress

Next step for local cluster is an ingress controller. To setup ingress controller run this command:

`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml`

It will create bunch of kubernetes resources in ingress-nginx namespace. You have to wait for ingress controller to be running before moving to further steps. You can do it by running this command:
```
kubectl wait --namespace ingress-nginx \
--for=condition=ready pod \
--selector=app.kubernetes.io/component=controller \
--timeout=280s
```

After it’s running you can create your ingress resource. Modify this example based on your needs and apply it with:

`kubectl apply -f <filename>`

Note you can setup a tls-secret. You can do it by running these commands:

```
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout tls.key -out tls.crt -subj "/CN=nginxsvc/O=nginxsvc"
kubectl create secret tls tls-secret --key tls.key --cert tls.crt --namespace=<your-namespace>
```

Note that you have to create Ingress and tls-secret in namespace where the service you will be exposing is.

After Ingress is set up, as last step you need to port forward your ingress controller so it’s accessible from you machine:

```
kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80
Now you can access your service via browser on http://localhost:8080/
```

## Cleanup

To delete Kind cluster run:

`kind delete cluser`

Also don’t forget to delete image registry container:

`docker rm kind-registry`
