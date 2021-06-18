---
layout: documentation
version: v1.7.9
title: Fluent Bit v1.7.9 - Release Notes
intro: Release Notes
---

# Release Notes v1.7.9

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.7.9__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- <a href="https://docs.fluentbit.io/manual/installation/upgrade_notes">https://docs.fluentbit.io/manual/installation/upgrade_notes</a>

<br>

## Changes

[Fluent Bit](https://fluentbit.io) v1.7.9 is the patch release on top of 1.7 series that comes with the following changes:

 - Core
   - oauth2: release upstream connections before return
   - hash: add configurable TTL for cached metadata
   - network: make async dns query use TCP socket instead of UDP
   - utils: fix integer overflow guard. (#3593)
   - output_thread: fixed wrong pipe io function usage
   - metrics: allow metric name up to 64 bytes
   - http_server: api/v1: metrics: add fluentbit_uptime on prometheus output
   - output: add new 'dropped_records_total' and 'retried_records_total' metrics
   - http_client: fix NO_PROXY matching condition (#3627)
   - pack: on exception, release unpacked result

 - Lib:
   - monkey: fix http_parser

 - Plugins
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - Fix handling of 'db.journal_mode' option
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/kubernetes/)
      - Add configurable ttl for cached metadata
   - [S3 (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/s3/)
      - Fix documentation for total_file_size option
   - [Cloudwatch_Logs (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/cloudwatch_logs/)
      - Fix log loss issue #3638
      - Fail request when x-amzn-requestid header is not set
   - [Loki (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/loki/)
      - Release ra_kv at error case
   - [Bigquery (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/bigquery/)
      - Always release unpacked results after formatting
      - On token renewal, cleanup oauth2 payload buffer
      - Fix oauth2 handling renewal and serialize access
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver/)
      - Add new metrics 'stackdriver_failed_requests' and 'stackdriver_successful_requests'

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Eduardo Silva](https://github.com/edsiper)
- [Wesley Pettit](https://github.com/PettitWesley)
- [Zhonghui Hu](https://github.com/zhonghui12)
- [Takahiro Yamashita](https://github.com/nokute78)
- [Tomokazu Hirai](https://github.com/jedipunkz)
- [Leonardo Alminana](https://github.com/leonardo-albertovich)
- [courageJ](https://github.com/courageJ)
- [DavidKorczynski](https://github.com/DavidKorczynski)
