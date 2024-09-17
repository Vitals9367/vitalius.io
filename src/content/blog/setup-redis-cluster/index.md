---
title: "How to Setup Redis Sentinel Cluster on Kubernetes & OpenShift"
summary: "A step-by-step guide to setting up a high-availability Redis Sentinel cluster on Kubernetes and OpenShift platforms."
date: "Feb 15, 2024"
draft: false
tags:
- Redis
- Kubernetes
---

Redis — Very cool open-source, in-memory data store. Having it in your Kubernetes will definitely benefit any project you are running in your namespaces. Run this command:

kubectl run redis --image redis
And 🎊whualia🎊, you have Redis on your Kubernetes cluster.

Well, there is another side of the coin. Most projects need something more stable than 1 Redis pod. And that is where issues begin. Simply scaling Redis from 1 pod to n amount of pods creates a big stale cache issue. Traffic gets load balanced between pods, so whenever some changes are done to 1 pod, it’s not replicated in other ones. Which makes the whole cache ineffective.

But don’t worry, that’s where the Redis-Sentinel cluster comes in. Basically what we will create is in this picture:


3 Redis sentinel pods — Sentinels' goal is to monitor Redises, control failover, and update Redis pod configuration. More Info here.
3 Redis pods, out of whom 1 will be master and 2 slaves.
How this works

Slave Redis pods replicate all data from the master pod. Master pod accepts Reads and Writes. Sentinel monitors Redis pods and in a case when the master goes down, it converts one of the slaves to a master.

How to implement this to Kubernetes

To start with, let's create a couple of config maps and secret files:
1. redis-config.yml — This is a base config map for all Redis and Sentinel pods. If you want to add some Redis settings to all cluster pods, you can do it there.


2. redis-scripts-config.yml — Contains startup scripts for Sentinel and Redis Pods.

Sentinel goes through REDIS_NODES, which is defined in the config map above, and searches for the Redis master pod. After that, it updates some configurations.

Redis connects to Sentinel and checks if he is a master or not. Updated configuration based on that.


3. redis-secret.yml — Contains Redis password.


Okay, so as now we got these config maps and secret, we can move to stateful sets.

Sentinel stateful set

2. Redis stateful set


And last configuration files that we need are services:


File order
For the cluster to work, you need to apply files in this order:

Config maps and secret
Services
Redis stateful set
Sentinel stateful set
Notes:
1. Redis has to be running when Sentinel pods are being deployed. Otherwise, startup scripts will fail.
2. I ran into some issues when using Redis 6, but those issues were fixed in Redis version 7, that’s why I am using redis:7.0 image.
3. These files are just meant to be a template. Feel free to modify them based on your needs.

Git repository with these files and a startup script here. Clone the repository and spin up your cluster with this command:

sh startCluster.sh
And to clean up, run:

kubectl delete ns redis-sentinel
If you want to connect using Redis, you have to connect via Sentinel service. Make sure that your application supports Sentinel. You can connect to it from the same namespace with these settings:
```
Host: sentinel or sentinel.<namespace>.svc.cluster.local
Port: 5000
Password: From redis-secret
Instance: mymaster (defined in sentinel startup script)
```
Now you got a proper Redis-Sentinel cluster 🙌. Good luck with your next projects.

If you are interested in Kubernetes and want to create your local cluster, please check out my article on how to set up an advanced Kubernetes cluster