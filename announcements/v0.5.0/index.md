---
layout: announcement
version: v0.5.0
title: Fluent Bit v0.5.0 - Release Notes
intro: Release notes
---

# Release Notes v0.5.0

[Fluent Bit](http://fluentbit.io) is a specialized data collection tool with a strong focus on
Embedded Linux. We are proud to announce the availability of __Fluent Bit v0.5.0__.

## Changes

Below there is a list of the most relevant changes on this version:

- New [Elastic Search](http://fluentbit.io/documentation/output/elasticsearch.html) output plugin.
- Network I/O layer improvements.
- Upstream connections have better handling for TLS sessions.
- Output plugin interface now supports _network address_ format.
- in_cpu, in_mem and in_kmsg now builds only on Linux.
- in_xbee: fix linking on OSX.
- lib: cJSON: upgraded version to fix validations.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting and general contributions on this release:

- [Eduardo Silva](http://twitter.com/edsiper)
