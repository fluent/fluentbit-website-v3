---
layout: documentation
version: v1.5.7
title: Fluent Bit v1.5.7 - Release Notes
intro: Release Notes
---

# Release Notes {{ page.version }}

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit {{ page.version }}__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- [https://docs.fluentbit.io/manual/installation/upgrade_notes](https://docs.fluentbit.io/manual/installation/upgrade_notes)

<br>
## Changes

[Fluent Bit](https://fluentbit.io) {{ page.version }} is the next patch release on v1.5 series and comes with the following changes:

<br>
### List of general changes

 - Core
   - utils: fix bad handling of invalid utf-8 bytes (oss-fuzz 25785)
   - strptime: add a fallback macro for `timezone` (#2493)
   - str: use memcpy to silent gcc warning
   - pack: gelf: format timestamp as seconds.milliseconds
   - pack: gelf: validate incoming object is a map (oss-fuzz 25754)
   - pack: Use PRIu64/PRId64 to format 64 bit integers.
   - pack: print timestamp formatting timespec fields
   - build: on FLB_SMALL mode, do not use 'strip' flag for non-gcc compiler
   - build: adjust luajit path

 - Libs
    - mbedtls: upgrade from 2.16.5 to 2.24.0
    - luajit: upgrade from 2.1.0-beta3 to 2.1.0-dd5032e
    - sqlite: upgrade from 3.31.0 to 3.33.0 (#2552)

 - Plugins
   - [Cpu (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/cpu/)
      - Normalize per-process cpu stats by number of cores (#2543)
   - [Lua (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/lua/)
      - Fix handling of integer/double values (#1932 #1647)
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/kubernetes/)
      - Validate metadata is a map
   - [Forward (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/forward/)
      - Always initialize salt with random numbers (#2575)
   - [File (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/file/)
      - Use flb_time to format timestamp
   - [Gelf (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/gelf/)
      - Port the plugin to windows (#2574)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Wesley Pettit](https://github.com/PettitWesley)
- [Zero King](https://github.com/l2dy)
- [Matej Staroň](https://github.com/yang-padawan)
