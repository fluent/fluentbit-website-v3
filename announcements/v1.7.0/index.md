---
layout: documentation
version: v1.7.0
title: Fluent Bit v1.7.0 - Release Notes
intro: Release Notes
---

# Release Notes v1.7

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.7__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>

## FluentCon is coming! May 4th! Save the Date

The Fluent ecosystem keeps growing and now we are bringing the best of [Fluentd](https://www.fluentd.org) and [Fluent Bit](https://fluentbit.io)! More information click the banner below:

<center>
    <a href="https://events.linuxfoundation.org/fluentcon/" target="_blank">
      ![](/assets/img/fluentcon-release.png)
    </a>
</center>

<br>
## News

[Fluent Bit](https://fluentbit.io) v1.7 is the next major release!, here you get the exciting news:

### Core: Multithread Support, 5x Performance!

Most of users are very pleased with the high performance of Fluent Bit at a low cost of CPU and Memory. Our event-driven architecture and optimized handling of I/O through co-routines and buffering techniques is more than sufficient for most of cases. But running at high scale a single-thread program might face some limits since we were using a single CPU, and after working hard with our Cloud Providers partners like Google and Amazon, now we are pleased to introduce our new multi-thread architecture support: 5x times faster throughput!.

Running in multiple threads allows us to scale to multiple CPU and scale data processing and delivery at higher levels. This new mechanism can be configured at start time and can be enabled optionally per output connector (plugin). Now output connectors can run in multi thread mode using the new option ```workers```. Example:

```
[OUTPUT]
    name    http
    host    192.168.3.4
    port    443
    tls     on
    format  json_lines
    workers 4
```

The example above enable ```4 workers``` for the connector, so every data delivery procedure will run independently in a separate thread, further connections are balanced in a round-robin fashion.

The multithread implementation is lock-free at runtime. One tip: if you are curious about the improvement, just try setting ```workers 1``` in your configuration, that option will force the engine to spawn a dedicated thread for data delivery, but note that this thread also can handle hundred of I/O requirements.

### Core: New TLS/SSL Layer, OpenSSL!

Since day zero Fluent Bit supported TLS/SSL through the mbedTLS library. The library is very lightweight and gets the job done. Doing more performance research we found that replacing mbedTLS with OpenSSL will bring even more performance improvements due to it optimized crypto routines. Starting from Fluent Bit v1.7 we provide an abstracted layer for TLS/SSL handling. Now OpenSSL is the preferred option for performance and ecosystem compatibility.

### Tail Input (local files)

The are two major enhancements on this version, now we provide a new configuration property called ```offset_key``` which optionally allows to append a key with the file offset to each record, and the known option ```ignore_older``` when enabled, now allows to skip unmodified files at start time and also stop monitoring files that have not modified in the interval of time set. This last property behavior change helps to reduce significantly the number of open file descriptors.

### HTTP input plugin (beta)

We are including a new beta plugin that allows to receive data over HTTP protocol. This input plugin is fully functional and we expect extending it capabilities over the 1.7.x release cycle.

### Filter GeoIP2

Enrich your records with [geoip2](https://docs.fluentbit.io/manual/v/master/pipeline/filters/geoip2) data!. If you have records that contains IP addressed and need a country reference, this is the filter for you.

### WebSocket Output

We have introduced a new native [Websocket](https://docs.fluentbit.io/manual/v/master/pipeline/outputs/websocket) output plugin.

### Others

There are tons of other imrpovements and fixes on this major release, here is a list of the most relevant ones:

 - Core
   - parser: Add a new option ```Time_Strict``` (#2813)
   - parser: implement generic support for %L (subseconds) (#2722)
   - avro: new avro interface and unit tests
   - bin: add "--workdir" flag to set the working directory (#2947)
   - bin: new '-J' option to print plugin help in JSON format
   - bin: add --dry-run check configuration option (#2179)
   - tests: fuzzers: added a genera parser fuzzer  (#2665)
   - hash: implement flb_hash_get_ptr()
   - hash: new function to remove entry by pointed value
   - hash: use xxHash and allow referenced values
   - aws: fix credential refresh and expiration processing code
   - aws: support multiworkers in AWS credential libraries
   - aws: ECS comes before EC2 in standard chain
   - aws: credentials: Add support for EKS_POD_EXECUTION_ROLE
   - metrics: clarification of output_retries_failed metric (#2755)
   - engine_dispatch: use new 'coro' interface name
   - engine_dispatch: use new output interface to flush tasks
   - scheduler: make context agnostic and add TLS api
   - scheduler: fix problem with SIGSEGV on FreeBSD 12+ (#2781)
   - scheduler: use flb_random_bytes() instead of /dev/urandom (#2679)
   - upstream: new 'net.keepalive_max_recycle' option to destroy keepalive connections after configured uses (#2704)
   - http_client_debug: detect GZIP payload
   - tls: new TLS/SSL layer with OpenSSL support
   - win32: Set the working directory for Windows Services (#2946)
   - win32: use SERVICE_WIN32_OWN_PROCESS for dwServiceType (#2788)
   - mp: accessor: new 'accessor' interface and generic keys removal api
   - pack: fix missing scientific notation in JSON parser (#2746)
   - pack: gelf: on flatten, only process string key types (oss-fuzz 26294)
   - gzip: fix compression size calculation (oss-fuzz 27261)
   - input_chunk: fix 'no available chunk' error with `filter_rewrite_tag`
   - input_chunk: get real chunk size when calculating fs_chunks_size (#3054)

 - Libraries
   - lib: miniz: upgrade to b43f8a0c22
   - lib: jsmn: upgrade to 053d3cd2
   - lib: tutf8e: Resolve compiler warnings on Windows (#2884)
   - lib: monkey: sync scheduler changes and remove unused old-uclib header
   - lib: luajit: upgrade to commit 1e66d0f
   - lib: chunkio: upgrade to v1.1.0
   - lib: msgpack: upgrade from c_master branch 4f59b98
   - lib: xxhash: add new hashing library
   - lib: libco: sync changes for FreeBSD and non-gcc compilers

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!
