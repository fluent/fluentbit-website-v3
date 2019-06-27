---
layout: documentation
version: v1.2.0
title: Fluent Bit v1.2.0 - Release Notes
intro: Release Notes
---

# Release Notes v1.2.0

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.2.0__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## Changes

[Fluent Bit](https://fluentbit.io) v1.2.0 is the next major release and include several improvements:

<br>
### Routing: optional routable records

By default all records in Fluent Bit are _routable_ , meaning: after ingestion and filtering, they are routed to the output destination based on the matching rules applied to the original record tags.

Starting from this version, you can create records that are __not routable__. The use case is for records that aims to target the Stream Processor but do not longer need to be routed to some output destination, e.g:

```
[INPUT]
    Name     tail
    Path     /path/to/my/*.log
    Tag      logs.*
    Routable false
```

<br>
### JSON Encoding & UTF-8

The following version fixes all the problems with JSON encoding/decoding and UTF-8 handling, for short: if you are parsing JSON records you no longer need the _parser decoders_. We have fixed all related problems with encoding. Discussion thread of the original issue and fixes are described in the following ticket:

https://github.com/fluent/fluent-bit/issues/1278

<br>
### Stream Processor

Recently we introduced the new [Stream Processing](https://docs.fluentbit.io/stream-processing/) capabilities, for short, an additional engine that allows to perform SQL queries and create new streams of data based on conditions and windows of time. On this new __v1.2__ release the Stream Processor is getting extended with the new following capabilities:

<br>
#### Sub-key selection and conditionals support

It's pretty common that records contains nested maps or sub-keys. Now we provide the ability to use sub-keys to perform conditionals and keys selection. Consider the following record:

```json
{
  "key1": 123,
  "key2": 456,
  "key3": {
    "sub1": {
      "sub2": 789
    }
  }
}
```

Now you can perform queries like:

```
SELECT key3['sub1']['sub2'] FROM STREAM:test WHERE key3['sub1']['sub2'] = 789;
```

<br>
#### New @record functions

On conditionals we have introduced the new _@record_ functions:

| Function              | Description                                         |
|-----------------------|-----------------------------------------------------|
| @record.time()        | returns the record timestamp                        |
| @record.contains(key) | returns true or false if _key_ exists in the record |

<br>
#### IS NULL, IS NOT NULL

We currently support different data types such as _strings_, _integers_, _floats_, _maps_ and _null_. In Fluent Bit, a _null_ value is totally valid and is not related to the absense of a value as in normal databases. To compare if an existing key in the record have a _null_ value or not, we have introduced _IS NULL_ and _IS NOT NULL_ statements, e.g:

```
SELECT * FROM STREAM:test WHERE key3['sub1'] IS NOT NULL;
```

> Note that to check if a _key_ exists or not in the record you have to use @record.contains(k) function

<br>
### Architecture: ARMv8 (aarch64) fixes

The following version implements proper fixes for our co-routines backend in ARMv8 architecture environments. Note that the fix is only required if you are compiling with GCC, Clang compiled versions do not face any issue.

<br>
### Windows Support (beta)

Continuing with our Windows suport, we have introduced a new Windows Event Log plugin:

https://docs.fluentbit.io/manual/input/window

<br>
### Development: new support for external (Dynamic C) plugins!

Extending Fluent Bit through it pluggable architecture is straightforward, but sometimes we need more flexibility to incorporate plugins that are not part of the code base. The new version incorporate support for external C plugins. To get started, refer to the following helper repository:

https://github.com/fluent/fluent-bit-plugin

<br>
### List of general changes

 - Core
   - ci: improve GitLab CI/CD Pipeline (#1372)
   - io: always set file descriptor number on event structure
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
   - new 'routable' property for created streams
   - add @record.time() function for conditionals
   - add support for sub-key selection
   - parser: support keys that starts with an underscore
   - add record-specific functions (@record.contains) (#1369)
   - sp: add support for checking if a key value is NULL or not (#1356)

 - Storage
   - set default storage.max_chunks_up to 128
   - initialize using new API content loader

 - Plugins
   - [Storage_Backlog (Input)](https://docs.fluentbit.io/manual/input/storage_backlog/)
      - Always try to put chunk up, if it fails just continue
      - Handle chunks down/up
   - [Winlog (Input)](https://docs.fluentbit.io/manual/input/winlog/)
      - Add a new plugin for windows event log
   - [Tail (Input)](https://docs.fluentbit.io/manual/input/tail/)
      - Fix packaging and corruption on multiline mode (#1368)
   - [MQTT (Input)](https://docs.fluentbit.io/manual/input/mqtt/)
      - Fix incorrect mqtt length handling (#1391)
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/filter/kubernetes/)
      - Do not unescape and fix handling of a merged map (#1278)
      - New 'merge_parser' option
      - Fix unescaping and pack on all cases (#1278)
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/output/stackdriver/)
      - Fix to enable ipv6 when connect to stackdriver logging
      - Add const in functions signatures and limit casts
   - [Forward (Output)](https://docs.fluentbit.io/manual/output/forward/)
      - Implement 'require_ack_response' (#1321)

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
- [arabustams](https://github.com/arabustams)
- [Jan Willem Janssen](https://github.com/jawi)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Masoud Koleini](https://github.com/koleini)
- [Denis Andrejew](https://github.com/seeekr)
- [Jukka Pihl](https://github.com/bluebike)
- [Masoud Koleini](https://github.com/koleini)
- [Chris Timberlake](https://github.com/Digi59404)
- [Yann Soubeyrand](https://github.com/yann-soubeyrand)
- [Daniel Thompson](https://github.com/JungleGenius)
- [Warren Fernandes](https://github.com/wfernandes)
