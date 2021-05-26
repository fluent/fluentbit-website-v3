---
layout: documentation
version: v1.7.7
title: Fluent Bit v1.7.7 - Release Notes
intro: Release Notes
---

# Release Notes v1.7.7

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.7.7__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- <a href="https://docs.fluentbit.io/manual/installation/upgrade_notes">https://docs.fluentbit.io/manual/installation/upgrade_notes</a>

<br>

## Changes

[Fluent Bit](https://fluentbit.io) v1.7.7 is the patch release on top of 1.7 series that comes with the following changes:

 - Core
   - network: fix async dns lookup where c-ares would resolve the query locally and return without creating a socket
   - network: fix checker for sync/async mode (#3543)
   - upstream: fix function declaration

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Leonardo Alminana](https://github.com/leonardo-albertovich)
- [Anurag Gupta](https://github.com/agup006)
- [Jorge Niedbalski](https://github.com/niedbalski)
- [Eduardo Silva](https://github.com/edsiper)
