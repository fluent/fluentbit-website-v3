---
layout: documentation
version: v1.5.3
title: Fluent Bit v1.5.3 - Release Notes
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
   - engine: validate connection event thread is not null
   - stacktrace: fix can not print stack trace when Fluent Bit runs in container (#2421)
   - lib: chunkio: upgrade to v1.0.5
   - dump: use stderr instead of stdout when getting SIGCONT (#2438)
   - parser: use built-in flb_strptime() instead of system strptime() (#2311)
   - gzip: fix uncompress routine and add crc32 checks (#2396)
   - io: tls: add connect_timeout handler routine
   - io: tls: do not assume handshake is in async mode
   - io: fix blocking mode
   - io: split logic for sync/async connection
   - http_client: fix format string mismatch (#2442)
   - upstream: fix async mode check and set missing co-routine context
   - upstream: upon KA reuse, validate socket

 - Plugins
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - When option ```exit_on_eof``` is set to ```true```,  wait for all the files to be read (#2436)
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver/)
      - Abort initialization if 'project_id' is not set
      - Add ```tag_prefix``` option to configuration
      - Fix metadata not assigned correctly
      - Construct local_resource_id from tag
      - Support special fields: timestamp, httprequest, sourcelocation and insertid
   - [HTTP (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/http/)
      - If ```json_date_key``` is set to ```false```, skip date key
   - [Tcp (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/tcp/)
      - If ```json_date_key``` is set to ```false```, skip date key
   - [Stdout (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stdout/)
      - If ```json_date_key``` is set to ```false```, skip date key

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [Jonathan Gonzalez V](https://github.com/sxd)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Eduardo Silva](https://github.com/edsiper)
- [Zero King](https://github.com/l2dy)
- [Jeff Luo](https://github.com/JeffLuoo)
- [scgao](https://github.com/scgao)
- [wanjunlei](https://github.com/wanjunlei)
