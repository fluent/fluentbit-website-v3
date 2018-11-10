---
layout: documentation
version: v0.14.7
title: Fluent Bit v0.14.7 - Release Notes
intro: Release Notes
---

# Release Notes v0.14.7

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.14.7__.

## Changes

This is a minor fix release over 0.14 series that includes the following changes:

 - Core
     - Utils: fix out of bounds write on invalid utf-8
     - Filter: do not attemp to filter an empty buffer
     - Lib: save thread id before it reference gets deleted

 - Plugins
     - [Modify (Filter)](https://docs.fluentbit.io/manual/filter/modify): fix invalid reference in key_value_matches regex

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Carl Henrik Lunde](https://github.com/chlunde)
- [Don Bowman](https://github.com/donbowman)
- [Jukka Pihl](https://github.com/bluebike)
- [Eduardo Silva](https://github.com/edsiper)
