---
layout: documentation
version: v0.11.5
title: Fluent Bit v0.11.5 - Release Notes
intro: Release Notes
---

# Release Notes v0.11.5

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.11.5__.

## Changes

This is a bug fix release over 0.11 series that includes the following changes:

- Core
  - Pack: when converting to JSON, escape strings if required.
  - Parser: fix timestamp convertion to UTC.
  - Parser: workaround to parse and skip fractional seconds from timestamps without affect interpretation of timezones.

- Filter Kubernetes
  - New _merge\_json\_log_ option. If enabled, the _log_ field is appended as a structured message instead of a quoted string.
  - Add verbose messages when testing connectivity with API Server.

- Elasticsearch output plugin
  - New _include\_tag\_key_ and _tag\_key_ options. When set the tag will be appended as part of the output document.
  - Always format the UTC timestamp.
  - Fix logstash_prefix composer.


## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Karol Brejna](https://github.com/karol-brejna-i)
- [Darek Dymek](https://github.com/darek-dymek-i)
- [Eduardo Silva](http://github.com/edsiper)
