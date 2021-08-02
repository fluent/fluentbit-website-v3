---
layout: documentation
title: Fluent Bit v1.8.3 - Release Notes
intro: Release Notes
---

# Release Notes v1.8.3

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.8.3__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## News

[Fluent Bit](https://fluentbit.io) v1.8.3 is the stable release!, new changes on this version:

 - Core
   - multiline: always validate stream_id with lru_parser
   - multiline: fix states rules handling
   - output_thread: fixed multiple initialization of local_thread_instance in emulated TLS
   - http_client: log allocation failures for request headers
   - http_client: warn when flb_http_do() fails due to malformed data
   - aws_util: added index recognition for flb_get_s3_key
   - lib: fix race between flb_start and flb_destroy

 - Libraries
   - cmetrics: upgrade to v0.1.6

 - Plugins
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - Add custom keys to multiline payload
   - [Multiline (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/multiline/)
      - Flush before return and added new option 'debug_flush'
   - [S3 (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/s3/)
      - Re-added static file path configuration option
      - Added file permission fix and flb_errno to read / write file
      - Fixed potential segfault on file discard
      - Added data ordering preservation feature
      - Added sequential index feature
      - Log_key configuration option implemented
      - Added static file path configuration option
   - [Loki (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/loki/)
      - Delay mp_sbuf->data derefence (#3796)
   - [Prometheus_Remote_Write (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/prometheus_remote_write/)
      - Concatenate cmetrics buffers

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Stephen Lee](https://github.com/StephenLeeY)
- [Eduardo Silva](https://github.com/edsiper)
- [Leonardo Alminana](https://github.com/leonardo-albertovich)
- [Jesse Rittner](https://github.com/rittneje)
- [Aaron Jacobs](https://github.com/atheriel)
- [Richard Burakowski](https://github.com/richardburakowski)
