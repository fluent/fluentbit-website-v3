---
layout: documentation
version: v0.12.6
title: Fluent Bit v0.12.6 - Release Notes
intro: Release Notes
---

# Release Notes v0.12.6

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.12.6__.

## Changes

This is a minor fix release over 0.12 series that includes the following changes:

- Core
  - Utils: unify routine for string escaping
  - Config: Environment: preset ${HOSTNAME} if not available


- Plugins
  - [InfluxDB (output)](http://fluentbit.io/documentation/0.12/output/influxdb.html): fix string encoding for special characters.
  - [Tail (input)](http://fluentbit.io/documentation/0.12/input/tail.html): warn user if using Multiline mode but setting a normal-single Parser.
  - [Record Modifier (filter)](http://fluentbit.io/documentation/0.12/filter/record_modifier.html): extended error messages for debugging.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Petr Michalec](https://github.com/epcim)
- [jenningsloy318](https://github.com/jenningsloy318)
- [Eduardo Silva](https://github.com/edsiper)
