---
layout: documentation
version: v0.11.15
title: Fluent Bit v0.11.15 - Release Notes
intro: Release Notes
---

# Release Notes v0.11.15

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.11.15__.

## Changes

This is a bug fix release over 0.11 series that includes the following changes:

- Core
  - Logger: fix string delimiter for large messages.
  - HTTP\_Client: new configurable dynamic buffers to read responses.

- Parser
  - Avoid memory corruption on bad time input.

- Plugins
  - Elasticsearch (output): new [Buffer_Size](http://fluentbit.io/documentation/0.11/output/elasticsearch.html) configuration property to specify the memory limit for the Elasticsearch HTTP response.
  - Elasticsearch (output): improved error checking for large responses with limited [Buffer_Size](http://fluentbit.io/documentation/0.11/output/elasticsearch.html).

- Tests
  - http_client: new unit test for dynamic buffers.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, reporting issues and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
