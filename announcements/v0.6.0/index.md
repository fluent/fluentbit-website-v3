---
layout: announcement
version: v0.6.0
title: Fluent Bit v0.6.0 - Release Notes
intro: Release notes
---

# Release Notes v0.6.0

[Fluent Bit](http://fluentbit.io) is a specialized data collection tool with a strong focus on
Embedded Linux. We are proud to announce the availability of __Fluent Bit v0.6.0__.

## Changes

Below there is a list of the most relevant changes on this version:

- in_cpu: improved CPU statistics.
- in_mem: improved Mem statistics based on Kernel version.
- out_fluentd: new support for dynamic TAG.
- out_es: new support for custom index and types from the command line (URI).
- encryption: mbedtls updated to v2.2.1
- core: plugins can receive an extra parameter on initialization.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting and general contributions on this release:

- [Nokute78](https://github.com/nokute78)
- [Eduardo Silva](http://twitter.com/edsiper)
