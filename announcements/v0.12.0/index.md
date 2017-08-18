---
layout: documentation
version: v0.12.0
title: Fluent Bit v0.12.0 - Release Notes
intro: Release Notes
---

# Release Notes v0.12.0

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.12.0__.

## Summary

Fluent Bit 0.12 is the next major release that brings exciting features to make logging easily on standalone services and cloud native environments.


## Changes

- Core
  - Native sub-second time resolution!
  - I/O TLS: new debug option tls.debug
  - Configuration now supports [Commands](http://fluentbit.io/documentation/0.12/configuration/commands.html) to include files and set variables
- Parser
  - Unified time lookup feature
  - Improved JSON and Regex engines
  - New Time_Offset feature to specify manual timezone offset
- Pack
  - Full UTF-8 support
  - General improvements when converting from msgpack to JSON
- Input
  - [Tail](http://fluentbit.io/documentation/0.12/input/tail.html) add support for multiline logs.

- Filters
  - [Record Modifier](http://fluentbit.io/documentation/0.12/filter/record_modifier.html): new filter to alter content of log records
  - [Parser](http://fluentbit.io/documentation/0.12/filter/parser.html): new parser filter to structure log records
  - Kubernetes: improved filter to enrich log records with Kubernetes metadata.

- Outputs
  - [Elasticsearch](http://fluentbit.io/documentation/0.12/output/elasticsearch.html): new _buffer\_size_ option and IPv6 support.
  - [Kafka REST Proxy](http://fluentbit.io/documentation/0.12/output/kafka-rest-proxy.html) New plugin to flush records to a Kafka REST Proxy service.

- Libraries
  - MBedTLS: upgrade to 2.5.1
  - Onigmo (regex): upgrade to 6.1.2

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Martin Chodur](https://github.com/FUSAKLA)
- [Tomas Dohnalek](https://github.com/dohnto)
- [Joell](https://github.com/joell)
- [Keyolk](https://github.com/keyolk)
- [Takahiro Yamashita](https://github.com/nokute78)
- [Eduardo Silva](https://github.com/edsiper)
