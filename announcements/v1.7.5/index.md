---
layout: documentation
version: v1.7.5
title: Fluent Bit v1.7.5 - Release Notes
intro: Release Notes
---

# Release Notes v1.7.5

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.7.5__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- <a href="https://docs.fluentbit.io/manual/installation/upgrade_notes">https://docs.fluentbit.io/manual/installation/upgrade_notes</a>

<br>

## Changes

[Fluent Bit](https://fluentbit.io) v1.7.5 is the patch release on top of 1.7 series that comes with the following changes:

 - Core
   - http_client: implement NO_PROXY support  (#3272)
   - oauth2: fix token expiration check (#3373 #3455)
   - parser_decoder: fix memory leak
   - parser: json: fix double-free (#3478)
   - ra: key: fix signed integer overflow (#3418)
   - record_accessor: limit length check only to floats
   - record_accessor: fix stack overflow
   - output: allow ```no_retries```  as ```retry_limit``` to disable retrying  (#3219)
   - input_chunk: only iterate over overlimit output plugins (#3472)
   - bin: fix help text alignment (#3425)

 - Plugins
   - [Forward (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/forward/)
      - Support config map
   - [Winlog (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/winlog/)
      - Avoid sigsegv on invalid message placeholders (#3475)
   - [HTTP (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/http/)
      - Fix socket fd leak
      - Changes for lambda extension logs support (#3298)
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - Skip null characters from the head (#3117)
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver/)
      - Fix invalid read of get_stream() function (#3480)
      - Enable custom regex to parse local_resource_id for stackdriver meta labels (#3342)
      - Enable upstream configuration
   - [Loki (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/loki/)
      - Implement drop_single_key
      - Support new option tenant_id_key(#2935)
      - Change log level to suppress 200-205 status log (#3363)
   - [Splunk (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/splunk/)
      - New ```event_key``` option and fixes for raw mode
   - [Cloudwatch_Logs (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/cloudwatch_logs/)
      - Fix memory leak when using cpu or mem inputs (fluent#3145)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Takahiro Yamashita](https://github.com/nokute78)
- [Jeff Luo](https://github.com/JeffLuoo)
- [David Korczynski](https://github.com/DavidKorczynski)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Ade Fisher](https://github.com/adefisher)
- [JSJ](https://github.com/jsjeannotte)
- [Zero King](https://github.com/l2dy)
- [duanguoxue](https://github.com/duanguoxue)
- [Yu YI](https://github.com/erain)
- [Lionel Cons](https://github.com/LionelCons)
- [Igor Peshansky](https://github.com/igorpeshansky)
- [Eduardo Silva](https://github.com/edsiper)
- [Wesley Pettit](https://github.com/PettitWesley)
