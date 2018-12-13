---
layout: documentation
version: v1.0.0
title: Fluent Bit v1.0.0 - Release Notes
intro: Release Notes
---

# Release Notes v1.0.0

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Log Forwarder and Processor for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.0.0__.

## Changes

Fluent Bit v1.0.0 is the next major release and include several improvements an extensions through the plugins interface. The most relevant changes are:

  - Core
    - New Storage Layer that now provides configurable buffering either in-memory or in the filesystem.
    - Metrics: Filters now expose metrics.

  - Plugins
    - Output
      - [BigQuery](https://docs.fluentbit.io/manual/output/bigquery): new Google BigQuery plugin.
    - Filter
      - [Lua](https://docs.fluentbit.io/manual/filter/lua): improved Lua filtering scripting support.
      - [Kubernetes](https://docs.fluentbit.io/manual/filter/kubernetes): extended features to support custom annotations per container and streams.

  - Docker
    - New Docker image based on Distroless, image size reduced ~34%.

## Contributors

On this __1.0 Major Release__, more than 30 individuals from the community have contributed with documentation, github issues, troubleshooting and patches. Thanks everyone who have been involved to make Fluent Bit and extended and more reliable solution for Logging!
