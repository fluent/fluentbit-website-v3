---
layout: documentation
title: Fluent Bit v1.8.2 - Release Notes
intro: Release Notes
---

# Release Notes v1.8.2

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.8.2__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## Quick Summary of "New things"

#### New Multiline, Filter and Documentation

- [Multiline Filter](https://docs.fluentbit.io/manual/pipeline/filters/multiline-stacktrace)
- [Multiline Parsing Config](https://docs.fluentbit.io/manual/administration/configuring-fluent-bit/multiline-parsing)
- [Tail + New Multiline Support](https://docs.fluentbit.io/manual/pipeline/inputs/tail#multiline-support)

<br>
## News

[Fluent Bit](https://fluentbit.io) v1.8.2 is the stable release!, new changes on this version:

 - Core
   - input_chunk: use new api to determinate logs vs metrics
   - input: fix event type checker for metrics
   - output: don't return uninitialized variable
   - general: add docker_compose examples to the repo
   - pack_gelf: ensure proper cleanup in case of failure
   - multiline: extend support for concat records and override properties
   - multiline: append breakline on raw text concatenation
   - signv4: fix NULL dereference
   - build: fix rpm user file list.

 - Libs
   - cmetrics: upgrade to v0.1.5
   - snappy: new Snappy library

 - Plugins
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - Add new option ```skip_empty_lines``` (default: false)
   - [Node_Exporter_Metrics (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/node_exporter_metrics/)
      - Do not enqueue data before the collector start
      - Fix compiler warnings
      - Add ```filefd``` Linux collector
      - Add ```vmstat``` and ```netdev``` Linux collectors
   - [Multiline (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/multiline/)
      - New ```multiline``` filter
   - [S3 (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/s3/)
      - Fix compiler warnings
      - Fix use-after-free in destructor
   - [Prometheus_Remote_Write  (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/prometheus_remote_write/)
      - New Prometheus Remote Write output plugin
   - [Influxdb (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/influxdb/)
      - Enable http debug callbacks
      - Rename option ```header``` as ```http_header```
      - Migrate to configmap and append new options
      - Add support for native metrics handling
   - [Kafka (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/kafka/)
      - Upgrade librdkafka v1.6.0 to v1.7.0
   - [Prometheus_Exporter (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/prometheus_exporter/)
      - Support multiple metrics
      - Remove unused variable
   - [Splunk (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/splunk/)
      - Set channel len on init
   - [Loki (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/loki/)
      - Do not retry when Loki returns 400.
   - [Elasticsearch (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/es/)
      - Estimate bulk size to less reallocation(#3775)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Eduardo Silva](https://github.com/edsiper)
- [Jesse Rittner](https://github.com/rittneje)
- [David Korczynski](https://github.com/DavidKorczynski)
- [Leonardo Alminana](https://github.com/leonardo-albertovich)
- [Takahiro Yamashita](https://github.com/nokute78)
- [Jorge Niedbalski](https://github.com/niedbalski)
