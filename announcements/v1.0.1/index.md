---
layout: documentation
version: v1.0.1
title: Fluent Bit v1.0.1 - Release Notes
intro: Release Notes
---

# Release Notes v1.0.1

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.0.1__.

## Changes

This is a minor release over 1.0 series that includes the following changes:

 - Core
     - Pack: improve performance on buffer allocation strategy.
     - Golang Proxy: fix return value validation on plugin initialization.
 - Plugins
     - [Nats (Output)](https://docs.fluentbit.io/manual/output/nats): fix segmentation fault caused by long topic names.
     - [Parser (Filter)](https://docs.fluentbit.io/manual/filter/parser): fix multiple parsers registration.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Takahiro Yamashita](https://github.com/nokute78)
- [Nikinaydenov](https://github.com/nikinaydenov)
- [Andrey](https://github.com/divanikus)
- [Yaroslav Bo](https://github.com/bayaro)
- [Eduardo Silva](https://github.com/edsiper)
