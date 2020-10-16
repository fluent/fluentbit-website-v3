---
layout: documentation
version: v1.6.1
title: Fluent Bit v1.6.1 - Release Notes
intro: Release Notes
---

# Release Notes v1.6.1

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.6.1__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>

## Changes

[Fluent Bit](https://fluentbit.io) v1.6.1 is the minor release on 1.6 that comes with the following changes:

### Loki Ouput Plugin

We have added a new native (built-in) [Loki](https://grafana.com/oss/loki/) output connector!. This new plugin is very flexible and supports customizable labels. For more details about it configuration please refer to the following document:

- [https://docs.fluentbit.io/manual/pipeline/outputs/loki](https://docs.fluentbit.io/manual/pipeline/outputs/loki)

### Other Fixes

 - Core
   - engine: dispatch: check plugin multiplex setup
   - input: chunk: use 'trace' message instead of 'warn' for chunks without matching routes (#2684)
   - output: fix thread queue initialization for proxy plugins
   - output: register new flag FLB_OUTPUT_NO_MULTIPLEX and link coroutines to instance
   - parser: on exception, use flb_parser_destroy() (oss-fuzz 26308)
   - router: fix tag regression check (#2680)
   - http_client: on exception, use context destroyer (oss-fuzz 26399)
   - pack: gelf: on flatten, only process string key types (oss-fuzz 26294)
   - lib: mbedtls: CMakeLists.txt: fix a typo for CFLAGS (#2662)

 - Plugins
   - [S3 (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/s3/)
      - Run upload callback without async mode (#2677)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Eduardo Silva](https://github.com/edsiper)
- [Wesley Pettit](https://github.com/PettitWesley)
- [Ming](https://github.com/liuming50)
