---
layout: documentation
version: v1.1.0
title: Fluent Bit v1.1.0 - Release Notes
intro: Release Notes
---

# Release Notes v1.1.0

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.1.0__.

## Changes

[Fluent Bit](https://fluentbit.io) v1.1.0 is the next major release and include several improvements in the stack but also bring two major new things:

### Windows Support (beta)

Starting from this version we are supporting builds on Windows environments, note that not all plugins are enabled by the build system since portability is still an ongoing work. Consider Windows support still an early implementation.

### Stream Processor

Stream Processing is about the ability to perform data processing while it still in motion in-memory. Starting from Fluent Bit v1.1 we implement a Stream Processor engine that provides a full SQL interface to query or filter your logs after they passed the storage phase. For more details about this new feature please refer to the following documentation:

[https://docs.fluentbit.io/stream-processing/](https://docs.fluentbit.io/stream-processing/)

### List of general changes

 - Core
   - bin
     - new -T/--sp-task option to set SQL task for stream processor
     - accept flush time parameter in format seconds.nanoseconds (sec.nsec)
   - io
     - tls: fix conditional for ca_path (CID 185944)
   - utils: protect flb\_utils\_split() from null input (#1150)
   - parser
     - parser: do not raise errors instantly on '%z'/'%Z' on Windows
     - parser: Add FLB\_HAVE\_GMTOFF to detect tm_gmtoff support (#1048)
   - scheduler
     - scheduler: fix multiple SIGSEGV issues on Windows (#1209)
     - scheduler: use mk\_event\_closesocket() to close timer->timer\_fd (#1205)
   - parser: include k8s nginx ingress parser
   - config:
     - fix SIGSEGV errors on shutdown of input plugins (#1081)
     - support 'double' type in configuration
   - filter:
     - use unique instance ids
     - on exit, do not invoke cb\_exit() if no context is set (#1195)
     - initialize every memory instance with zeros (#1195)
     - compose safety Tag and fix write offset (#993)
     - fix buffer management on chain filters (#975)
   - lib: mbedtls: upgrade from v2.14.1 to v2.16.1
   - hash:
     - improve flb\_hash\_add to take key up to key_length (#1186)
     - fix key deletion (#1185)
     - make flb\_hash\_get to work with non-null terminated strings (#1216)
   - proxy:
     - go: create cb\_flush\_ctx to share context between init and flush
     - use flb\_plugin\_proxy\_context when calling into remote plugins
     - proxy: add Windows support for Golang plugins (#1196)
   - router: unify call to check matching routes
   - task: if a retry exceed current memory limit, put chunk down
   - output:
     - remove unnecessary loop to initialize proxies
     - set remote proxy context for output instances
     - fix protocol loader/check
     - use unique instance id, no mask\_id
   - pack:
     - gelf: allow valid level 7 (#1165)
     - gelf: fix printf %.*s arguments order. (#1132)
     - gelf: fix wrong warn gelf-level (#912)

 - Plugins
   - [Systemd (Input)](https://docs.fluentbit.io/manual/input/systemd/)
      - Fix endless loop while reading a rotated journal file it fixes fluent-bit issue #899.
      - Register read\_from\_tail option and cleanup variable check
      - Fix strip_underscores (adds extra character to value) #904
   - [Stdin (Input)](https://docs.fluentbit.io/manual/input/stdin/)
      - Prevent double free / use after free of msgpack buffer (#1052)
   - [Lib (Input)](https://docs.fluentbit.io/manual/input/lib/)
      - Use flb\_pipe\_r() for compatibility with Windows
   - [Exec (Input)](https://docs.fluentbit.io/manual/input/exec/)
      - Add buf_size property for exec plugin (#1116)
   - [Storage_Backlog (Input)](https://docs.fluentbit.io/manual/input/storage_backlog/)
      - Upon start, put chunks 'down'
   - [Random (Input)](https://docs.fluentbit.io/manual/input/random/)
      - Use evutil\_secure\_rng\_get\_byte to obtain random numbers on Windows (#1181)
   - [Tail (Input)](https://docs.fluentbit.io/manual/input/tail/)
      - Restore support of absolute path in expanded tags
      - Windows Support
        - Use win32 glob emulation on Windows
        - Add crlf support to in\_tail (#1161)
        - Emulate inodes on windows (#1160)
        - Avoid locking files on windows (#1159)
        - Add tail\_scan\_win32.c for scanning paths on windows (#1156)
        - Implement flb\_tail\_file\_name() for windows (#1144)
      - Cast arguments explicitly for snprintf(2) (#1158)
      - Use c99 macro instead of '%lu' to format 64-bit integers (#1157)
      - Disable multiline support if no parser backend exists
      - Avoid double freeing the same timeout event object (#1139)
      - Migrate pipe operations to flb\_pipe\_* functions (#1137)
      - Include libgen.h though flb\_compat.h for portability (#1136)
      - Fix sigsegv due to the incompatible type length in windows (int/intptr_t) (#1133)
      - Open the target file in binary mode (#1113)
      - Inotify: add detailed error on inotify enospc (#1018)
      - Add support for internal metrics
   - [MQTT (Input)](https://docs.fluentbit.io/manual/input/mqtt/)
      - Fix memory corruption on dropping packet (#1135)
   - [Stream\_Processor (Input)](https://docs.fluentbit.io/manual/input/stream_processor/)
      - Auto-set tag based on alias
      - New stream processor helper plugin
   - [Forward (Input)](https://docs.fluentbit.io/manual/input/forward/)
      - Disable unix socket support if not available in the system
   - [Cpu (Input)](https://docs.fluentbit.io/manual/input/cpu/)
      - Extend to support sec.nanosecond for sub-second sample rate (#1122)
   - [Lua (Filter)](https://docs.fluentbit.io/manual/filter/lua/)
      - Fix casting of int64 value (#1103)
      - Port filter\_lua to windows (#1054)
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/filter/kubernetes/)
      - New configuration property 'kube\_tag\_prefix'
      - Fix default api server hostname
      - Add new keep\_log configuration option
      - Allow user to decide whether they want to include labels (#1129)
      - Extract docker\_id and container\_hash from kubernetes api (#1131)
      - Fix memory leak on pod record exclusion (#1068)
   - [HTTP (Output)](https://docs.fluentbit.io/manual/output/http/)
      - Add epoch option for json\_date\_format (#1111)
      - Add user-agent header  (#1058)
   - [Kafka_Rest (Output)](https://docs.fluentbit.io/manual/output/kafka_rest/)
      - Rename config functions to avoid bad reference
   - [Kafka (Output)](https://docs.fluentbit.io/manual/output/kafka/)
      - Make msvc compatible (#1179)
      - Add timestamp\_format to kafka output (#1086)
   - [File (Output)](https://docs.fluentbit.io/manual/output/file/)
      - Make windows ready (#1268)
      - Fix data type to validate fwrite() return value (cid 185940)
      - Add new 'msgpack' format (for devs use only)
      - Fix leaks when exiting on exception (cid 185662, 185672)
   - [Forward (Output)](https://docs.fluentbit.io/manual/output/forward/)
      - Make shared\_key usable without tls (and vice versa)
      - Fix the error handling for network writes
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/output/stackdriver/)
      - Add missing / to uri
      - Fix uri leak on gce\_metadata (cid 185751)
      - Fix order of upstream i/o sync flags (cid 185752)
      - Fix gce metadata header length (cid 185754)
      - Added support of metadata server and gce\_instance resource. (#1073)
   - [Elasticsearch (Output)](https://docs.fluentbit.io/manual/output/es/)
      - Fix buffer overrun on trace\_output=on (#1201)
      - Fix elasticsearch\_error\_check, add trace\_error output (#1148)
      - Validate mem allocation and fail upon exception (cid 185622)
      - Add path option. fixes #900. (#901)
      - Add logstash\_prefix\_key support (#698)
      - Add current\_time\_index option (pr #512, #454)

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:

- [Alexander Kabakaev](https://github.com/kabakaev)
- [Rodrigo Queiro](https://github.com/rodrigoqueiroz)
- [Warren Fernandes](https://github.com/wfernandes)
- [Eduardo Silva](https://github.com/edsiper)
- [Jason Keene](https://github.com/jasonkeene)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Don Bowman](https://github.com/donbowman)
- [Vladimir Vasilev](https://github.com/vlvasilev)
- [Hiroshi Hatake](https://github.com/cosmo0920)
- [Masoud Koleini](https://github.com/koleini)
- [Yann Soubeyrand](https://github.com/yann-soubeyrand)
- [Robert LaMarre](https://github.com/robertlamarre)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Nigel Stewart](https://github.com/nigels-com)
- [Don Bowman](https://github.com/donbowman)
- [Ismail Alidzhikov](https://github.com/ialidzhikov)
- [Bogdan Luca](https://github.com/lbogdan)
- [Dominik del Bondio](https://github.com/ddelbondio)
- [richardburakowski](https://github.com/richardburakowski)
- [kabakaev](https://github.com/kabakaev)
- [manuelluis](https://github.com/manuelluis)
- [Naseem Ullah <naseemkullah@gmail.com>](https://github.com/naseemkullah)
- [Marian Lobur](https://github.com/loburm)
- [James Goodhouse](https://github.com/jamesgoodhouse)
- [Vlad Stoian](https://github.com/vlad-stoian)
- [darashenka](https://github.com/darashenka)
- [Leo Jiang](https://github.com/jiangfengbing)
- [Eugenio Paolantonio](https://github.com/kabakaev)
- [Yaroslav Molochko](https://github.com/onorua)
- [Christian Meutes](https://github.com/jesk78)
- [Jukka Pihl](https://github.com/bluebike)
- [Jesse Szwedko](https://github.com/jszwedko)
- [heartrobotninja](https://github.com/heartrobotninja)
- [Scott Johnston](https://github.com/2n3906)
- [Yaroslav Bo](https://github.com/bayaro)
