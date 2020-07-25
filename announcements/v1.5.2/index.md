---
layout: documentation
version: v1.5.2
title: Fluent Bit v1.5.2 - Release Notes
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
   - env: add missing variable initialization
   - lib: tutf8e: change CMAKE_C_FLAGS to append options to fix Yocto recipe build
   - tests:
     - extend Stackdriver runtime test
     - new Datadog runtime test

 - Plugins
   - [Forward (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/forward/)
      - Fix options validation field (#2371)
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver/)
      - Initialize entry size at the beginning of the loop
   - [Datadog (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/datadog/)
      - Fix memory leak on remapping, register formatter and code style cleanups (#2379)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [Shunchao Gao](https://github.com/scgao)
- [Jonathan Crockett](https://github.com/siqjonathan)
- [Eduardo Silva](https://github.com/edsiper)
