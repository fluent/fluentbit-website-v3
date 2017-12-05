---
layout: documentation
version: v0.12.10
title: Fluent Bit v0.12.10 - Release Notes
intro: Release Notes
---

# Release Notes v0.12.10

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.12.10__.

## Changes

This is a minor fix release over 0.12 series that includes the following changes:

- Core
  - io: tls: do not cleanup event loop and TLS session on error

- Plugins
  - [Tail (input)](http://fluentbit.io/documentation/0.12/input/tail.html): avoid filling up pipe if paused and make pipe non-blocking
  - [Elasticsearch (output)](http://fluentbit.io/documentation/0.12/output/elasticsearch.html): new option to generate UUID in record

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [James Ravn](https://github.com/jsravn)
- [Mikael Knutsson](https://github.com/mikn)
- [Eduardo Silva](https://github.com/edsiper)
