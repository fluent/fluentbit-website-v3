---
layout: documentation
version: v1.5.5
title: Fluent Bit v1.5.5 - Release Notes
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
   - engine: do upstream cleanup after the event loop finished processing events (#2497)
   - io: fix EINPROGRESS check, also check that errno is not zero (#2497)
   - aws: utils: fix mem leak in flb_imds_request (#2532)
   - upstream: new 'destroy_queue' to defer connections context destroy (#2497)

 - Plugins
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - Move all database queries to prepared statements (#2030)
   - [Exec (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/exec/)
      - Fix logging crash
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver/)
      - Parse tag that matches kubernetes default regex
      - Fix header guard

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
- [Wesley Pettit](https://github.com/PettitWesley)
- [yang-padawan](https://github.com/yang-padawan)
- [Jeff Luo](https://github.com/JeffLuoo)
