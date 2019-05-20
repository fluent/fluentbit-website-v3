---
layout: documentation
version: v1.1.1
title: Fluent Bit v1.1.1 - Release Notes
intro: Release Notes
---

# Release Notes v1.1.1

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.1.1__.

## Changes

This is a minor release over 1.1 series that includes the following changes:

 - Core
   - utils: fix integer size to avoid overflow on 32 bits (#1328)
   - scheduler: fix backoff jitter calculation (#798 #670 #649)

 - Yocto / Bitbake (packaging)
   - Add bitbake recipe for current version

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
