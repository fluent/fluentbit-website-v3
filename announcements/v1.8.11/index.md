---
layout: documentation
title: Fluent Bit v1.8.11 - Release Notes
intro: Release Notes
---

# Release Notes v1.8.11

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.8.11__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## News

[Fluent Bit](https://fluentbit.io) v1.8.11 is the stable release!, new changes on this version:

 - Core
   - engine: do not retry if the engine is shutting down
   - engine: enforce and reduce shutdown time
   - network: fixed async usage when not in a coroutine error
   - network: added dns resolver type selection mechanism (`net.dns.resolver`)
   - network: on tcp connect change exception from error to debug
   - network: detect if socket has been invalidated
   - utils: detect and replace ill-formed utf-8 bytes (#4297)
   - upstream: detect shutdown and reduce log noise
   - upstream: fix deadlock when destroying connections
   - input_chunk: don't pause ingestion if filesystem storage is enabled (#4221) (#4411)
   - proxy: fail on missing FLBPluginRegister symbol (#4409)

 - Plugins
   - [Forward (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/forward/)
      - Removed unused variables (#4429)
   - [Rewrite_Tag (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/rewrite_tag/)
      - Add null check(#4246)
   - [Elasticsearch (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/es/)
      - Fix buffer size when converted_size is equal to 0. (#4414)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Eduardo Silva](https://github.com/edsiper)
- [Lionel Cons](https://github.com/LionelCons)
- [Leonardo Alminana](https://github.com/leonardo-albertovich)
- [Guillaume SMAHA](https://github.com/GuillaumeSmaha)
- [Jochem Broekhoff](https://github.com/jochembroekhoff)
- [Matthew Fala](https://github.com/matthewfala)
- [Takahiro Yamashita](https://github.com/nokute78)
