---
layout: documentation
version: v1.0.4
title: Fluent Bit v1.0.4 - Release Notes
intro: Release Notes
---

# Release Notes v1.0.4

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.0.4__.

## Changes

This is a minor release over 1.0 series that includes the following changes:

 - Core
   - Storage: fix leak on filesystem backend when using memory mapped files.

 - Plugins
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/filter/kubernetes): Fix memory leak when Pods logs are excluded.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Hector Huertas](https://github.com/hectorhuertas)
- [scuzhanglei](https://github.com/scuzhanglei)
- [Eduardo Silva](https://github.com/edsiper)
