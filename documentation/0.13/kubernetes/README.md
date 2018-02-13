# Kubernetes

![](/imgs/flb_kubernetes.png)

Fluent Bit as a log forwarder is a perfect fit for Kubernetes use case. The following document describes how to deploy Fluent Bit for your log collection needs.


## Getting Started

The following steps assumes that you have a Kubernetes cluster running with an Elasticsearch database on it. Our default configuration assumes that your database can be reached through the DNS name _elasticsearch-logging_.

Please download the Fluent Bit DaemonSet for Elasticsearch from here:

- [fluent-bit-daemonset-elasticsearch.yaml](https://raw.githubusercontent.com/fluent/fluent-bit-kubernetes-daemonset/master/fluent-bit-daemonset-elasticsearch.yaml)

Now your master node deploy the daemonset with:

```
$ kubectl apply -f ./fluent-bit-daemonset-elasticsearch.yaml
```

After a few seconds Fluent Bit will be running and ingesting your logs into your Elasticsearch database. If you database have a different DNS name than _elasticsearch-logging_, make sure to perform the proper adjustments to the Yaml file.
