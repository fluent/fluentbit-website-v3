---
layout: documentation
version: v1.0.5
title: Fluent Bit v1.0.5 - Release Notes
intro: Release Notes
---

# Release Notes v1.0.5

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.0.5__.

## Changes

This is a minor release over 1.0 series that includes the following changes:

 - Core
   - engine: fix SIGSEGV while flb\_shutdown() on select/libevent backend (#1085)
   - tests: runtime: filter\_kubernetes: test 'exclude' property
   - tests: internal: pack: validate return value of msgpack\_unpack\_next()
   - unescape: fix escape validator, add missing \r, \t, \f and \b (#1074)
   - log: add a missing FLB\_TLS\_INIT call for flb\_log\_ctx (#1080)
   - docs: contributing: fix typo s/pacth or patches/patches (#1049)
   - utils: protect flb\_utils\_split() from null input (#1150)
   - parser: json: validate return value of msgpack\_unpack\_next()
   - parser: initialize "types" to NULL explicitly (#1096)
   - storage: destroy references to input chunks on exit
   - build: on install files, check for systemd first and install plugins.conf (#1089)
   - mp: validate return value of msgpack\_unpack\_next()
   - plugins: validate return value of msgpack\_unpack\_next()
   - test: http client test segfaults in macOS. (#1097)
   - test: runtime: filter\_kubernetes: fix  test for excluded logs (#1087)
   - hash: make flb\_hash\_get to work with non-null terminated strings (#1216)
   - config: fix SIGSEGV errors on shutdown of input plugins (#1081)
   - pack: gelf: allow valid level 7 (#1165)
   - pack: gelf: fix printf %.*s arguments order. (#1132)
   - pack: gelf: fix wrong warn gelf-level (#912)
   - pack: validate return value of msgpack\_unpack\_next()

 - Plugins
   - [Systemd (Input)](https://docs.fluentbit.io/manual/input/systemd/)
      - Fix strip\_underscores (adds extra character to value) #904
   - [Stdin (Input)](https://docs.fluentbit.io/manual/input/stdin/)
      - Prevent double free / use after free of msgpack buffer (#1052)
   - [Cpu (Input)](https://docs.fluentbit.io/manual/input/cpu/)
      - Extend to support sec.nanosecond for sub-second sample rate (#1122)
   - [Exec (Input)](https://docs.fluentbit.io/manual/input/exec/)
      - Add buf\_size property for exec plugin (#1116)
   - [Lua (Filter)](https://docs.fluentbit.io/manual/filter/lua/)
      - Fix casting of int64 value (#1103)
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/filter/kubernetes/)
      - Remove old-duplicated function
      - Allow user to decide whether they want to include labels (#1129)
      - Extract docker\_id and container\_hash from kubernetes api (#1131)
   - [HTTP (Output)](https://docs.fluentbit.io/manual/output/http/)
      - Add user-agent header  (#1058)
      - Add epoch option for json\_date\_format (#1111)
   - [Bigquery (Output)](https://docs.fluentbit.io/manual/output/bigquery/)
      - On flb\_sds\_cat(), override pointer with returned value (cid 185635, 185623)
   - [Kafka (Output)](https://docs.fluentbit.io/manual/output/kafka/)
      - Add timestamp\_format to kafka output (#1086)
   - [File (Output)](https://docs.fluentbit.io/manual/output/file/)
      - Fix leaks when exiting on exception (cid 185662, 185672)
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/output/stackdriver/)
      - Added support of metadata server and gce\_instance resource. (#1073)
   - [Elasticsearch (Output)](https://docs.fluentbit.io/manual/output/es/)
      - Fix elasticsearch\_error\_check, add trace\_error output (#1148)
      - Validate mem allocation and fail upon exception (cid 185622)
      - Add path option. fixes #900. (#901)
      - Add logstash\_prefix\_key support (#698)
      - Add current\_time\_index option (pr #512, #454)
   - [Forward (Output)](https://docs.fluentbit.io/manual/output/forward/)
      - Don't assumed 'secure' mode just because TLS is on.

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Vladimir Vasilev](https://github.com/vlvasilev)
- [Eduardo Silva](https://github.com/edsiper)
- [heartrobotninja](https://github.com/heartrobotninja)
- [Jesse Szwedko](https://github.com/jszwedko)
- [Nigel Stewart](https://github.com/nigels-com)
- [Don Bowman](https://github.com/donbowman)
- [Ismail Alidzhikov](https://github.com/ialidzhikov)
- [Bogdan Luca](https://github.com/lbogdan)
- [Dominik del Bondio](https://github.com/ddelbondio)
- [richardburakowski](https://github.com/richardburakowski)
- [kabakaev](https://github.com/kabakaev)
- [manuelluis](https://github.com/manuelluis)
- [Marian Lobur](https://github.com/loburm)
- [James Goodhouse](https://github.com/jamesgoodhouse)
- [Vlad Stoian](https://github.com/vlad-stoian)
- [darashenka](https://github.com/darashenka)
- [Leo Jiang](https://github.com/jiangfengbing)
- [Eugenio Paolantonio](https://github.com/kabakaev)
- [Yaroslav Molochko](https://github.com/onorua)
- [Don Bowman](https://github.com/donbowman)
- [Christian Meutes](https://github.com/jesk78)
- [Jukka Pihl](https://github.com/bluebike)
- [Fujimoto Seiji](https://github.com/fujimotos)
