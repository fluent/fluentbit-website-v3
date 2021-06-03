---
layout: documentation
version: v1.7.8
title: Fluent Bit v1.7.8 - Release Notes
intro: Release Notes
---

# Release Notes v1.7.8

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.7.8__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- <a href="https://docs.fluentbit.io/manual/installation/upgrade_notes">https://docs.fluentbit.io/manual/installation/upgrade_notes</a>

<br>

## Changes

[Fluent Bit](https://fluentbit.io) v1.7.8 is the patch release on top of 1.7 series that comes with the following changes:

 - Core
   - output: release instance when init failed (#3576)
   - unescape: fix casting char to uint32_t on arm inconsistent with x86
   - network: release ares_addrinfo after using it (#3572) (#3575)
   - input: release instance when init failed and fix typo (#3577)
   - gzip: fix memory leak on exception (#3561)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- Yinjie Du
- [Takahiro Yamashita](https://github.com/nokute78)
- [DavidKorczynski](https://github.com/DavidKorczynski)
- [Eduardo Silva](https://github.com/edsiper)
