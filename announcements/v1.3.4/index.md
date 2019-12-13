---
layout: documentation
version: v1.3.4
title: Fluent Bit v1.3.4 - Release Notes
intro: Release Notes
---

# Release Notes v1.3.4

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.3.4__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## Changes

[Fluent Bit](https://fluentbit.io) v1.3.4 is the next patch release on v1.3 series and comes with the following changes:

<br>
### List of general changes

 - Core
   - sds: fix missing va_end(x) on flb_sds_printf() call when a memory increase is required
   - parser: logfmt: fix handling of empty string and null value (#1737)
   - build: fix FLB_OPTION cmake macro (#1802)
   - scheduler: do not remove the 'retry request' context before perform the retry
   - http_server: v1: metrics: fix potential SIGSEGV due to memory allocation errors (#1762)

 - Plugins
   - [Netif (Input)](https://docs.fluentbit.io/manual/input/netif/)
      - Fix uninitialized variable to malloc (#1680) (#1681)
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/filter/kubernetes/)
      - Minor clarification of runtime error message in kubernetes filtering
   - [Kafka (Output)](https://docs.fluentbit.io/manual/output/kafka/)
      - Add dynamic kafka message key setting (#1176)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
- [lee-byeoksan](https://github.com/lee-byeoksan)
- [Xiang Dai](https://github.com/daixiang0)
- [pszemus](https://github.com/pszemus)
- [Takahiro YAMASHITA](https://github.com/nokute78)
- [Fujimoto Seiji](https://github.com/fujimotos)
