---
layout: documentation
version: v0.14.8
title: Fluent Bit v0.14.8 - Release Notes
intro: Release Notes
---

# Release Notes v0.14.8

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.14.8__.

## Changes

This is a minor fix release over 0.14 series that includes the following changes:

 - Core
     - Config: allow to set Log_Level through environment variable.

 - Plugins
     - [Tail (Input)](https://docs.fluentbit.io/manual/input/tail): fix high CPU usage on busy notification channels (errno related).
     - [Systemd (Input)](https://docs.fluentbit.io/manual/input/systemd)
       - Improve performance ~4.5%.
       - Fix tag composing that were not matching _SYSTEMD_UNIT.
       - New option _max\_fields_ to limit the number of keys per record.


## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Richard Burakowski](https://github.com/richardburakowski)
- [ArvydasN](https://github.com/nauckunas)
- [Eduardo Silva](https://github.com/edsiper)
