---
layout: announcement
version: v0.4.0
title: Fluent Bit v0.4.0 - Release Notes
intro: Release notes
---

# Release Notes v0.4.0

[Fluent Bit](http://fluentbit.io) is a specialized data collection tool with a strong focus on
Embedded Linux. We are proud to announce the availability of __Fluent Bit v0.4.0__.

## Changes

Below there is a list of the most relevant changes on this version:

- New internal format representation: [UNIX TIMESTAMP, JSON_MAP]
- Library mode: several improvements
- Upgrade MsgPack to v1.2
- Pack: new packager interface: JSON -> MsgPack
- Testing: integrate Google Test (gtest) and CTests for build (API unit testing)
- Core: support big JSON messages
- Core: add Valgrind support to support register/deregister dynamic stacks on coroutines
- JSON: keep parser context to improve performance on large messages
- Memory: general improvements and fix leaks when exiting
- Stats: new (optional) statistic interface through unix socket

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting and general contributions on this release:

- [Eduardo Silva](http://twitter.com/edsiper)
