---
layout: documentation
version: v0.14.3
title: Fluent Bit v0.14.3 - Release Notes
intro: Release Notes
---

# Release Notes v0.14.3

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.14.3__.

## Changes

This is a minor fix release over 0.14 series that includes the following changes:

 - Core
     - Network: fix ipv6 flag when address is IPv6.
     - Parser: support time resolution with subsecond with comma
     - Pack: fix outbound memory access when converting msgpack to JSON
     - Unescape: do not remove double scapes.
 - Plugins
     - [File (Output)](https://docs.fluentbit.io/manual/output/file): new format option 'plain' to omit Tag and Timestamp information.
     - [Flowcounter (Output)](https://docs.fluentbit.io/manual/output/flowcounter): fix data formatting for 32 bits.
     - [Lua (Filter)](https://docs.fluentbit.io/manual/filter/lua)
        - New configuration option _type\_int\_key_ to convert field data from double to integer.
        - Load Lua scripts from relative path to configuration file if is
        not found.
     - [Memory (Input)](https://docs.fluentbit.io/manual/input/mem): improve process name parsing to avoid errors when the proccess name contains specials characters.
     - [Stdout (Output)](https://docs.fluentbit.io/manual/output/stdout): new format option 'json_lines' to print msgpack data in JSON format.
     - [Tail (Input)](https://docs.fluentbit.io/manual/input/tail): fix filename lookup in OSX when parent path is a symbolic link.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Takahiro Yamahista](https://github.com/nokute78)
- [Yann Soubeyrand](https://github.com/yann-soubeyrand)
- [newtoncorp](https://github.com/newtoncorp)
- [NixM0nk3y](https://github.com/NixM0nk3y)
- [Rodrigo Menezes](https://github.com/rdrgmnzs)
- [Sergio Ballesteros](https://github.com/ese)
- [Taneli Vähäkangas](https://github.com/taneli76)
- [Philipp Hoefflin](https://github.com/phoefflin)
- [Don Bowman](https://github.com/donbowman)
- [Eduardo Silva](https://github.com/edsiper)
