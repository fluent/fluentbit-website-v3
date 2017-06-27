---
layout: announcement
version: v0.11.11
title: Fluent Bit v0.11.11 - Release Notes
intro: Release Notes
---

# Release Notes v0.11.11

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.11.11__.

## Changes

This is a bug fix release over 0.11 series that includes the following changes:

- Core
  - Pack: json-encoding: detect and skip already escaped characters.

- Plugins
  - [Kubernetes (filter)](http://fluentbit.io/documentation/0.11/filter/kubernetes.html): new __merge\_json\_key__ option. If merged json is to be included, this new option acts as a parent key for the new structured fields.
  - [Kubernetes (filter)](http://fluentbit.io/documentation/0.11/filter/kubernetes.html): new __dummy\_meta__ option, when set the filter do not try to gather metadata from the API server, instead it just append a random record as meta. Useful testing and development.
  - [Tail (input)](http://fluentbit.io/documentation/0.11/input/tail.html): workaround for rotated files monitored originally using relative paths instead of absolute paths.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Ricardo Faria](https://github.com/rgomesf)
- [Eduardo Silva](http://github.com/edsiper)
