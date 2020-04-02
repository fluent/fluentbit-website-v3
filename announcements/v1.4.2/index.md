---
layout: documentation
version: v1.4.2
title: Fluent Bit v1.4.2 - Release Notes
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
   - build
     - use cmake variable magic instead of `cmake` (#2048)
     - fix cmake set() parameters order

 - Tests
   - runtime_shell: in_tail: fix config to verify exclusion

 - Plugins
   - [Tail (Input)](https://docs.fluentbit.io/manual/input/tail/)
      - On purge rotated files, check for deleted files (#794)
      - Fix configmap flag for exclude_path and exclude iteration (#2064)
   - [Rewrite_Tag (Filter)](https://docs.fluentbit.io/manual/filter/rewrite_tag/)
      - Enable filesystem buffering through option ```emitter_storage.type``` (#2067)
      - Fix on-exit leak for property emitter_name (#2066)
   - [Pgsql (Output)](https://docs.fluentbit.io/manual/output/pgsql/)
      - Fix escaping issue (#2059) (#2062)
   - [File (Output)](https://docs.fluentbit.io/manual/output/file/)
      - Fix wrong assignment to ctx->template (#2070)
   - [Kafka (Output)](https://docs.fluentbit.io/manual/output/kafka/)
      - Adjust kafka logs to fluent bit log levels
      - Fix usage for opaque data for callbacks

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [Fujimoto Seiji](https://github.com/fujimotos)
- [Jonathan Gonzalez V.](https://github.com/sxd)
- [Eduardo Silva](https://github.com/edsiper)
