---
layout: documentation
version: v0.12.16
title: Fluent Bit v0.12.16 - Release Notes
intro: Release Notes
---

# Release Notes v0.12.16

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.12.16__.

## Changes

This is a minor fix release over 0.12 series that includes the following changes:

- Core
  - sqlite db: fix exit handler for shared database use case
  - build: fix build for FreeBSD (timespec_get)
  - lib: monkey: fix select() based event-loop, add missing timeout destroy callback
  - tests: internal: fix parser tests without a defined year

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
