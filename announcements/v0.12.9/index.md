---
layout: documentation
version: v0.12.9
title: Fluent Bit v0.12.9 - Release Notes
intro: Release Notes
---

# Release Notes v0.12.9

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.12._9_.

## Changes

This is a minor fix release over 0.12 series that includes the following changes:

- Core
  - Hash Table: new eviction mechanisms.

- Plugins
  - [Systemd (input)](http://fluentbit.io/documentation/0.12/input/systemd.html): fix timestamp conversion from usec to nsec.
  - [Kernel Log Messages (input)](http://fluentbit.io/documentation/0.12/input/kmsg.html): fix timestamp conversion from usec to nsec.
  - [Kubernetes (filter)](http://fluentbit.io/documentation/0.12/filter/kubernetes.html): new __Annotations__ option to include or not Pod annotations in the record.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [James Ravn](https://github.com/jsravn)
- [Mikael Knutsson](https://github.com/mikn)
- [Eduardo Silva](https://github.com/edsiper)
