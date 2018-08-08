---
layout: documentation
version: v0.13.7
title: Fluent Bit v0.13.6 - Release Notes
intro: Release Notes
---

# Release Notes v0.13.7

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.13.7__.

## Changes

This is a minor fix release over 0.13 series that includes the following changes:

 - Core
   - Packer: validate tokens count to avoid invalid buffers.
   - Parser Decoders: fix JSON packaging, deprecate old validation.
 - Plugins
   - [Parser (Filter)](https://fluentbit.io/documentation/0.13/filter/parser.html): fix return value when applying parsers.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Daniel Wright](https://github.com/TheRealDwright)
- [Takahiro Yamashita](https://github.com/nokute78)
- [Gabriel1688](https://github.com/Gabriel1688)
- [Eduardo Silva](https://github.com/edsiper)
