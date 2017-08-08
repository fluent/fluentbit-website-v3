---
layout: documentation
version: v0.11.16
title: Fluent Bit v0.11.16 - Release Notes
intro: Release Notes
---

# Release Notes v0.11.16

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.11.16__.

## Changes

This is a bug fix release over 0.11 series that includes the following changes:

- Parser
  - Time Lookup: fix timezone parser for format hh:mm
  - Regex: allow patterns with literal definition
  - Regex: fix position of last byte processed only when group pattern have a match

- Pack
  - JSON encoder: fix handling of UTF-8 characters
  - Unit test: new UTF-8 tests

- Plugins
  - TCP (input): fix byte position when consuming buffer
  - NATS (output): always do connect protocol handshake

- Libraries
  - Onigmo (regex): upgrade to 6.1.2

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Martin Chodur](https://github.com/FUSAKLA)
- [Tomas Dohnalek](https://github.com/dohnto)
- [Joell](https://github.com/joell)
- [Keyolk](https://github.com/keyolk)
- [Takahiro Yamashita](https://github.com/nokute78)
- [Eduardo Silva](https://github.com/edsiper)
