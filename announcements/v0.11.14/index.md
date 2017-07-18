---
layout: documentation
version: v0.11.14
title: Fluent Bit v0.11.14 - Release Notes
intro: Release Notes
---

# Release Notes v0.11.14

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.11.14__.

## Changes

This is a bug fix release over 0.11 series that includes the following changes:

- Core
  - Unit Sizes: use decimal values and proper prefixes.
  - Buffering (file system): fix crash due to bad initialization.
  - Unit Tests: new test interface for pack, parser and hashtable.

- Parser
  - Time Lookup: unified interface for JSON and Regex backends.
  - New Time_Offset configuration key to set optional UTC offset.

- Plugins
  - Kubernetes (filter): on nested json, skip trash bytes after map ends properly.
  - Elasticsearch (output): always validate HTTP response body status.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Scott Buettner](https://github.com/scottbuettner)
- [wittenst](https://github.com/wittenst)
- [Takahiro Yamashita](https://github.com/nokute78)
- [Martin Chodur](https://github.com/fusakla)
- [Eduardo Silva](https://github.com/edsiper)
