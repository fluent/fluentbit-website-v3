---
layout: documentation
title: Fluent Bit v1.8.5 - Release Notes
intro: Release Notes
---

# Release Notes v1.8.5

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.8.5__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## News

[Fluent Bit](https://fluentbit.io) v1.8.5 is the stable release!, new changes on this version:

 - Core
   - network: improve handling of DNS queries (UDP and TCP).
   - output: validate corner cases of co-routine creation failure.
   - cmake: headers: fix libraries path
   - utils: fix return value handling of uuid generator

 - Lib:
   - monkey: merge changes for improved timers handling

 - Plugins
   - [Forward (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/forward/)
      - Add support to forward metrics

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Leonardo Alminana](https://github.com/leonardo-albertovich)
- [Eduardo Silva](https://github.com/edsiper)
