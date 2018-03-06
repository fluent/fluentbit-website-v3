---
layout: documentation
version: v0.12.15
title: Fluent Bit v0.12.15 - Release Notes
intro: Release Notes
---

# Release Notes v0.12.15

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.12.15__.

## Changes

This is a minor fix release over 0.12 series that includes the following changes:

- Core
  - Pack: JSON: do not create empty msgpack buffers if no JSON tokens exists.

- Plugins
  - [Tail (input)](http://fluentbit.io/documentation/0.12/input/tail.html): support file truncation.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Thinh Tran](https://github.com/duythinht)
- [Helder Dias](https://github.com/hdiass)
- [Petr Michalec](https://github.com/epcim)
- [rmoriz](https://github.com/rmoriz)
- [Kraig Amador](https://github.com/bigkraig)
- [Eduardo Silva](https://github.com/edsiper)
