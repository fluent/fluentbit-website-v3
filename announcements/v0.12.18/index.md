---
layout: documentation
version: v0.12.18
title: Fluent Bit v0.12.18 - Release Notes
intro: Release Notes
---

# Release Notes v0.12.18

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.12.18__.

## Changes

This is a minor fix release over 0.12 series that includes the following changes:

  - Engine: do not remove task if there are pending 'retries'
  - Parser: always validate packaged JSON map
  - I/O: fix handling of event mask in socket validation
  - Lib: JSMN: merge improvements for strict mode
  - Plugins
    - [HTTP Output](http://fluentbit.io/documentation/0.12/output/http.html): add more details in debug messages.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
