---
layout: documentation
version: v1.0.6
title: Fluent Bit v1.0.6 - Release Notes
intro: Release Notes
---

# Release Notes v1.0.6

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.0.6__.

## Changes

This is a minor release over 1.0 series that includes the following changes:

 - Core
   - filter:
     - On exit, do not invoke cb_exit() if no context is set (#1195)
     - Initialize every memory instance with zeros (#1195)

 - Plugins
   - [MQTT (Input)](https://docs.fluentbit.io/manual/input/mqtt/)
      - Fix memory corruption on dropping packet (#1135)
   - [Forward (Output)](https://docs.fluentbit.io/manual/output/forward/)
     - Fix broken TLS support: revert changes introduced on secure mode (v1.0.5).

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
