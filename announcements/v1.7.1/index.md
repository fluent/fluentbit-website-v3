---
layout: documentation
version: v1.7.1
title: Fluent Bit v1.7.1 - Release Notes
intro: Release Notes
---

# Release Notes v1.7.1

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.7.1__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- <a href="https://docs.fluentbit.io/manual/installation/upgrade_notes">https://docs.fluentbit.io/manual/installation/upgrade_notes</a>

<br>

## Changes

[Fluent Bit](https://fluentbit.io) v1.7.1 is the patch release on top of 1.7 series that comes with the following changes:

 - Core
   - engine: dispatch: if output task fails on init, destroy retry (#3078)
   - scheduler: validate return status of dispatch_retry (#3078)
   - input_chunk: validate chunks and adjust size if required (#3089)
   - mp: new function to validate chunk content
   - mp: reset mpa cache on reuse

 - Plugins
   - [Storage_Backlog (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/storage_backlog/)
      - Remove failed chunks from queue on load (#3089)
   - [Influxdb (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/influxdb/)
      - Add experimental support for influxdb v2 (#3040)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Eduardo Silva](https://github.com/edsiper)
- [Filipe Pina](https://github.com/fopina)
