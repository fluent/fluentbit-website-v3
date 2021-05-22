---
layout: documentation
version: v1.7.6
title: Fluent Bit v1.7.6 - Release Notes
intro: Release Notes
---

# Release Notes v1.7.6

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.7.6__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- <a href="https://docs.fluentbit.io/manual/installation/upgrade_notes">https://docs.fluentbit.io/manual/installation/upgrade_notes</a>

<br>

## Changes

[Fluent Bit](https://fluentbit.io) v1.7.6 is the patch release on top of 1.7 series that comes with the following changes:

 - Core
   - network: new asynchronous DNS support
   - gzip: set a max decompression size.
   - oauth2: adjust expiration time -10%
   - storage: use plugin internal name for Chunk I/O stream name (#3361)
   - conf: added initial Couchbase Server parsers
   - http_client: use slist function for NO_PROXY parsing
   - pack: fix a truncation bug on Windows

 - Plugins
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - Fix handling of long lines (#3490)
      - Initialize mult_parsers list before parsing properties
   - [Http (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/http/)
      - Add pipelining support
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver/)
      - Drop log entries if http response code - 4xx
      - Adjust http header for new token
      - Implement cache for oauth2 token at thread level

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [jlunavtgrad](https://github.com/jlunavtgrad)
- [Sophie Fang](https://github.com/sophieyfang)
- [Eduardo Silva](https://github.com/edsiper)
- [David Korczynski](https://github.com/DavidKorczynski)
- [Leonardo Alminana](https://github.com/leonardo-albertovich)
- [Yu Yi](https://github.com/erain)
- [Patrick Stephens](https://github.com/patrick-stephens)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Jorge Niedbalski](https://github.com/niedbalski)
