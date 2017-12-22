---
layout: documentation
version: v0.12.11
title: Fluent Bit v0.12.11 - Release Notes
intro: Release Notes
---

# Release Notes v0.12.11

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.12.11__.

## Changes

This is a minor fix release over 0.12 series that includes the following changes:

- Core
  - HTTP Client: always check if the payload is set or not.

- Plugins
  - [Stdin (input)](http://fluentbit.io/documentation/0.12/input/stdin.html): add missing default timestamp

- Libraries
  - Monkey: do not allow empty values in configuration keys

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Sachi King](https://github.com/nakato)
- [Zsolt](https://github.com/2solt)
- [gibban69](https://github.com/gibban69)
- [seanmcguiganjcd](https://github.com/seanmcguiganjcd)
- [Wadim Kruse](https://github.com/wkruse)
- [Eduardo Silva](https://github.com/edsiper)
