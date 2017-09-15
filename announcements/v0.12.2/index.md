---
layout: documentation
version: v0.12.2
title: Fluent Bit v0.12.2 - Release Notes
intro: Release Notes
---

# Release Notes v0.12.2

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.12.2__.

## Changes

This is a minor fix release over 0.12 series that includes the following changes:

- Core
  - Input: do not attempt to start a collector which is already running
- Plugins
  - [Systemd (input)](http://fluentbit.io/documentation/0.12/input/systemd.html): fix problem when using multiple filters at once.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [jolestar](https://github.com/jolestar)
- [Constantin](https://github.com/Constantin07)
- [baldeynz](https://github.com/baldeynz)
- [guineveresaenger](https://github.com/guineveresaenger)
- [Eduardo Silva](https://github.com/edsiper)
