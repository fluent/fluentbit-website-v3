---
layout: documentation
version: v0.11.1
title: Fluent Bit v0.11.1 - Release Notes
intro: Release Notes
---

# Release Notes v0.11.1

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.11.1__.

## Changes

This is a bug fix release over 0.11 series that includes the following changes:

- Logger
  - Fix unhandled verbosity level when set by a configuration file

- Packaging:
  - Include missing _parsers.conf_ file
  - Do not include static libs of mbedtls and msgpack-c (already built-in)

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Eduardo Silva](http://github.com/edsiper)
