---
layout: documentation
version: v1.7.4
title: Fluent Bit v1.7.4 - Release Notes
intro: Release Notes
---

# Release Notes v1.7.4

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.7.4__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- <a href="https://docs.fluentbit.io/manual/installation/upgrade_notes">https://docs.fluentbit.io/manual/installation/upgrade_notes</a>

<br>

## Changes

[Fluent Bit](https://fluentbit.io) v1.7.4 is the patch release on top of 1.7 series that comes with the following changes:

 - Core
   - task: on retries, put chunk down (#3341)
   - build: use static linking with OpenSSL on Windows (#3193) (#3323)
   - scheduler: fix double close of timer_fd (#3058 #3326)
   - input_chunk: skip updating fs_chunks_size when no content in the chunk
   - input_chunk: when hitting the limit, update fs_chunks_size by the size of last chunk

 - Plugins
   - [S3 (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/s3/)
      - Optionally send content-md5 header to s3
      - Fix memory leak when gzip is enabled
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver/)
      - New option ```stackdriver_agent``` to override HTTP user-agent (#3230)
   - [HTTP (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/http/)
      - New ```log_response_payload``` option to enable or disable payload logging (#3348)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Jorge Niedbalski](https://github.com/niedbalski)
- [Lionel Cons](https://github.com/LionelCons)
- [Jeff Luo](https://github.com/JeffLuoo)
- [Eduardo Silva](https://github.com/edsiper)
- [Steve McKay](https://github.com/smckay-signifyd)
- [Zhonghui Hu](https://github.com/zhonghui12)
- [Fujimoto Seiji](https://github.com/fujimotos)
