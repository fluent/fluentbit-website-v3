---
layout: documentation
version: v1.3.0
title: Fluent Bit v1.3.0 - Release Notes
intro: Release Notes
---

# Release Notes v1.3.0

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.3.0__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## Changes

[Fluent Bit](https://fluentbit.io) v1.3.0 is the next major release and include several improvements:

<br>
### Stream Processor

Our built-in Stream Processor keeps improving, on this release we have integrated support for linear regression algorithms to provide timeseries functionalities, we expose two new functions that aim to expose Machine Learning capabilities:

- TIMESERIES_FORECAST()
- TIMESERIES_FORECAST_R()

<br>
#### New Plugins & Connectors

Fluent Bit community continues contributing improvements and extensions, the following is a summary of the new plugins that are part of v1.3 release:

##### Input

- [thermal](https://docs.fluentbit.io/manual/input/thermal/): available on Linux, collect temperature samples from the registered thermal zones in the system.
- [collectd](https://docs.fluentbit.io/manual/input/collectd/): new collectd UDP service mode that collect metrics from remote collectd services.

##### Output

- [datadog](https://docs.fluentbit.io/manual/output/datadog/): new native connector that ship records to Datadog service.

<br>
### Kubernetes Filter

A major improvement has landed to our Kubernetes Filter. The way to extract docker id and container id has been improved, annotation handling has been extended, now is possible to exclude records per stream or container name. For cases where the metadata cannot be obtained now the filter will add at least the metadata extracted from the local file name.

<br>
### Prometheus Metrics

The exposed Prometheus metrics, now are sorted and have the proper TYPE labels for easy processing on the Prometheus server side.

<br>
### Performance & Tools

Performance is usually a complex topic due to diverse scenarios of environments and data loads. When performing benchmarks is important to have proper tooling, so we have started a sub-project that provides simple tooling for testing:

- https://github.com/fluent/fluent-bit-perf

<br>
### List of general changes

 - Core
   - io: tls: support SNI routing for outputs (#1313)
   - utils: fix integer size to avoid overflow on 32 bits (#1328)
   - parser: decoder: json: do not unescape and skip empty spaces (#1278)
   - scheduler: fix backoff jitter calculation (#798 #670 #649)
   - conf: parsers: docker: comment out decoders, not longer required on k8s
   - regex: remove onigmo data types from regex context
   - input: new 'routable' option for input plugins
   - input: chunk: safe chunk creation validating file up/down
   - config: add new storage option 'storage.max_chunks_up'
   - core: allow use of relative paths in configuration files on Windows
   - compat: add realpath(3) emulation for Windows
   - compat: introduce FLB_DIRCHAR
   - upstream: always do a reset of connection event structure
   - oauth2: fix to try ipv6 when getting upstream connection
   - unescape: utf-8: do not skip byte if character cannot be encoded (#1278)
   - lib: msgpack: upgrade from 3.1.1 to 3.2.0

 - Stream Processor
   - add @record.time() function for conditionals
   - add support for sub-key selection in 'group by' statement
   - parser: support keys that starts with an underscore
   - add record-specific functions (@record.contains) (#1369)

 - Storage
   - set default storage.max_chunks_up to 128
   - initialize using new API content loader

- Plugins
   - [Systemd (Input)](https://docs.fluentbit.io/manual/input/systemd/)
      - Workaround for systemd tail/skip issue 9934 (#1565)
      - Validate if flb_sqldb is set
   - [Lib (Input)](https://docs.fluentbit.io/manual/input/lib/)
      - Destroy packer state on exit
   - [Winlog (Input)](https://docs.fluentbit.io/manual/input/winlog/)
      - Listen to 'application' channel by defAult
   - [Tail (Input)](https://docs.fluentbit.io/manual/input/tail/)
      - Prevent file duplication on macOS (#1596)
      - Fix conditionals in case 'file' becomes null on exception (cid 251480)
      - Prevent wrong memory accesses and memory leaks on exit
      - Improve performance (3x) when database is enabled
      - Optional compile-time dependency on SQLlite (#1472)
   - [Tcp (Input)](https://docs.fluentbit.io/manual/input/tcp/)
      - New 'format' and 'separator' options to allow raw text
   - [Cpu (Input)](https://docs.fluentbit.io/manual/input/cpu/)
      - New 'pid' option to monitor a specific process
   - [Syslog (Input)](https://docs.fluentbit.io/manual/input/syslog/)
      - Fix protocol parser for concatenated messages
      - Add 'unix_perm' option to specify socket file permission (#1554)
   - [Thermal (Input)](https://docs.fluentbit.io/manual/input/thermal/)
      - Add temperature input plugin for Linux (#1509)
   - [MQTT (Input)](https://docs.fluentbit.io/manual/input/mqtt/)
      - Fix ping response
      - Properly encode packet identifier
   - [Collectd (Input)](https://docs.fluentbit.io/manual/input/collectd/)
      - Implement a new input plugin for collectd (#1506)
   - [Docker (Input)](https://docs.fluentbit.io/manual/input/docker/)
      - New Docker container metrics collector (original pr #790)
   - [Serial (Input)](https://docs.fluentbit.io/manual/input/serial/)
      - Fix leak on failure plugin initialization (cid 251471)
   - [Grep (Filter)](https://docs.fluentbit.io/manual/filter/grep/)
      - Add error messages for troubleshooting
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/filter/kubernetes/)
      - Strict validation of file descriptor (cid 184257)
      - Always add meta extracted from the record itself
      - Add per stream and per container exclude annotation support
      - Fix parser annotation handling
      - Fix container docker id and image id extraction
   - [Nest (Filter)](https://docs.fluentbit.io/manual/filter/nest/)
      - Free unused temporary buffer(#1540) (#1541)
      - Use kv interface to query properties
      - Copy original event if condition is not mached(#1434)
      - Use temporal variable for warning message
   - [Modify (Filter)](https://docs.fluentbit.io/manual/filter/modify/)
      - Use new regex_find() api and fix group matching (#1433)
      - Copy original event if condition is not matched (#1077 #1416)
   - [Datadog (Output)](https://docs.fluentbit.io/manual/output/datadog/)
      - Add new official Datadog output plugin (#1502)
   - [TCP (Output)](https://docs.fluentbit.io/manual/output/tcp/)
      - New tcp output plugin with optional TLS support
   - [HTTP (Output)](https://docs.fluentbit.io/manual/output/http/)
      - Fix gelf multiline, group all records in one payload
      - New 'compress' option to compress payload with gzip
   - [File (Output)](https://docs.fluentbit.io/manual/output/file/)
      - Add support for arbitrary templating (#1480)
   - [Lib (Output)](https://docs.fluentbit.io/manual/output/lib/)
      - Do not append empty space in json record after timestamp (#1396)
   - [Influxdb (Output)](https://docs.fluentbit.io/manual/output/influxdb/)
      - Add escape for backslash (#1123 #1455)
   - [Kafka (Output)](https://docs.fluentbit.io/manual/output/kafka/)
      - Upgrade librdkafka v0.11.6 -> v1.2.0
      - Always call rd_kafka_poll() after sleep to reduce saturation (#923)
   - [Bigquery (Output)](https://docs.fluentbit.io/manual/output/bigquery/)
      - Use string length to calculate buffer size (cid 185609)
      - Enable 'ipv6 mode' support (#761)
   - [Forward (Output)](https://docs.fluentbit.io/manual/output/forward/)
      - Add support for user-based authentication
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/output/stackdriver/)
      - Add functionality to send log level info to stackdriver (#1418)

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Masoud Koleini](https://github.com/koleini)
- [Hiroshi Hatake](https://github.com/cosmo0920)
- [Yann Soubeyrand](https://github.com/yann-soubeyrand)
- [Nigel Stewart](https://github.com/nigels-com)
- [Manuel Luis Sanmartín Rozada](https://github.com/manuelluis)
- [Takahiro YAMASHITA](https://github.com/nokute78)
- [Yingting](https://github.com/huangyingting)
- [Andrey Kaipov](https://github.com/andreykaipov)
- [Masoud Koleini](https://github.com/koleini)
- [kabakaev](https://github.com/kabakaev)
- [Yunchao Wang](https://github.com/Charles-WYC)
- [Ashutosh Dhundhara](https://github.com/ashutoshdhundhara)
- [Fenggang](https://github.com/ginobiliwang)
- [kantica](https://github.com/kantica)
- [lang710](https://github.com/lang710)
- [Joy Zhang](https://github.com/joyzhang-dd)
- [Zero King](https://github.com/l2dy)
- [Julien Vincent](https://github.com/julienvincent)
- [Benjamin Fuller](https://github.com/Benjamintf1)
- [Haitao Li](https://github.com/lht)
- [Joost Coelingh](https://github.com/joostcoelingh)
- [Cedric Lamoriniere](https://github.com/clamoriniere)
- [Cataclysm](https://github.com/aniketoss)
- [Marian Lobur](https://github.com/loburm)
- [Stuart Reilly](https://github.com/themadprofessor)
- [Jan Willem Janssen](https://github.com/jawi)
- [disigma](https://github.com/disigma)
- [Bogdan Luca](https://github.com/lbogdan)
- [Jukka Pihl](https://github.com/bluebike)
- [Chris Timberlake](https://github.com/Digi59404)
