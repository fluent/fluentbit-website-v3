---
layout: announcement
version: v0.11.10
title: Fluent Bit v0.11.10 - Release Notes
intro: Release Notes
---

# Release Notes v0.11.10

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.11.10__.

## Changes

This is a bug fix release over 0.11 series that includes the following changes:

- Core
  - Pack: fix json-encoding for special characters.
  - SOS Report: include _Mem\_Buf\_Limit_ value if set.
  - Config: increse config line length limit to 1KB.

- Plugins
  - tail (input): add support for dynamic buffers. Specific cases where log lines are longer than buffer sizes requires special handling. Two new option have been added to deal with these cases: _buffer\_chunk_ and _buffer\_max\_size_.
  - tail (input): option _refresh\_interval_ now supports fractional seconds (nanoseconds).
  - tail (input): database operations now checks file inode in addition to the file name.
  - tail (input): fix detection of rotated files with pending bytes.
  - syslog (input): standarize buffer sizes and configuration.
  - counter (output): summarize all records.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Mahdi Asadpour](https://github.com/mahdi-asadpour-rr)
- [Kent Wang](https://github.com/pragkent)
- [Darek Dymek](https://github.com/darek-dymek-i)
- [Takahiro Yamashita](https://github.com/nokute78)
- [Zet Te](https://github.com/zette)
- [Eduardo Silva](http://github.com/edsiper)
