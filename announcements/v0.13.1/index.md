---
layout: documentation
version: v0.13.1
title: Fluent Bit v0.13.1 - Release Notes
intro: Release Notes
---

# Release Notes v0.13.1

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.13.1__.

## Changes

This is a minor fix release over 0.13 series that includes the following changes:

  - Plugins
    - Input
      - [Standard Input](http://fluentbit.io/documentation/0.13/input/stdin.html): fix high memory usage problem on regex due to bad conditional handling.
    - Output
      - [Treasure Data](http://fluentbit.io/documentation/0.13/output/td.html): fix memory leak when formatting records.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Sachi King](https://github.com/nakato)
- [Michiel Kalkman](https://github.com/michiel)
- [Eduardo Silva](https://github.com/edsiper)
