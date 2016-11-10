---
layout: announcement
version: v0.9.0
title: Fluent Bit v0.9.0 - Release Notes
intro: Release notes
---

# Release Notes v0.9.0

[Fluent Bit](http://fluentbit.io) is a specialized data collection tool for Embedded and common
Linux Servers. We are proud to announce the availability of __Fluent Bit v0.9.0__.

## Changes

This version is a major release with several improvements over v0.8 series, here is a list of the most relevant changes:

- Co-routines: _libco_ library is now used for co-routines implementation, compatible with most of architectures and operating systems.
- Output: new handling of retries through return codes FLB\_OK, FLB\_ERROR and FLB_RETRY.
- Output: new output plugins have a 'retry_limit' configuration flag.
- Thread-local-storage: re-worked logic to deal with old compilers.
- memory: new and optional memory handling with Jemalloc.
- Library: improved and cleaner library mode API.
- out_plot: new plugin to generate output data for gnuplot.
- in_tcp: new input TCP plugin (JSON)
- in_health: new plugin to check if a TCP service is a live or not.
- in_random: new plugin to generate random samples of data.
- New internal logger interface.
- File system buffering: new file system buffering capabilities.
- Several improvements and fixes in the core as well in most of plugins available.

On this version there is a new performance benchmark, doing a heavy local test of in\_forward:out\_forward, it could process up to __500k records per second__.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting and general contributions on this release:

- [Takahiro Yamashita](https://github.com/nokute78)
- [Tom Meagher](https://github.com/keypusher)
- [Eduardo Silva](http://github.com/edsiper)
