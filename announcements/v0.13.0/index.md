---
layout: documentation
version: v0.13.0
title: Fluent Bit v0.13.0 - Release Notes
intro: Release Notes
---

# Release Notes v0.13.0

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.13.0__.

## Changes

Fluent Bit v0.13.0 is the next major release and include several improvements an extensions through the plugins interface. The new additions are:

  - Core
    - Metrics: new [HTTP endpoints for monitoring](https://fluentbit.io/documentation/0.13/configuration/monitoring.html), export metrics in JSON and Prometheus format
  - Plugins
    - Filter
      - [Kubernetes](http://fluentbit.io/documentation/0.13/filter/kubernetes.html): new support of declarative annotations, let Pod's suggest a parser or be excluded from the logging pipeline.
      - [Throttle](https://fluentbit.io/documentation/0.13/filter/throttle.html): set average rate of messages per interval.
    - Output
      - [Azure](http://fluentbit.io/documentation/0.13/output/azure.html): new Azure Log Analytics output plugin.
      - [Kafka](http://fluentbit.io/documentation/0.13/output/kafka.html): new Apache Kafka output plugin.
      - [Splunk](http://fluentbit.io/documentation/0.13/output/splunk.html): new Splunk HEC output plugin.

## Contributors

On this 0.13 major release, several individuals from the community have contributed with documentation, github issues, troubleshooting and patches. Thanks everyone who have been involved to make Fluent Bit and extended and more reliable solution for Logging!
