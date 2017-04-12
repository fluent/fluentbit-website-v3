---
layout: announcement
version: v0.11.2
title: Fluent Bit v0.11.2 - Release Notes
intro: Release Notes
---

# Release Notes v0.11.2

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.11.2__.

## Changes

This is a bug fix release over 0.11 series that includes the following changes:

- Engine: reduce noise on trace messages.
- Input: Add missing initialization collectors status.
- Network: add more verbose message on error conditions.
- Output: new mode for _retry\_limit_ (false) to disable a limit.
- HTTP Client: better handling for broken TCP connections.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Kevin Fox](http://github.com/kfox1111)
- [Eduardo Silva](http://github.com/edsiper)
