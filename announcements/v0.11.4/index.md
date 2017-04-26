---
layout: announcement
version: v0.11.4
title: Fluent Bit v0.11.4 - Release Notes
intro: Release Notes
---

# Release Notes v0.11.4

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.11.4__.

## Changes

This is a bug fix release over 0.11 series that includes the following changes:

- in\_tail: performance improvement when processing file content (57% faster)
- in\_tail: handle pending bytes faster after inotify event
- in\_tail: force 2MB buffer chunks
- in\_tail: fix cleanup functions
- in\_tail: destroy context after removing files on exit
- in\_forward: warn when client exceed limit
- input: fix config reader for FLB\_INPUT\_NET plugins (in_forward)
- build: Add AUTOCONF\_HOST\_OPT to help cross compiling

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Takahiro Yamashita](https://github.com/nokute78)
- [Khem Raj](https://github.com/kraj)
- [Eduardo Silva](http://github.com/edsiper)
