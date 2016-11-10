---
layout: announcement
version: v0.9.0
title: Fluent Bit v0.9.0 - Release Notes
intro: Release notes
---

# Release Notes v0.9.0

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.9.0__.

## Changes

This version is a major release: v0.9, here is a list of the most relevant changes:

- Core:
 - File system buffering: new file system buffering capabilities.
 - Library: improved and cleaner library mode API.
 - New internal logger interface.
 - Thread-local-storage: re-worked logic to deal with old compilers.
 - Memory: new and optional memory handling with Jemalloc.
 - Input: input plugins can now run optionally inside a co-routine.
 - Output: new handling of retries through return codes FLB\_OK, FLB\_ERROR and FLB_RETRY.
 - Output: new output plugins have a 'retry_limit' configuration flag.
 - Co-routines: _libco_ library is now used for co-routines implementation, compatible with most of architectures and operating systems.
 - General improvements and fixes in the core.
- Plugins:
 - in_tcp: new input TCP plugin (JSON)
 - in_health: new plugin to check if a TCP service is a live or not.
 - in_random: new plugin to generate random samples of data.
 - out_plot: new plugin to generate output data for gnuplot.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting and general contributions on this release:

- [Takahiro Yamashita](https://github.com/nokute78)
- [Tom Meagher](https://github.com/keypusher)
- [Eduardo Silva](http://github.com/edsiper)
