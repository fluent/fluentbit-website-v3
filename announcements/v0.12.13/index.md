---
layout: documentation
version: v0.12.13
title: Fluent Bit v0.12.13 - Release Notes
intro: Release Notes
---

# Release Notes v0.12.13

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.12.13__.

## Changes

This is a minor fix release over 0.12 series that includes the following changes:

- Core
  - Tasks/Scheduler: fix memory handling on retry scenarios with high load.
  - Input: fix handling of pause/resume events and collector status.

- Plugins
  - [Tail (input)](http://fluentbit.io/documentation/0.12/input/tail.html): fix leak on error condition for rotated files.
  - [Tail (input)](http://fluentbit.io/documentation/0.12/input/tail.html): if parser fails, pack raw text.
  - [Systemd (input)](http://fluentbit.io/documentation/0.12/input/systemd.html): partial fix for stalled reads.
  - [Grep (filter)](http://fluentbit.io/documentation/0.12/filter/grep.html): use internal regex engine instead of system regex.h

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Steve Coffman](https://github.com/StevenACoffman)
- [manuelluis](https://github.com/manuelluis)
- [Eduardo Silva](https://github.com/edsiper)
