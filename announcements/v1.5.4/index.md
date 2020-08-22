---
layout: documentation
version: v1.5.4
title: Fluent Bit v1.5.4 - Release Notes
intro: Release Notes
---

# Release Notes {{ page.version }}

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit {{ page.version }}__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- [https://docs.fluentbit.io/manual/installation/upgrade_notes](https://docs.fluentbit.io/manual/installation/upgrade_notes)

<br>
## Changes

[Fluent Bit](https://fluentbit.io) {{ page.version }} is the next patch release on v1.5 series and comes with the following changes:

<br>
### List of general changes

 - Core
   - core: flb_scheduler fix for macOS (#2463)
   - record accessor: fix undefined behavior on error (#2452)
   - record accessor: fix crashes when ra_key_val_id() is passed a non-map (#2456)

 - Plugins
   - [Winlog (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/winlog/)
      - Bring back the 'eventid' field (#2461)
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver/)
      - Make out_stackdriver compilable with msvc (#2453)
      - Support dot '.' in tag_prefix option  (#2468)
   - [Cloudwatch_Logs (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/cloudwatch_logs/)
      - Replace insecure sprintf (#2451)
   - [Splunk (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/splunk/)
      - Avoid retries for requests we know will fail (#2458)
      - Fix crashes when passed non-array input data (#2457)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [Aaron Jacobs](https://github.com/atheriel)
- [Jukka Pihl](https://github.com/bluebike)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Zero King](https://github.com/l2dy)
- [Eduardo Silva](https://github.com/edsiper)
- [Jeff Luo](https://github.com/JeffLuoo)
