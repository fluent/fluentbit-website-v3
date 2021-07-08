---
layout: documentation
title: Fluent Bit v1.8 - Release Notes
intro: Release Notes
---

# Release Notes v1.8

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.8__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## News

[Fluent Bit](https://fluentbit.io) v1.8 is the next major release!, here you get the exciting news:

### New Metrics Support!

For a long time our community have asked for native metrics support. Despite Fluent Bit has metrics collectors for CPU, Disk I/O, Network, Memory and others the data payload was handled as a simple structured log, that is called 'logs as metrics'. Now we are introducing 'native metrics'.

For Fluent Bit and Fluentd projects, getting into metrics is really exciting, and our vendor-neutral approach has always been to integrate to what the industry is using as a standard, so we approached Prometheus and OpenMetrics first from an integration point of view.

Our new Metrics support has been a huge effort to implement several components. The initial implementation consists on:

- New input plugin called __Node Exporter Metrics__ (Linux only): a _small copy_ of the great Prometheus Node Exporter. This plugin implement a sub-set of the available metrics but respecting all the namespaces and metrics names. So you can collect your host metrics as you usually do with Prometheus Node Exporter, but this is a built-in functionality.
- New output plugin called **Prometheus Exporter**: creates an HTTP end-point  to expose metrics payloads in Prometheus format, so any metric can be scraped.
- We developed new library [CMetrics](https://github.com/calyptia/cmetrics)  to handle all the metrics needs: counters, gauges and shortly histograms (this last one is under development).

In addition some output plugins now are aware about metrics payloads such as _stdout_, _file_ and _influxdb_.

#### Getting Started: Linux Node Metrics to Stdout:

```bash
docker run -v /proc:/host/proc -v /sys:/host/sys    \
    fluent/fluent-bit:1.8 fluent-bit/bin/fluent-bit \
        -i node_exporter_metrics      \
            -p scrape_interval=2      \
            -p path.procfs=/host/proc \
            -p path.sysfs=/host/sys   \
            -o stdout -f 1
```

#### Getting Started: Linux Node Metrics to Prometheus Exporter

Similar example than above but now we switch to Prometheus Exporter output plugin which expose metrics on port 2021:

```bash
docker run -p 2021:2021 -v /proc:/host/proc -v /sys:/host/sys    \
    fluent/fluent-bit:1.8 fluent-bit/bin/fluent-bit \
        -i node_exporter_metrics      \
            -p scrape_interval=2      \
            -p path.procfs=/host/proc \
            -p path.sysfs=/host/sys   \
            -o prometheus_exporter -f 1
```

Query the metrics with _curl_:

```bash
curl http://127.0.0.1:2021/metrics
```

#### What's next on metrics ?

During v1.8.x release cycle we will continue extending the unit metrics reported by Node Exporter Metrics, we will publish a new Prometheus Remote Write output plugin and add other functionalities for metrics handling.

We are in exciting times :)

### New Multiline Core Feature

Multiline has been always a complex problem in production environments. On this release, we implement a new core functionality to deal with most of the Multiline use cases, now we ship built-in support for containerized environments based on Docker or CRI plus stacktrace detectors for different languages such as Go, Ruby, Java, etc.

The first plugin to consume this feature is Tail input plugin. Without adding any breaking compatibility, we have added a new option to tail to enable this functionality. As an example, consider the case where a Kubernetes cluster in some nodes the logs are in Docker format while others are in CRI, how to solve that problem ?. Everything is now simplified by using something like this:

```
[INPUT]
    name              tail
    path              /var/log/containers/*.log
    multiline.parser  docker, cri
```

The option ```multiline.parser``` use the new multiline core feature,  you can easily deprecate the old docker mode allowing to have multi-detection in the format and auto-concatenating the messages.

Besides _built-in_ multiline parsers, we allow now to register your own multiline parsers in the current parsers.conf files by using the new ```[MULTILINE_PARSER]``` section.

### Enhanced Splunk Output Connector

We have extended the capabilities of our Splunk connector, now it supports additional metadata, fields and proper setup and behavior of raw mode.

### New HTTP Health end point

By using the new custom health enpoint ```/api/v1/health```, you can get a more accurate information about how healthy is Fluent Bit, it calculate error and success rates to indicate a proper healthy status.

### Kubernetes Filter

Our Kubernetes filters uses an internal cache to store Pods metadata to avoid generate load in the API Server. On this version we are introducing a new option to enforce a cache TTL so the cached data can expire at certain intervals, use the new option ```kube_meta_cache_ttl``` to take advantage of this (disabled by default).

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!
