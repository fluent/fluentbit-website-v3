---
layout: documentation
version: v1.1.2
title: Fluent Bit v1.1.2 - Release Notes
intro: Release Notes
---

# Release Notes v1.1.2

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.1.2__.

## Changes

This release comes with security updates over 1.1 series, all users are encourage to upgrade:

 - Core
   - mem: do not permit zero-sized allocations (FLU-01-002)

 - Plugins
   - [Forward (Input)](https://docs.fluentbit.io/manual/input/forward/)
      - Fix DoS via incomplete ext format (flu-01-004)
      - Fix heap overflow via negative length (flu-01-003)
   - [MQTT (Input)](https://docs.fluentbit.io/manual/input/mqtt/)
      - Fix head overflow in parser (flu-01-005, flu-01-006)
   - [Elasticsearch (Output)](https://docs.fluentbit.io/manual/output/es/)
      - Fix setting generate_id where it creates corrupted json output #1308 (#1357)
   - [Stdout (Output)](https://docs.fluentbit.io/manual/output/stdout/)
      - Call fflush(stdout) at the end of cb_stdout_flush()

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Daniel Thompson](https://github.com/JungleGenius)
