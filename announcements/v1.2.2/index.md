---
layout: documentation
version: v1.2.2
title: Fluent Bit v1.2.2 - Release Notes
intro: Release Notes
---

# Release Notes v1.2.2

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.2.2__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## Changes

[Fluent Bit](https://fluentbit.io) __v1.2.2__ is the next minor release of _1.2_ series.

<br>
### List of general changes

 - Core
   - engine: dispatch: release chunk lock if task could not be created
   - regex: new function flb_regex_match() to simplify matching
   - plugin: validate if 'proxy go' is enabled (#1440)
   - http_server: fix leak on exit on main end-point
   - tests: extended tests for filters

 - Plugins
   - [Modify (Filter)](https://docs.fluentbit.io/manual/filter/modify/)
      - Fix group matching (#1433)
   - [Nest (Filter)](https://docs.fluentbit.io/manual/filter/nest/)
      - Copy original event if condition is not matched (#1434)
   - [Grep (Filter)](https://docs.fluentbit.io/manual/filter/grep/)
      - Fix group matching (same as #1433)
   - [Bigquery (Output)](https://docs.fluentbit.io/manual/output/bigquery/)
      - Enable 'ipv6 mode' support (#761)

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
- [Takahiro YAMASHITA](https://github.com/nokute78)
- [Jukka Pihl](https://github.com/bluebike)
