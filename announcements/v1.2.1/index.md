---
layout: documentation
version: v1.2.1
title: Fluent Bit v1.2.1 - Release Notes
intro: Release Notes
---

# Release Notes v1.2.1

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.2.1__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## Changes

[Fluent Bit](https://fluentbit.io) __v1.2.1__ is the next minor release of _1.2_ series.

<br>
### List of general changes

 - Core
   - utils: fix JSON encoding for special characters (#1278 #1415)
   - pack: merge and improve msgpack to JSON formatter API

 - Libraries:
   - chunkio: sync fixes for realloc handling issues

 - Plugins
   - [Modify (Filter)](https://docs.fluentbit.io/manual/filter/modify/)
      - Copy original event if condition is not matched (#1077 #1416)
   - [TCP (Output)](https://docs.fluentbit.io/manual/output/tcp/)
      - New TCP output plugin with optional TLS support

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Takahiro YAMASHITA](https://github.com/nokute78)
