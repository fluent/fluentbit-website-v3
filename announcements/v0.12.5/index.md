---
layout: documentation
version: v0.12.5
title: Fluent Bit v0.12.5 - Release Notes
intro: Release Notes
---

# Release Notes v0.12.5

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.12.5__.

## Changes

This is a minor fix release over 0.12 series that includes the following changes:

- Core
  - Config: improved MongoDB parser regular expression

- Plugins
  - [Systemd (input)](http://fluentbit.io/documentation/0.12/input/systemd.html): new configuration option _read\_from\_tail_ to read just new messages.
  - [Parser (filter)](http://fluentbit.io/documentation/0.12/filter/parser.html): fix array index when processing next result.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Adrián López](https://github.com/adrianlzt)
- [Felipe Astroza](https://github.com/astroza)
- [hetile-ssense](https://github.com/hetile-ssense)
- [Eduardo Silva](https://github.com/edsiper)
