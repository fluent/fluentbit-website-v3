---
layout: documentation
version: v0.10.0
title: Fluent Bit v0.10.0 - Release Notes
intro: Release notes
---

# Release Notes v0.10.0

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.10.0__.

## Changes

This version is a major release: v0.10, here is a list of the most relevant changes:

- Core
 - New support for [Golang plugins](https://github.com/fluent/fluent-bit-go)!.
 - Pipe: new internal interface for pipe usage/emulation (abstraction).
 - Windows compatible (experimental).
 - New Database backend powered by [SQLite3](http://sqlite.org).
 - Proxy: new proxy-plugin interface.
 - IO: fix connection event mask handling.
 - Bin: rename option 'logfile' to 'log_file'.
 - in_tcp: prevent allocate zero bytes and cleanups.
 - in_health: prevent segfault when hostname is not given.
 - Many cleanups...

- Plugins
 - [in_tail](http://fluentbit.io/documentation/0.10/input/tail.html): new plugin to tail files!.
 - [out_influxdb](http://fluentbit.io/documentation/0.10/output/influxdb.html): new InfluxDB output plugin.
 - out_flowcounter: new records counter plugin.
 - out_counter: new simple records counter plugin.
 - [out_td](http://fluentbit.io/documentation/0.10/output/td.html): use new Miniz library for gzip compression.

- Libraries
 - lib/msgpack-c: upgrade to GIT version 0b7cabd.
 - lib/monkey: sync dev updates from runtime engine.
 - lib/mbedtls: upgrade version to 2.4.1.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Takahiro Yamashita](https://github.com/nokute78)
- [Eduardo Silva](http://github.com/edsiper)
- [Leah Petersen](https://github.com/leahnp)
