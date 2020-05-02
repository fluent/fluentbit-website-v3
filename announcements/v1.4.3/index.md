---
layout: documentation
version: v1.4.3
title: Fluent Bit v1.4.3 - Release Notes
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
   - config_map: on MAP_SLIST, use new split_tokens api to support quotes
   - parser: ltsv: fix potential overflow (oss-fuzz)
   - parser: logfmt: fix potential overflow (oss-fuzz)
   - config: support quotes when reading values with spaces

 - Libs
   - monkey: on timers use monotonic clock

 - Plugins
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - Fix symlink log rotation for stat(2) backend on Linux (#2052)
   - [Lua (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/lua/)
      - Support new return value to keep timestamp (#2100)
   - [Rewrite_Tag (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/rewrite_tag/)
      - Add mem_buf_limit to rewrite tag filter emitter (#2079)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [zackwine](https://github.com/zackwine)
- [David Korczynski](https://github.com/DavidKorczynski)
- [Takahiro Yamashita](https://github.com/nokute78)
- [Eduardo Silva](https://github.com/edsiper)
