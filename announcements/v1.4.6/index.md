---
layout: documentation
version: v1.4.6
title: Fluent Bit v1.4.6 - Release Notes
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
   - code cleanups and fixes for compatibility with GCC 10
   - stream processor: fix group-by matching rule for string values
   - oauth2: fix missing parameter on warning message (CID 304404)
   - env: validate environment variable size > zero
   - thread: coroutines: fix usage of context key
   - upstream: fix a segfault bug in flb_upstream_conn_release()
   - scheduler: fix infinite loop bug on Windows
   - input: chunk: do not free static variable on exception (CID 304425)
   - formatters fixes:
     - utils: fix log format specifier (CID 304433)
     - io: tls: fix log format specifier (CID 304426)
     - input_chunk: fix log format specifier (CID 304413)
     - input: fix missing parameter on log formatter (CID 304405)

 - Plugins
    - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - 50% performance improvement when using db.sync=full mode
      - Fixes on corner cases under high load scenarios when dealing with rotated files and symbolic links. The rotation handling has been re-implemented with an unified behavior for Linux, Windows and BSD-based systems.
   - [Systemd (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/systemd/)
      - Add 'db.sync' option (different fs sync levels)
      - Reduce number of queries for database update and performance improvement
   - [Docker (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/docker/)
      - Fix potential leak on invalid file content reader (cid 304411)
   - [Rewrite_Tag (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/rewrite_tag/)
      - Fix missing extra argument (cid 304449)
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/kubernetes/)
      - Tweak flb_kube_tag_prefix for Windows
   - [File (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/file/)
      - Add error message on flush failure
      - Add complementary 'path' and 'file' options.
   - [Influxdb (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/influxdb/)
      - Enable plugin on Windows environments

 - Tests
   - Extended tests on runtime_shell: in_tail

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Masoud Koleini](https://github.com/koleini)
