---
layout: documentation
version: v0.11.12
title: Fluent Bit v0.11.12 - Release Notes
intro: Release Notes
---

# Release Notes v0.11.12

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.11.12__.

## Changes

This is a bug fix release over 0.11 series that includes the following changes:

- Core
  - Build: fix to support parallel build of objects (make -j X)

- Plugins
  - [Tail (input)](http://fluentbit.io/documentation/0.11/input/tail.html): fix file removal of monitored-rotated file.
  - [Flowcounter (output)](http://fluentbit.io/documentation/0.11/output/flowcounter.html): new option _event\_based_ to handle situations where incoming records have a future date of events.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [wittenst](https://github.com/wittenst)
- [Scott Buettner](https://github.com/scottbuettner)
- [Takahiro Yamashita](https://github.com/nokute78)
- [Eduardo Silva](https://github.com/edsiper)
