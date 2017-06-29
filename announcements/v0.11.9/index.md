---
layout: documentation
version: v0.11.9
title: Fluent Bit v0.11.9 - Release Notes
intro: Release Notes
---

# Release Notes v0.11.9

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.11.9__.

## Changes

This is a bug fix release over 0.11 series that includes the following changes:

- Core
  - Backport _--sosreport, -S_ option from Enterprise edition to Community edition to print out internals used to submit bug reports.

- Plugins
  - Tail Input: fix handling of skipped records when Mem\_Buf\_Limit is set. Always check buffer status before to append more data.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- Tomasz Klewin
- [Eduardo Silva](http://github.com/edsiper)
