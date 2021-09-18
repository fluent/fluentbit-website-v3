---
layout: documentation
title: Fluent Bit v1.8.7 - Release Notes
intro: Release Notes
---

# Release Notes v1.8.7

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.8.7__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## News

[Fluent Bit](https://fluentbit.io) v1.8.7 is the stable release!, new changes on this version:

 - Core
   - oauth2: release upstream connection on exit (#4095)
   - upstream: fix mutex lock on pending destroy connections
   - http_server: health: check if hs_health_key is NULL(#3983)
   - http_server: metrics: add destructor to prevent leak
   - output: initialize network defaults for output instances (#4050) (#4088)
   - input: pause file storage when going over chunk limit. (#4077)
   - config: add scheduler cap and base (#4099)
   - aws_util: support auto_retry_requests for failed connections
   - aws_util: set max response buffer size for the http client (#4047)
   - lib: monkey: thread-local-storage fixes (#4101)

 - Plugins
   - [Lua (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/lua/)
      - Calculate table size using table.maxn (#3433)
   - [Nest (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/nest/)
      - Change log level (#4005)
   - [Record_Modifier (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/record_modifier/)
      - Set the limit of bool_map
      - Dynamic allocate bool_map (#3968)
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/kubernetes/)
      - New option ```use_tag_for_meta``` to use tag for metadata (#4062)
   - [S3 (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/s3/)
      - Support auto_retry_requests for failed connections
   - [Prometheus_Exporter (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/prometheus_exporter/)
      - Use instance host/port api (#4070) (#4081)
   - [Cloudwatch_Logs (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/cloudwatch_logs/)
      - Support ```auto_retry_requests``` for failed connections
   - [Elasticsearch (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/es/)
      - AWS is rebranding to Amazon OpenSearch service (text changes only)
   - [Kinesis_Streams (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/kinesis_streams/)
      - Change log level from ```info``` to ```debug``` for log send statement
      - Support ```auto_retry_requests``` for failed connections
   - [Kinesis_Firehose (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/kinesis_firehose/)
      - Change log level from ```info``` to ```debug``` for log send statement
      - Support ```auto_retry_requests``` for failed connections

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Leonardo Alminana](https://github.com/leonardo-albertovich)
- [Takahiro Yamashita](https://github.com/nokute78)
- [Phillip Whelan](https://github.com/pwhelan)
- [Wesley Pettit](https://github.com/PettitWesley)
- [Matthew Fala](https://github.com/matthewfala)
- [Eduardo Silva](https://github.com/edsiper)
- [Rayhan Hossain](https://github.com/hossain-rayhan)
