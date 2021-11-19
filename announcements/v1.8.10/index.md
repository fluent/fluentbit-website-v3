---
layout: documentation
title: Fluent Bit v1.8.10 - Release Notes
intro: Release Notes
---

# Release Notes v1.8.10

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.8.10__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## News

[Fluent Bit](https://fluentbit.io) v1.8.10 is the stable release!, new changes on this version:
 - Core
   - network: fixed error detection and handling (#4295)
   - output: added multithreaded worker support for proxy plugins
   - router: new interface to route and connect directly plugin instances
   - router: on exception of destination type mismath, use debug instead
   - task: process direct routes if they are set
   - parsers: add rabbitmq neo4j and dns custom parsers (#4324)

 - Plugins
   - [Forward (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/forward/)
      - Fix handling of TCP connections on SIGTERM (#2610)
   - [Modify (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/modify/)
      - Check if key exists for `not` conditions (#4319)
   - [Aws (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/aws/)
      - Expose metadata into main context environment
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver/)
      - Add new `http_request_key` configuration property (#4328)
   - [Cloudwatch_Logs (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/cloudwatch_logs/)
      - Auto retry invalid requests
   - [Calyptia Monitoring](https://docs.fluentbit.io/manual/administration/monitoring#calyptia-cloud)
      - Autodetect and send AWS metadata

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Leonardo Almiñana](https://github.com/leonardo-albertovich)
- [Takahiro Yamashita](https://github.com/nokute78)
- [Wesley Pettit](https://github.com/PettitWesley)
- [Eduardo Silva](https://github.com/edsiper)
- [Gautam Punhani](https://github.com/gautampunhani)
- [atharvagunjkar](https://github.com/atharvagunjkar)
- [braydonk](https://github.com/braydonk)
