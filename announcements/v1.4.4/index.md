---
layout: documentation
version: v1.4.4
title: Fluent Bit v1.4.4 - Release Notes
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
   - task: set number of records in chunk upon task creation
   - unescape: fix overflow on unescaping string (oss-fuzz 22132)
   - parser: on exception release time offset (CID 300959)
   - parser: logfmt: fix overflow (oss-fuzz 21953)
   - filter: pass null terminated tag to filter callback (#1343)
   - filter: use the cached records chunk counter, reduce CPU usage (#2159)
   - build: fix "vcruntime140.dll is missing" error on Windows (#2170)
   - output: do not count number of records upon return, use the cached number
   - input_chunk: keep number of records in the chunk (#2159)
   - pack: fixed double's json packing precision (#1439)
   - http_server: metrics: prometheus: add help string #1849 (#1937)

 - Plugins
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - scan_glob: fix leak when using musl logic workaround (#2097)
      - workaround for "undeletable file" issue on windows (#2141)
   - [Docker (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/docker/)
      - fix memory leak on exception (#1671)
   - [Lua (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/lua/)
      - support protected mode (#2148) (#2154)
   - [Expect (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/expect/)
      - release key value (cid 292096)
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/kubernetes/)
      - stop caching metadata for failed api server query (#1851)
   - [PGSQL (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/pgsql/)
      - added column tag and time to postgresql table, this will allow users to better partition the table and distribute a big amount of data (#2169)

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
