---
layout: documentation
version: v1.7.3
title: Fluent Bit v1.7.3 - Release Notes
intro: Release Notes
---

# Release Notes v1.7.3

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.7.3__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- <a href="https://docs.fluentbit.io/manual/installation/upgrade_notes">https://docs.fluentbit.io/manual/installation/upgrade_notes</a>

<br>

## Changes

[Fluent Bit](https://fluentbit.io) v1.7.3 is the patch release on top of 1.7 series that comes with the following changes:

 - Core
   - oauth2: add missing code to clear sds string (#3291)
   - network: on connection error, reset context and invalidate fd (#3058)
   - utils: not to convert codepoint string (#3280) (#3284)
   - ra: validate parts and fix parser byte range (#3290)
   - io: reset context on failure and avoid closing socket on exception (#3058)
   - upstream: fix handling of destroy queue
   - upstream: on connection close, invalidate context
   - upstream: remove double check of tls_session
   - upstream: put timed out busy connection on destroy queue

 - Plugins
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - Add new configuration property ```db.journal``` (default: WAL) (#3239)
      - Pass missing argument processed_bytes (#3157)
   - [S3 (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/s3/)
      - Support ```uuid``` in s3 key format
   - [Elasticsearch (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/es/)
      - Support ```id_key``` to get id from record(#3303) (#3320)
   - [Splunk (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/splunk/)
      - Remove allocation http_user/http_passwd (#3319)
      - Prioritize http basic auth over splunk token (#3231)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Takahiro Yamashita](https://github.com/nokute78)
- [Henrique Matulis](https://github.com/hsmatulisgoogle)
- [Jorge Niedbalski](https://github.com/niedbalski)
- [Akshay Dubey](https://github.com/AkshayDubey29)
- [Eduardo Silva](https://github.com/edsiper)
- [Michael Wiesenbauer](https://github.com/sonork)
- [Zhonghui Hu](https://github.com/zhonghui12)
