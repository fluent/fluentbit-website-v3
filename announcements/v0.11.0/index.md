---
layout: announcement
version: v0.11.0
title: Fluent Bit v0.11.0 - Release Notes
intro: Release Notes
---

# Release Notes v0.11.0

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.11.0__.

## Changes

This release is a major version, several new features have been added:


- Core
  - Pack: new function to convert Msgpack to JSON
  - Regex: new internal interface to provide regex support to the core and plugins.
  - Hash: new hashing interface.
  - Environment: Fluent Bit now is aware about environment variables and allow to set and use specific variables in configuration files.
  - Thread: ucontext backend deprecated. Everything is handled by libco now.
  - Logging fixed for master process.
  - HTTP Client: map payload content in response.
  - New option _-R_ to load parsers file.

- Parsers
  - A new Parsers interface have been added. From now plugins can take advante of built-in parsing support. Given a collected log/string, when applyng a parser rule it's possible to capture specific fields and convert the unstructure log to a structured one.
  - The parsers are defined in a configuration file, the parsing can be based in a regular expression or mapping a direct JSON format. It also supports time format lookup.

- Libraries / Dependencies
  - Onigmo: new Regex engine.
  - SQLite3 upgraded to v3.16.1.
  - cJSON deprecated (finally).

- Filter
  - New [Filtering](http://fluentbit.io/documentation/0.11/filter/) plugin architecture.
  - [filter_kubernetes](http://fluentbit.io/documentation/0.11/filter/kubernetes.html): new filter to enrich logs with Kubernetes metadata. It append POD and container info gathered locally from file names and from the API server.
  - filter\_grep: new _grep_ filter. It supports _regex_ and _exclude_ modes.

- Proxy
  - Refactored Golang interface for output plugins

- Logger
  - Fix initialization mode and make it more friendly for daemon mode.

- Input
  - input plugins: msgpack buffers now are handled by Fluent Bit Core, input plugins uses new API to ingest data.
  - in\_tail: add support for parsing, new _Parser_ configuration key.
  - in\_tail: add support to append file name to the tags when a wildcard is specified.
  - in\_tail: add support to append file name in the record map through _path\_key_ option.
  - in\_proc: new features to collect memory usage and count open file descriptors by process.
  - in\_mem: adjustments to generate info similar to free(1) command.
  - in\_disk: new plugin to gather disks metrics.
  - in\_forward: add support for PackedForward mode (used by Fluentd).

- Output Plugins
  - out\_flowcounter: support counters for different inputs.
  - out\_lib: support JSON output.
  - out\_file: new plugin to write records to the file system.
  - out\_es (Elasticsearch): new support for logstash format.
  - out\_es (Elasticsearch): add support for nested fields.
  - out\_es (Elasticsearch): fix buffering realloc logic.
  - out\_nats: enable by default.
  - out\_influxdb: fix buffering realloc logic.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Takahiro Yamashita](https://github.com/nokute78)
- [Eduardo Silva](http://github.com/edsiper)
