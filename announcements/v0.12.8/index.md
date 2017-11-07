---
layout: documentation
version: v0.12.8
title: Fluent Bit v0.12.8 - Release Notes
intro: Release Notes
---

# Release Notes v0.12.8

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.12.8__.

## Changes

This is a minor fix release over 0.12 series that includes the following changes:

- Core
  - library mode: validate engine status on start.
  - input: fix collector ID when starting plugins.

- Plugins
  - [Kubernetes (filter)](http://fluentbit.io/documentation/0.12/filter/kubernetes.html): avoid extra escaping on log field when Merge\_JSON\_Log option is enabled.

  - [Parser (filter)](http://fluentbit.io/documentation/0.12/parser/filter.html): new __unescape_key__ configuration parameter to help parser on scenarios like Docker logs with nested stringified JSON maps.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Shmatov Dmitriy](https://github.com/dshmatov)
- [Bryan Pfremmer](https://github.com/pfremm)
- [Lars Kumbier](https://github.com/LarsKumbier)
- [gganssauge](https://github.com/gganssauge)
- [José Alberto](https://github.com/jalberto)
- [azhi](https://github.com/azhi)
- [Andrei Vaduva](https://github.com/lynxaegon)
- [Petr Michalec](https://github.com/epcim)
- [Eduardo Silva](https://github.com/edsiper)
