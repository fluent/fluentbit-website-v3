---
layout: documentation
version: v0.14.9
title: Fluent Bit v0.14.9 - Release Notes
intro: Release Notes
---

# Release Notes v0.14.9

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.14.9__.

## Changes

This is a minor fix release over 0.14 series that includes the following changes:

 - Core
     - Pack: improve performance on buffer allocation strategy.
     - Golang Proxy: fix return value validation on plugin initialization.
 - Plugins
     - [Nats (Output)](https://docs.fluentbit.io/manual/output/nats): fix segmentation fault caused by long topic names.
     - [Parser (Filter)](https://docs.fluentbit.io/manual/filter/parser): fix multiple parsers registration.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Fujimoto Seiji](https://github.com/fujimotos)
- [Eduardo Silva](https://github.com/edsiper)
