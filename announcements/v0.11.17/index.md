---
layout: documentation
version: v0.11.17
title: Fluent Bit v0.11.17 - Release Notes
intro: Release Notes
---

# Release Notes v0.11.17

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.11.17__.

## Changes

This is a bug fix release over 0.11 series that includes the following changes:

- Hash Table
  - Fix wrong entry index when a single entry exists
  - Unit test: new hashtable:single test

- Plugins
  - [Kubernetes (filter)](http://fluentbit.io/documentation/0.11/filter/kubernetes.html): include node hostname in the record

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Kushal Bhandari](https://github.com/kushwiz)
- [Eduardo Silva](https://github.com/edsiper)
