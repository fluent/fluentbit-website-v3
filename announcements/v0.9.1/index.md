---
layout: announcement
version: v0.9.1
title: Fluent Bit v0.9.1 - Release Notes
intro: Release notes
---

# Release Notes v0.9.1

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.9.1__.

## Changes

This version comes with the following fixes:

- Scheduler: add invalidation handler to cleanup queued retries (#127)
- Plugin: in_stdin: add missing buffer length initialization
- Input: fix wrong thread(s) deletion (fix #135)
- Lib: [Monkey](http://monkey-project.com): sync development updates

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting and general contributions on this release:

- [Takahiro Yamashita](https://github.com/nokute78)
- [Eduardo Silva](http://github.com/edsiper)
- [Adalberto Junior](https://github.com/adalrsjr1)
