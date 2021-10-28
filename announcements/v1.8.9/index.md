---
layout: documentation
title: Fluent Bit v1.8.9 - Release Notes
intro: Release Notes
---

# Release Notes v1.8.9

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.8.9__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## News

[Fluent Bit](https://fluentbit.io) v1.8.9 is the stable release!, new changes on this version:

 - Core
   - scheduler: fix back off full jitter calculation (#4239)
   - tests: runtime_shell: add testcase for issue #4190

 - Libraries
   - Chunk I/O: upgrade to v1.1.5
     - Fix checksum handling when caller writes at random positions
     - Be aware of checksum failures v/s normal chunk corruption

- Plugins
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - Avoid double free for multiline msgpack buffer
      - On Multiline handling, use file inode as stream_id (#4190)
   - [Node_Exporter_Metrics (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/node_exporter_metrics/)
      - Ensure zero with epsilon on double type factor
   - [Emitter (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/emitter/)
      - Write msgpack buffer directly, remove local queue (#4049)
   - [Rewrite_Tag (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/rewrite_tag/)
      - Prevent to emit original record when in_emit pauses
      - Abort when infinite loop setting
   - [Modify (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/modify/)
      - Change log level to suppress (#4210)
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/pipeline/filters/kubernetes/)
      - Expose metadata for internal usage
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver/)
      - Print warning message on error response
   - [Custom_Calyptia (Output)](https://docs.fluentbit.io/manual/administration/monitoring#calyptia-cloud)
      - Enable machine_id config property.
      - Enable add_label property. (#4176)
   - [Prometheus_Remote_Write (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/prometheus_remote_write/)
      - Add `add_label` support, so now you can add your custom labels.
   - [Calyptia (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/custom_calyptia/)
      - Expose Kubernetes basic metadata

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!


- [Jorge Niedbalski](https://github.com/niedbalski)
- [Hiroshi Hatake](https://github.com/cosmo0920)
- [Rayhan Hossain](https://github.com/hossain-rayhan)
- [Eduardo Silva](https://github.com/edsiper)
- [Takahiro Yamashita](https://github.com/nokute78)
- [Nikhil Lohia](https://github.com/nikoo28)
- [Jeff Luo](https://github.com/JeffLuoo)
