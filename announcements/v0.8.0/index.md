---
layout: announcement
version: v0.8.0
title: Fluent Bit v0.8.0 - Release Notes
intro: Release notes
---

# Release Notes v0.8.0

[Fluent Bit](http://fluentbit.io) is a specialized data collection tool with a strong focus on
Embedded Linux. We are proud to announce the availability of __Fluent Bit v0.8.0__.

## Changes

This version have many changes in place which affects from API usage to how the service can be
configured, here is a list of the most relevant changes:

- Build: all CMake options are prefixed with FLB_ now (check documentation for details).
- Core: in addition to co-routines (ucontext) for output plugins, now POSIX threads are available.
- Core: workarounds to support for old Kernel and old-toolchains (glibc/gcc).
- I/O: handle EAGAIN on read operations.
- Core: plugins do not longer read config files, they get properties (key/value).
- Config: one configuration file can configure the whole service now.
- router: support for static and dynamic TAGS.
- out\_forward: rebrand out\_fluentd as out\_forward.
- upstream: re-architectred Upstream TCP handler.
- core: let core ignore SIGPIPE on context creations.
- out_http: new HTTP output plugin.
- http client: new HTTP client interface for plugins.
- lib: mbedtls: upgrade to 2.3.0 (mbedtls-yotta)
- out_lib: new output plugin to handle incoming records from input plugin.
- in_forward: new input plugin to handle Fluentd Forward protocol.
- in_mqtt: handle DISCONNECT properly.
- in_mqtt: drop data when buffer is full.
- in_kmsg: fix usec from timestamp.
- in_serial: fix bitrate settings, handle FTDI null byte, new min_bytes and separator config flags.
- in_head: support for high resolution interval.
- Core: new verbose level mechanism.
- Core / Build: improved support for Thread-Local-Storage and POSIX thread workaround.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting and general contributions on this release:

- [Takahiro Yamashita](https://github.com/nokute78)
- [Eduardo Silva](http://github.com/edsiper)
