---
layout: announcement
version: v0.8.5
title: Fluent Bit v0.8.5 - Release Notes
intro: Release notes
---

# Release Notes v0.8.5

[Fluent Bit](http://fluentbit.io) is a specialized data collection tool for Embedded and common
Linux Servers. We are proud to announce the availability of __Fluent Bit v0.8.5__.

## Changes

This version comes with fixes and several improvements over v0.8 series, here is a list of the most relevant changes:

- Upstream: improve async I/O handler.
- Upstream: connections are performed upon context request.
- Engine: dyntag buffers now have limit.
- I/O TLS: code cleanup on handshake and mode switcher.
- out_http: add optional support for SSL/TLS.
- in_forward: now it works in serialized unpacker mode. Performance improvements.
- out_forward: reduce memory usage, optimize records handling.
- Network: fix non-blocking mode upon socket creation.
- Lib / Msgpack: add parsed bytes feature.

On this version there is a new performance benchmark, doing a heavy local test of in\_forward:out\_forward, it could process up to __500k records per second__.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting and general contributions on this release:

- [Takahiro Yamashita](https://github.com/nokute78)
- [Eduardo Silva](http://github.com/edsiper)
