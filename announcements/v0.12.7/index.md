---
layout: documentation
version: v0.12.7
title: Fluent Bit v0.12.7 - Release Notes
intro: Release Notes
---

# Release Notes v0.12.7

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.12.7__.

## Changes

This is a minor fix release over 0.12 series that includes the following changes:

- Core
  - HTTP Client: fix buffer size calculation

- Plugins
  - [Tail (input)](http://fluentbit.io/documentation/0.12/input/tail.html): validate static file status before be promoted to inotify.

  - [Kernel Log Messages (input)](http://fluentbit.io/documentation/0.12/input/kmsg.html): use dynamic buffer to process messages.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [James Ravn](https://github.com/jsravn)
- [Petr Michalec](https://github.com/epcim)
- Evgeny Kornev
- [Eduardo Silva](https://github.com/edsiper)
