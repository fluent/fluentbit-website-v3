---
layout: documentation
version: v1.4.1
title: Fluent Bit v1.4.1 - Release Notes
intro: Release Notes
---

# Release Notes {{ page.version }}

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit {{ page.version }}__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- [https://docs.fluentbit.io/manual/installation/upgrade_notes](https://docs.fluentbit.io/manual/installation/upgrade_notes)

## About 1.4 Release and this version

As of the next day of [v1.4.0 release](https://fluentbit.io/announcements/v1.4.0), we got a problem reported where we break one of the Tail configuration options and got some unexpected problems on Windows builds.

We have pushed a quick v1.4.1 release to fix the problems reported, we apologies for any trouble you might face.

This announcement is about the fixes applied, but we definitely think you will be interested in all the new stuff that we implemented on v1.4:

[https://fluentbit.io/announcements/v1.4.0](https://fluentbit.io/announcements/v1.4.0)

<br>
## Changes

[Fluent Bit](https://fluentbit.io) {{ page.version }} is the next patch release on v1.4 series and comes with the following changes:

<br>
### List of general changes

 - Core
   - compat: A quick fix for build failure on Windows due to SHUT_RDWR (#2046)
   - tests: runtime_shell: add tail expect test

 - Plugins
   - [Tail (Input)](https://docs.fluentbit.io/manual/input/tail/)
      - Fix configmap property type for 'path_key'
   - [Winlog (Input)](https://docs.fluentbit.io/manual/input/winlog/)
      - Add missing header "flb_sqldb.h" (#2049)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
- [Fujimoto Seiji](https://github.com/fujimotos)
