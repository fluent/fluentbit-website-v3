---
layout: documentation
version: v1.3.5
title: Fluent Bit v1.3.5 - Release Notes
intro: Release Notes
---

# Release Notes v1.3.5

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.3.5__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## Changes

[Fluent Bit](https://fluentbit.io) v1.3.5 is the next patch release on v1.3 series and comes with the following changes:

<br>
### List of general changes

- Core
   - upstream: fix missing initialization on ka_count field (#1783)
   - compat: undo a broken vsnprintf macro
   - sds: include flb_compat.h for Windows compatibility
   - sp: add support for != and <> operators in WHERE condition (#1818)
   - conf: parser: add parser for Ambassador (#1814)
   - docs: fix broken plugin links (#1677)

 - Plugins
   - [Parser (Filter)](https://docs.fluentbit.io/manual/filter/parser/)
      - Fix wrong error message (#1809 #1810)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [phiremande](https://github.com/phiremande)
- [Nguyễn Nhật Minh Tú](https://github.com/cpfriend1721994)
- [Ofek Lev <ofekmeister@gmail.com>](https://github.com/ofek)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Masoud Koleini](https://github.com/koleini)
- [Jukka Pihl](https://github.com/bluebike)
- [Eduardo Silva](https://github.com/edsiper)
