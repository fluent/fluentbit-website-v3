---
layout: announcement
version: v0.8.1
title: Fluent Bit v0.8.1 - Release Notes
intro: Release notes
---

# Release Notes v0.8.1

[Fluent Bit](http://fluentbit.io) is a specialized data collection tool with a strong focus on
Embedded Linux. We are proud to announce the availability of __Fluent Bit v0.8.1__.

## Changes

This version comes with fixes and several improvements over v0.8 series, here is a list of the most relevant changes:

- in_forward: handle clients connections locally.
- in_forward: fix processing for _Forward_ protocol format [tag, time, map].
- out_http: new _Format_ configuration key, now it allows to flush records in JSON format in addition to MessagePack.
- out_http: new _Proxy_ configuration key, now it support an optional HTTP Proxy to deliver data to a backend.
- out_http: new _URI_ configuration key, allows to specify the target HTTP end-point URI.
- Core: http_client: add native support for HTTP Proxy.
- Core: remove log instance at exit.
- Core: release buffer at flb_service_conf().
- in_mqtt: prevent double free on property buffer at exit.
- in_mqtt: add missing exit callback routine.
- input/output: safe release of properties resources at exit.
- pack: release resources at exit.
- in_head: release sbuffer at exit.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting and general contributions on this release:

- [Takahiro Yamashita](https://github.com/nokute78)
- [Eduardo Silva](http://github.com/edsiper)
