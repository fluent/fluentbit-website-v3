---
layout: documentation
version: v1.6.3
title: Fluent Bit v1.6.3 - Release Notes
intro: Release Notes
---

# Release Notes v1.6.3

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.6.3__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>

## Changes

[Fluent Bit](https://fluentbit.io) v1.6.3 is the minor release on 1.6 that comes with the following changes:


 - Core
   - parser: implement generic support for %L (subseconds) (#2722)
   - lib: on loop, do not join the thread, just check the context status
   - bin: do no use flb_loop, just destroy the context

 - Plugins
   - [Loki (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/loki/)
      - Validate labels_keys list is set or not at init (#2697)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Fujimoto Seiji](https://github.com/fujimotos)
- [Eduardo Silva](https://github.com/edsiper)
