---
layout: documentation
version: v1.6.2
title: Fluent Bit v1.6.2 - Release Notes
intro: Release Notes
---

# Release Notes v1.6.2

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.6.2__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>

## Changes

[Fluent Bit](https://fluentbit.io) v1.6.2 is the minor release on 1.6 that comes with the following changes:

 - Core
   - engine: fix handling of task status of non-multiplex mode (#2716)
   - input: chunk: fix output instance 'new bytes' calculation (#2688)
   - upstream: new 'net.keepalive_max_recycle' option to destroy keepalive connections after configured uses (#2704)

 - Plugins
   - [Winlog (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/winlog/)
      - Add a new configuration option ```string_inserts``` (#2713)
   - [Loki (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/loki/)
      - Perform label key names normalization (#2702 #2698)
   - [Elasticsearch (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/es/)
      - Default AWS options to null in config map #2714 (#2720)


## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [William Orr](https://github.com/worr)
- [Jeff Luo](https://github.com/JeffLuoo)
- [Wesley Pettit](https://github.com/PettitWesley)
- [zhanghjster](https://github.com/zhanghjster)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Eduardo Silva](https://github.com/edsiper)
