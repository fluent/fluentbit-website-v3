---
layout: documentation
title: Fluent Bit v1.8.6 - Release Notes
intro: Release Notes
---

# Release Notes v1.8.6

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.8.6__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## News

[Fluent Bit](https://fluentbit.io) v1.8.6 is the stable release!, new changes on this version:

 - Core
   - signv4: allow url query parameter has no value

 - Plugins
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - Fix cmetric label name
   - [S3 (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/s3/)
      - Don't complete uploads that were never created

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Eduardo Silva](https://github.com/edsiper)
- [Wesley Pettit](https://github.com/PettitWesley)
- [Zhonghui Hu](https://github.com/zhonghui12)
