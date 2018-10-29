---
layout: documentation
version: v0.14.5
title: Fluent Bit v0.14.5 - Release Notes
intro: Release Notes
---

# Release Notes v0.14.5

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.14.5__.

## Changes

This is a minor fix release over 0.14 series that includes the following changes:

 - Core
     - New option -s/--coro_stack_size/Coro_Stack_Size to set coroutines stack size at start time.
     - New CMake build option FLB_CORO_STACK_SIZE to set a default coroutines stack size.
     - Decoder: fix wrong null byte on UTF8 string ending.
     - HTTP Client: fix header lookup to honor header/body boundary.

 - Plugins
     - [HTTP (Output)](https://docs.fluentbit.io/manual/output/http): fix SIGSEGV on unitialized JSON buffer.

 - Libraries
     - Onigmo: upgrade from v6.1.2 to v6.1.3

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Fujimoto Seiji](https://github.com/fujimotos)
- [xanonid]
- [Eduardo Silva](https://github.com/edsiper)
