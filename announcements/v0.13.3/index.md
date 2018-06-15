---
layout: documentation
version: v0.13.3
title: Fluent Bit v0.13.3 - Release Notes
intro: Release Notes
---

# Release Notes v0.13.3

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.13.3__.

## Changes

This is a minor fix release over 0.13 series that includes the following changes:

- Core
    - Parser: Regex: fix map size handling.
    - SDS: fix increase() behavior, always realloc()
- Lib
    - JSMN: fix memory access check for tokens.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Carl Henrik Lunde](https://github.com/chlunde)
- [Eduardo Silva](https://github.com/edsiper)
