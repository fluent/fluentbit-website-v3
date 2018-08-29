---
layout: documentation
version: v0.14.0
title: Fluent Bit v0.14.0 - Release Notes
intro: Release Notes
---

# Release Notes v0.14.0

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.14.0__.

## Changes

Fluent Bit v0.14.0 is the next major release and include several improvements an extensions through the plugins interface. The most relevant changes are:

  - Core
    - Upstream: new _upstream_ interface that allows to set multiple target nodes for output plugins with round-robin mode. This interface is exposed and used only at the moment by [Forward output](https://docs.fluentbit.io/manual/v/0.14/output/forward) plugin
    - Unescape: improved UTF-8 handling when decoding strings.
  - Plugins
    - Input
      - [Stdin](https://docs.fluentbit.io/manual/input/stdin): now it accepts non JSON maps (raw text).
    - Filter
      - [Lua](https://docs.fluentbit.io/manual/filter/lua): filter records using Lua Scripts!
      - [Kubernetes](https://docs.fluentbit.io/manual/filter/kubernetes): new Merge\_Log\_Key option to group structured message.
    - Output
      - [Stackdriver (Google Cloud)](https://docs.fluentbit.io/manual/output/stackdriver): new plugin to ingest logs into Google Stackdriver service (limited to _global_ resource)
      - [Forward](https://docs.fluentbit.io/manual/output/forward): support Upstream mode to deliver logs to multiple nodes in round-robin mode.

## Contributors

On this __0.14 major release__, several individuals from the community have contributed with documentation, github issues, troubleshooting and patches. Thanks everyone who have been involved to make Fluent Bit and extended and more reliable solution for Logging!
