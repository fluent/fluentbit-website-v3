---
layout: documentation
version: v0.11.13
title: Fluent Bit v0.11.13 - Release Notes
intro: Release Notes
---

# Release Notes v0.11.13

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.11.13__.

## Changes

This is a bug fix release over 0.11 series that includes the following changes:

- Core
  - Environment: fix insertions of variables with extra strings.
  - Hash Table: implement chaining to avoid collisions.
  - Parser: release resources on init if a parser fails (avoid crash).

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Lars Kumbier](https://github.com/LarsKumbier)
- [Igor D'Astolfo](https://github.com/dusty73)
- [Eduardo Silva](https://github.com/edsiper)
