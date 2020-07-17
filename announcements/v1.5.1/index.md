---
layout: documentation
version: v1.5.1
title: Fluent Bit v1.5.1 - Release Notes
intro: Release Notes
---

# Release Notes {{ page.version }}

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit {{ page.version }}__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- [https://docs.fluentbit.io/manual/installation/upgrade_notes](https://docs.fluentbit.io/manual/installation/upgrade_notes)

<br>
## Changes

[Fluent Bit](https://fluentbit.io) {{ page.version }} is the next patch release on v1.4 series and comes with the following changes:

<br>
### List of general changes

 - Plugins
   - [Forward (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/forward/)
      - Improve handling of 'options' protocol field to bring compatibility with old Docker 18.x (#2355)
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - Now the ```path``` property supports multiple patterns separated by comma (#1508)
   - [HTTP (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/http/)
      - Do not print payload on success if not set (#2358)
   - [New Relic (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/nrlogs/)
      - Wrap payload output in an array to match the new API

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [Fujimoto Seiji](https://github.com/fujimotos)
- [Julian Giuca](https://github.com/juliangiuca)
- [Eduardo Silva](https://github.com/edsiper)
