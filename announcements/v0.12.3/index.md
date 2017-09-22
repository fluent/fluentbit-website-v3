---
layout: documentation
version: v0.12.3
title: Fluent Bit v0.12.3 - Release Notes
intro: Release Notes
---

# Release Notes v0.12.3

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.12.3__.

## Changes

This is a minor fix release over 0.12 series that includes the following changes:

- Core
  - Output: if TLS initialization fails, shutdown doing a safe cleanup

- Plugins
  - [Tail (input)](http://fluentbit.io/documentation/0.12/input/tail.html): new _skip\_long\_lines_ option.
  - [Kubernetes (filter)](http://fluentbit.io/documentation/0.12/filter/kubernetes.html): do not write containers info into the cache

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Márk Sági-Kazár](https://github.com/sagikazarmark)
- [rksatyam](https://github.com/rksatyam)
- [adinaclaudia](https://github.com/adinaclaudia)
- [Eduardo Silva](https://github.com/edsiper)
