---
layout: documentation
version: v0.12.4
title: Fluent Bit v0.12.4 - Release Notes
intro: Release Notes
---

# Release Notes v0.12.4

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.12.4__.

## Changes

This is a minor fix release over 0.12 series that includes the following changes:

- Core
  - TLS: new tls.ca_path option to specify directory with certificates
  - Config: allow meta commands (@INCLUDE) at any level of the configuration file
  - Parser: on failure, print name of the parser involved.

- Plugins
  - [Systemd (input)](http://fluentbit.io/documentation/v0.12/input/systemd): fix cursor
  position when starting up, jump to next.
  - [Stdin (input)](http://fluentbit.io/documentation/v0.12/input/systemd): fix built-in JSON reader usage.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Adrián López](https://github.com/adrianlzt)
- [Petr Michalec](https://github.com/epcim)
- [Khem Raj](https://github.com/kraj)
- [Juan Antonio Osorio](https://github.com/JAORMX)
- [Amrit Bera](https://github.com/amritb)
- [Eduardo Silva](https://github.com/edsiper)
