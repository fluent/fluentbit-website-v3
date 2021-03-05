---
layout: documentation
version: v1.7.2
title: Fluent Bit v1.7.2 - Release Notes
intro: Release Notes
---

# Release Notes v1.7.2

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.7.2__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- <a href="https://docs.fluentbit.io/manual/installation/upgrade_notes">https://docs.fluentbit.io/manual/installation/upgrade_notes</a>

<br>

## Changes

[Fluent Bit](https://fluentbit.io) v1.7.2 is the patch release on top of 1.7 series that comes with the following changes:

 - Core
   - coro: protect first initialization of coroutine with new API (#3055)
   - storage: increase default memory limit from 5M to 100M
   - output_thread: protect 'coros' list with mutex and new API for query (#3120)
   - aws: make sure TLS is disabled for ecs and ec2 providers (#3155)
   - input_chunk: use new API to count up chunks bytes
   - input_chunk: honor 'down' state of a forced 'up' chunk
   - input_chunk: Include metadata bytes when creating new input chunk (#3118)
   - gzip: fix size check leading to overflow. OSS-Fuzz 6354610792693760 (#3138)
   - http_client: fix missing check on val leading to overflow. OSS-Fuzz 6211846364987392 (#3137)
   - http_client: fix bug when resizing header. (#3126)
   - pack: fix type confusion bugs. Amongst other OSS-Fuzz 5136174263566336 (#3115)
   - sds: fix off-by-one overflow. OSS-Fuzz 5647136884654080 (#3136)
   - sds: fix length check. OSS-Fuzz 6227554268741632  (#3122)
   - conf: add a parser for IP Tables firewall rules (#3108)

 - Libraries
   - chunkio: upgrade to v1.1.1
   - monkey: sync event epoll changes on closing timeout fd

 - Plugins
   - [Storage_Backlog (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/storage_backlog/)
      - Extra checks and use content size for validation
   - [Dummy (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/dummy/)
      - Support config map (#3135)
   - [Winlog (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/winlog/)
      - Split an identifier into ```eventid``` and ```qualifiers``` (#3121)
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/kubernetes/)
      - Fix coverity scan cid 161078 for code maintainability issue
      - Option for get meta information from kubelet /pods endpoint (experimental)
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver/)
      - Added ```export_to_project_id``` option (#3113)
   - [Elasticsearch (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/es/)
      - Add option ```suppress_type_name``` for v7.0.0 or later(#2869) (#3140)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Takahiro Yamashita](https://github.com/nokute78)
- [Richard Song](https://github.com/richardmcsong)
- [David Korczynski](https://github.com/DavidKorczynski)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Wesley Pettit](https://github.com/PettitWesley)
- [Eduardo Silva](https://github.com/edsiper)
- [Matthew Macdonald-Wallace](https://github.com/proffalken)
- [Jeff Luo](https://github.com/JeffLuoo)
- [Drew Zhang](https://github.com/DrewZhang13)
