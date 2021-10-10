---
layout: documentation
title: Fluent Bit v1.8.8 - Release Notes
intro: Release Notes
---

# Release Notes v1.8.8

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.8.8__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## News

[Fluent Bit](https://fluentbit.io) v1.8.8 is the stable release!, new changes on this version:

 - Core
   - engine: added storage backlog chunk segregation
   - network: fixed a local resolution corner case
   - upstream: added a flag to delay connection disposal
   - upstream: made a few shutdown calls conditional
   - aws: fix constant definition in header, set it as extern (#4147)
   - aws: Add imds tests and mock flb_aws_client via flb_aws_client_mock struct
   - aws: Include IMDSv2 support for EC2 instances
   - scheduler: fix race condition of double closing of oneshot timers (#3766)
   - output: added field to track backlog chunk space usage
   - input_chunk: added code to ease the chunk rollover mechanism transition
   - input_chunk: revamped the storage limit implementation

 - Libraries
   - Chunk I/O: upgrade to v1.1.4
   - CMetrics : upgrade to v0.2.2

- Plugins
   - Storage_Backlog
      - Properly handle when storage is not set
      - Added segregated queues and selective chunk dropping
   - [Winlog (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/winlog/)
      - Support `use_ansi` config property (#4129)
   - [Http (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/http/)
      - Add lack of initialization and error handling (#4130)
   - [S3 (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/s3/)
      - Add back flb_sds_destroy() lost in 8cd50f8 (#4038)
   - [Cloudwatch_Logs (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/cloudwatch_logs/)
      - Resolve unpaired trailing backslash sanitization failure
   - [Bigquery (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/bigquery/)
      - Add `skipinvalidrows` and `ignoreunknownvalues` params (#4158)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!


- [zhenyami](https://github.com/zhenyami)
- [Leonardo Alminana](https://github.com/leonardo-albertovich)
- [Daniel Lenar](https://github.com/danlenar)
- [Matthew Fala](https://github.com/matthewfala)
- [Hiroshi Hatake](https://github.com/cosmo0920)
- [Philip Soares](https://github.com/psoaresgit)
- [Eduardo Silva](https://github.com/edsiper)
