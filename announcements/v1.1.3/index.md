---
layout: documentation
version: v1.1.3
title: Fluent Bit v1.1.3 - Release Notes
intro: Release Notes
---

# Release Notes v1.1.3

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.1.3__.

## Changes

This is a minor release over 1.1 series that includes the following changes:

 - Core
   - io & tls: always set file descriptor number on event structure. This bug
     affected out_stackdriver plugin when sending data right after oauth2
     authentication.

 - Plugins
   - [Forward (Input)](https://docs.fluentbit.io/manual/input/forward/)
      - Fix buffer problem that generated duplicate records (#1375)

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
