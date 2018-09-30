---
layout: documentation
version: v0.14.4
title: Fluent Bit v0.14.4 - Release Notes
intro: Release Notes
---

# Release Notes v0.14.4

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.14.4__.

## Changes

This is a minor fix release over 0.14 series that includes the following changes:

 - Core
     - Parser: add file & section-name diagnostics to error output

 - Plugins
     - [Memory (Input)](https://docs.fluentbit.io/manual/input/mem): fix memory leak on error and fix type specifiers.
     - [Syslog (Input)]()
         - add support for UDP network mode.
         - use dynamic buffer for _udp_ and _unix\_udp_ modes.
     - [Parser (Filter)](https://docs.fluentbit.io/manual/filter/parser): fix unitialized parsed time.
     - [InfluxDB (Output)](https://docs.fluentbit.io/manual/output/influxdb): avoid duplicated timestamps and fix string escaping.
     - [Stdout (Output)](https://docs.fluentbit.io/manual/output/stdout): for flush of stdout.
     - [Lib (Output)](https://docs.fluentbit.io/manual/development/library_api): fix stack overflow when using raw msgpack fmt.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Don Bowman](https://github.com/donbowman)
- [Vincent Auclair](https://github.com/newtoncorp)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Yang Yu](https://github.com/disigma)
- [Eduardo Silva](https://github.com/edsiper)
