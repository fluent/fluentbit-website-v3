---
layout: announcement
version: v0.8.4
title: Fluent Bit v0.8.4 - Release Notes
intro: Release notes
---

# Release Notes v0.8.4

[Fluent Bit](http://fluentbit.io) is a specialized data collection tool with a strong focus on
Embedded Linux. We are proud to announce the availability of __Fluent Bit v0.8.4__.

## Changes

This version comes with fixes and several improvements over v0.8 series, here is a list of the most relevant changes:

- in_forward: always make a copy of the listen property.
- out_forward: pack Tag as a string, not as binary.
- in_stdin: in case of invalid message, reset buffer and continue.
- in_stdin: add support for multiple JSONs (concatenated messages).
- in_stdin: add dynamic buffering support.
- Error: fix error codes, octal to decimal.
- Output: fix unitialized host.uri variable.
- Output: report an error message if the user sets an undefined plugin.
- Engine: input collectors now can unregister it self.
- Pack: always reset token buffers after reallocation.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting and general contributions on this release:

- [Takahiro Yamashita](https://github.com/nokute78)
- [Eduardo Silva](http://github.com/edsiper)
