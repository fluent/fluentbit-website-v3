---
layout: documentation
version: v1.3.3
title: Fluent Bit v1.3.3 - Release Notes
intro: Release Notes
---

# Release Notes v1.3.3

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.3.3__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## Changes

[Fluent Bit](https://fluentbit.io) v1.3.3 is the next patch release on v1.3 series and comes with the following changes:

<br>
### List of general changes

 - Core
   - engine_dispatch: always validate if a 'retry' is possible (#1734)
   - task: if a retry is not possible, re-schedule it
   - io: new FLB_IO_TCP_KA (keepalive) experimental flag option (#1704)
   - output: fix duplicated instance_id
   - utils: fix buffer overrun on invalid UTF-8 characters
   - scheduler: upon retry, always remove the request first (#1734)
   - scheduler: upon request schedule failure, return request to the waitlist
   - upstream: add support for keepalive connections (#1704)
   - http_client: add experimental keepalive support mode (#1704)
   - http_server: uptime: fix buffer destroy with proper api (#1664)

 - Plugins
   - [Mem (Input)](https://docs.fluentbit.io/manual/input/mem/)
      - Don't discard return value of human_readable_size (#1625)
   - [Tcp (Input)](https://docs.fluentbit.io/manual/input/tcp/)
      - Prevent tcp_conn_event() from truncating data (#1713)
      - On json payload parse, check for -1 error
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/filter/kubernetes/)
      - Improve container hash handling (#1731)
      - Fix container hash lookup (#1691)
   - [Forward (Output)](https://docs.fluentbit.io/manual/output/forward/)
      - Don't handshake when the connection has been used (#1740)
   - [Influxdb (Output)](https://docs.fluentbit.io/manual/output/influxdb/)
      - Add missing msgpack_object_float32 to influxdb_format

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
- [Antoine Rouaze](https://github.com/Erouan50)
- [Masoud Koleini](https://github.com/koleini)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [kantica](https://github.com/kantica)
- [Nigel Stewart](https://github.com/nigels-com)
- [Masanori Matsumoto](https://github.com/m15o)
- [Takahiro YAMASHITA](https://github.com/nokute78)
