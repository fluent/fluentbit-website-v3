---
layout: documentation
version: v0.11.6
title: Fluent Bit v0.11.6 - Release Notes
intro: Release Notes
---

# Release Notes v0.11.6

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.11.6__.

## Changes

This is a bug fix release over 0.11 series that includes the following changes:

- Core
  - HTTP Client: add support for Basic Authentication
  - Lib: upgrade Jemalloc to v4.5.0

- Plugins
  - out\_es (elasticsearch): support X-Pack Basic Auth
  - out\_file: use improved API to perform msgpack->json conversion
  - in\_syslog: support old clients
  - filter\_kubernetes: fix missing initialization on cache

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Jeffrey Clark](https://github.com/h0tw1r3)
- [Takahiro Yamashita](https://github.com/nokute78)
- [Aleks](https://github.com/git001)
- [Eduardo Silva](http://github.com/edsiper)
