---
layout: documentation
version: v1.3.7
title: Fluent Bit v1.3.7 - Release Notes
intro: Release Notes
---

# Release Notes v1.3.7

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.3.7__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## Changes

[Fluent Bit](https://fluentbit.io) v1.3.7 is the next patch release on v1.3 series and comes with the following changes:

<br>
### List of general changes

 - Core
   - engine: inform the user about processed fs backlog chunks
   - engine: improve logging on failed and successful retries (#1318)
   - bin: print setup if log level is debug or trace
   - lib: add missing va_end() on exceptions
   - lib: sqlite: upgrade from v3.24.0 to v3.31.0
   - utils: fix flb_utils_print_setup
   - parser: initialize decoders with NULL to avoid SIGSEGV
   - config: release storage properties on exit
   - input: make flb_input_new() zero-initialize input instances

 - Plugins
   - [Syslog (Input)](https://docs.fluentbit.io/manual/input/syslog/)
      - Add more verbosity when failed to parse log message (#1859 #1930)
   - [Head (Input)](https://docs.fluentbit.io/manual/input/head/)
      - Add pause() and resume() callbacks
   - [Tail (Input)](https://docs.fluentbit.io/manual/input/tail/)
      - Fix inode overflow in 32-bit OS for DB statement sql_get_file
      - Remove database entries when file get's deleted or rotated (#1875)
   - [Influxdb (Output)](https://docs.fluentbit.io/manual/output/influxdb/)
      - Fix default network setup

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [Wesley Pettit](https://github.com/PettitWesley)
- [Mengying-Li](https://github.com/Mengying-Li)
- [Eduardo Silva](https://github.com/edsiper)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [liutao6869](http://github.com/liutao6869)
