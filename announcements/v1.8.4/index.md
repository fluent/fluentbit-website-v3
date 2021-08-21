---
layout: documentation
title: Fluent Bit v1.8.4 - Release Notes
intro: Release Notes
---

# Release Notes v1.8.4

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.8.4__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## News

[Fluent Bit](https://fluentbit.io) v1.8.4 is the stable release!, new changes on this version:

 - Core
   - plugins: new 'custom' plugins type
   - bin: load 'custom' plugins with '-C'
   - bin: add SIGFPE handler
   - fstore: new api to perform file lookup by name
   - utils: new machine-id reader and OS detector
   - aws: fix constant value as labeled name (#3946)
   - multiline: fix CRI time format string
   - build: avoid conflicting command options on Visual Studio 2019
   - build: Add -latomic for armv7l
   - error: register custom invalid error
   - http_client: remove ability to see HTTP request for non-dev environments
   - http_client: add support for PATCH method
   - router: expose connector
   - port metrics to cmetrics: metrics_exporter, engine, input, filter and output

 - Lib
   - cmetrics: upgrade to v0.2.1
   - mbedtls: do not use std=c99 on Windows
   - mbedtls: upgrade from v2.26 to v2.27

 - Plugins
   - Calyptia (Custom)
      - New Calyptia 'custom' plugin to monitor agents with [Calyptia Cloud](https://cloud.calyptia.com)
   - [Fluentbit_Metrics (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/fluentbit_metrics/)
      - New plugin to emit Fluent Bit internal metrics
      - Extend collectors to 'start' and 'runtime'
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - Initialize crlf (#3943)
      - Add cmetrics support
   - [Checklist (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/checklist/)
      - New filter to flag records based on matching strings (#3869)
   - [Rewrite_Tag (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/rewrite_tag/)
      - Implement cmetrics support
   - [Datadog (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/datadog/)
      - Do not print api_key in debug logs
   - [S3 (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/s3/)
      - Added file permission executable fix
   - [Prometheus_Exporter (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/prometheus_exporter/)
      - Do not process empty metrics context
   - [Splunk (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/splunk/)
      - If 'event_key' is missing, pack as a normal map
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver/)
      - Add cmetrics support
   - [Loki (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/loki/)
      - Remove kv only if 'remove_keys' enabled (#3867)
   - [Elasticsearch (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/es/)
      - Check if converted_size is 0 to prevent sigfpe (#3905)
   - [Calyptia (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/calyptia/)
      - New 'calyptia cloud' private plugin

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Eduardo Silva](https://github.com/edsiper)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [zv0n](https://github.com/zv0n)
- [Takahiro Yamashita](https://github.com/nokute78)
- [Tori Hara](https://github.com/toricls)
- [Wesley Pettit](https://github.com/PettitWesley)
- [Simon A. Eugster](Granjow)
- [Stephen Lee](https://github.com/StephenLeeY)
