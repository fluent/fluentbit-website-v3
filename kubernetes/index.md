---
layout: article
version: 0.1
title: Kubernetes
article_title: Kubernetes
intro: Release notes
---

![](/assets/img/fluentbit_kubernetes.png)

> For a quick start, jump now to the [Official Kubernetes Documentation](http://fluentbit.io/documentation/0.11/kubernetes/)

For Kubernetes log handlers are independent components that helps to collect and process log files for every POD in the nodes.

The __recently__ released Fluent Bit __v0.11__, comes with full support for Kubernetes clusters:

- Read every container and POD log file
- Enrich logs with Kubernetes metadata:
  - POD Name
  - POD ID
  - Container Name
  - Container ID
  - Labels
  - Annotations
- Low memory consumption

All this is possible thanks for the following built-in plugins available:

- Tail input plugin
- Kubernetes filter plugin

__Tail Input Plugin__

This plugin allows to tail log files from multiple containers, parse the content and gather fixed metadata information from the file path.

__Kubernetes Filter Plugin__

This plugin takes the logs reported by _Tail Input Plugin_ and based on it metadata, it talks to the Kubernetes API server to get extra information, specifically POD metadata.

This plugin is fully inspired on the [Fluentd Kubernetes Metadata Filter](https://github.com/fabric8io/fluent-plugin-kubernetes_metadata_filter) written by [Jimmi Dyson](https://github.com/jimmidyson)

## Deploying Fluent Bit for Kubernetes

In order to obtain further details about deploying Fluent Bit on a Kubernetes cluster,
please jump directly to the [Official Kubernetes Documentation](http://fluentbit.io/documentation/0.11/kubernetes/) section.
