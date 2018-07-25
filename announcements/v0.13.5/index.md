---
layout: documentation
version: v0.13.5
title: Fluent Bit v0.13.5 - Release Notes
intro: Release Notes
---

# Release Notes v0.13.5

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.13.5__.

## Changes

This is a minor fix release over 0.13 series that includes the following changes:

 - Parser
   - JSON and Regex: do not stop packing on time lookup error
   - Configuration: add new CRIO parser
 - Plugins
   - [Kafka Rest (Output)](https://fluentbit.io/documentation/0.13/output/kafka-rest-proxy.html): fix fractional seconds formatting.
   - [Elasticsearch (Output)](https://fluentbit.io/documentation/0.13/output/elasticsearch.html): fix fractional seconds formatting.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Greg Smith](https://github.com/gasmith-nutanix)
- [Steve Coffman](https://github.com/StevenACoffman)
- [ChitraKumarS](https://github.com/ChitraKumarS)
- [Eduardo Silva](https://github.com/edsiper)
