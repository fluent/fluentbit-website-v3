---
layout: announcement
version: v0.5.1
title: Fluent Bit v0.5.1 - Release Notes
intro: Release notes
---

# Release Notes v0.5.1

[Fluent Bit](http://fluentbit.io) is a specialized data collection tool with a strong focus on
Embedded Linux. We are proud to announce the availability of __Fluent Bit v0.5.1__.

## Changes

Below there is a list of the most relevant changes on this version:

- in_xbee: fix linking to rt lib on Linux.
- out_es: fix JSON composer and handle missing bin and str msgpack types.
- Fix coroutine function declarations to avoid problems with older compilers
- Pack: detect and pack double/float data properly

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting and general contributions on this release:

- [Eduardo Silva](http://twitter.com/edsiper)
