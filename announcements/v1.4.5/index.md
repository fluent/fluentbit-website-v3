---
layout: documentation
version: v1.4.5
title: Fluent Bit v1.4.5 - Release Notes
intro: Release Notes
---

# Release Notes {{ page.version }}

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit {{ page.version }}__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- [https://docs.fluentbit.io/manual/installation/upgrade_notes](https://docs.fluentbit.io/manual/installation/upgrade_notes)

<br>
## Changes

[Fluent Bit](https://fluentbit.io) {{ page.version }} is the next patch release on v1.4 series and comes with the following changes:

<br>
### List of general changes

 - Core
   - record_accessor: fix parser to ignore dots in subkeys
   - unescape: add boundaries check on utf-8 (oss-fuzz 22180)
   - dump: flush stdout on dump (#2176)
   - conf: parsers: fix syslog-rfc5424 extradata (#2167)

 - Plugins
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - Add macro conditional around db usage on stat(2) backend (#2196)
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/kubernetes/)
      - Poll network status on Pods (#2186)
   - [Pgsql (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/pgsql/)
      - Fix excessive log message (#2180)
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver/)
      - Fix private_key buffer allocation

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [Jonathan Gonzalez V.](https://github.com/sxd)
- [Eduardo Silva](https://github.com/edsiper)
- [Patrick Shan](https://github.com/patrickshan)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [novegit](https://github.com/novegit)
- [diplodok-oleg](https://github.com/novegit)
- [Zero King](https://github.com/l2dy)
- [Maxim Vorobjov](https://github.com/dunnock)
- [Takahiro Yamashita](https://github.com/nokute78)
