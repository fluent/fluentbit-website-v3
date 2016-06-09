---
layout: announcement
version: v0.7.0
title: Fluent Bit v0.7.0 - Release Notes
intro: Release notes
---

# Release Notes v0.7.0

[Fluent Bit](http://fluentbit.io) is a specialized data collection tool with a strong focus on
Embedded Linux. We are proud to announce the availability of __Fluent Bit v0.7.0__.

## Changes

Below there is a list of the most relevant changes on this version:

- Lib: shared library API highly improved, new documentation available.
- Core: new mechanism to support network services for output plugins.
- Core: input and output plugins now support multiple instances.
- Core/plugins: new support for properties, each plugin instance can set their own.
- Core: add Windows support through Cygwin.
- Core: set compiler visibility, only export what is needed for shared library mode.
- Engine: new 'task' internal feature.
- Router: new routing feature to associate input plugin tags and output plugin matches.
- Debian: fix copyright info.
- Bin: new -t (tag), -m (match) and -p (property) command line arguments.
- I/O: TLS: by default, always verify peer certificate.
- I/O: TLS: new configuration properties: tls, tls.verify, tls.ca_file, tls.crt_file, tls.key_file and tls.key_password.
- Utils: new TRACE mode (for development).
- Utils: all messages go to STDERR now.
- in_head: new plugin to read initial parts of file.
- in_mqtt: improve protocol parser for slow connections.
- out_nats: new [NATS](http://www.nats.io) output plugin.
- Documentation: several updates.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting and general contributions on this release:

- [Nokute78](https://github.com/nokute78)
- [Eduardo Silva](http://github.com/edsiper)
- [Markus Elfring](https://github.com/elfring)
