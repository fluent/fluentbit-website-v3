---
layout: documentation
version: v0.14.2
title: Fluent Bit v0.14.2 - Release Notes
intro: Release Notes
---

# Release Notes v0.14.2

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.14.2__.

## Changes

This is a minor fix release over 0.14 series that includes the following changes:

 - Core
     - TLS: fix hard-coded error messages (path).
     - HTTP Server: new api/v1/uptime end-point.

 - Plugins
     - [Exec (Input)](https://docs.fluentbit.io/manual/input/exec): fix unitialized timestamp when a parser is used.
     - [Memory (Input)](https://docs.fluentbit.io/manual/input/mem): consider mem_unit when computing memory/swap sizes.
     - [HTTP (Output)](https://docs.fluentbit.io/manual/output/http): fix problem on custom headers with whitespaces in the value.

 - Libraries
   - MbedTLS: upgrade from v2.8.0 to v2.13.0
   - SQLite3: upgrade from v3.23.0 to v3.24.0
   - Luajit: upgrade from v2.0.5 to v2.1.0-beta3
   - LibBacktrace: upgrade to GIT master '5a99ff7f'

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Kevin Hilman](https://github.com/khilman)
- [Yann Soubeyrand](https://github.com/yann-soubeyrand)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Anusha](https://github.com/010akv)
- [Steinar Dahl](https://github.com/graniterocks)
- [Akshay Mankar](https://github.com/akshaymankar)
- [Brandon Hilton](https://github.com/jbhilton11)
- [Eduardo Silva](https://github.com/edsiper)
