---
layout: documentation
title: Fluent Bit v1.8.12 - Release Notes
intro: Release Notes
---

# Release Notes v1.8.12

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.8.12__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## News

[Fluent Bit](https://fluentbit.io) v1.8.12 is the stable release!, new changes on this version:

 - Core
   - tls: openssl: fix error handling for OpenSSL apis (#4584)
   - input chunk: correctly calculate the difference when chunks grow (#4318) (#4461)
   - parser: if multiline parser is set, get the reference
   - network: properly react to being awoken due to a timeout
   - network: preserve addrlinfo list release address
   - network: argument type error correction
   - network: added `dns.prefer_ipv4` result priorization option
   - build: add a sample config file for Windows
   - upstream: moved event injection and implemented timeout wakeup mechanism
   - upstream: add new option `net.connect_timeout_log_error` (#4473)
   - input_chunk: warn the user about tag truncation due to limits (#4467)
   - dockerfiles: backport systemd lib fixes from #3177 to 1.8 (#4567)

- Tests:
    - tests: internal: timeout: added coroutine hang test case (#4605)
    - tests: runtime: add tests for multiline filter
    - tests: runtime: in_tail: new multiline + json + regex test

 - Libs:
   - lib: mbedtls: upgrade from v2.27 -> v2.28
   - lib: monkey: sync inject enhancement and list fixes (#4623)
   - lib: monkey: sync fix for config reader

 - Plugins
   - [Forward (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/forward/)
      - Clear out_tag before using it (#4670)
      - Add new option `tag_prefix` (#4455) (#4466)
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - Enhance handling of high number of static files (#3947)
      - Fix multiline api buffer ingestion (#4554)
   - [Exec (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/exec/)
      - Don't eat last character of plugin output (#4655)
   - [Rewrite_Tag (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/rewrite_tag/)
      - Set 'keep' before emitting the record (#4518)
   - [Multiline (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/multiline/)
      - Implement buffered mode using in_emitter
   - [S3 (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/s3/)
      - Add support for external_id
   - [Kinesis_Firehose (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/kinesis_firehose/)
      - Add support for external_id
   - [Cloudwatch_Logs (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/cloudwatch_logs/)
      - Add support for external_id
      - Fix invalid memory access bug #4425
   - [Splunk (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/splunk/)
      - New `http_debug_bad_request` option
      - Auto-set http response buffer size if `http_buffer_size` is not set or zero
   - [Forward (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/forward/)
      - Add missing ra check (#4511)
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver/)
      - Protect against undefined metadata (#4664)
   - [Kinesis_Streams (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/kinesis_streams/)
      - Add support for external_id

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Ramya Krishnamoorthy](https://github.com/krispraws)
- [Leonardo Alminana](https://github.com/leonardo-albertovich)
- [Takahiro Yamashita](https://github.com/nokute78)
- [Pat](https://github.com/patrick-stephens)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Wesley Pettit](https://github.com/PettitWesley)
- [Eduardo Silva](https://github.com/edsiper)
- [Jorik Jonker](https://github.com/jonkerj)
