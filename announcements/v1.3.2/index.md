---
layout: documentation
version: v1.3.2
title: Fluent Bit v1.3.2 - Release Notes
intro: Release Notes
---

# Release Notes v1.3.2

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.3.2__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## Changes

[Fluent Bit](https://fluentbit.io) v1.3.2 is the next patch release on v1.3 series and comes with the following changes:

<br>
### List of general changes

 - Core
   - ci: travis: enable tests on arm64v8 architecture!
   - utils: avoid overflowing string buffer in flb_utils_write_str() (#1633)
   - debian: register configuration files (#1619)

 - Plugins
   - [Stdin (Input)](https://docs.fluentbit.io/manual/input/stdin/)
      - Fix handling of invalid payload (msvr 47959)
   - [Forward (Output)](https://docs.fluentbit.io/manual/output/forward/)
      - Try authenticate with empty username/password by default (#1616)
   - [Kafka (Output)](https://docs.fluentbit.io/manual/output/kafka/)
      - Fix initialising wrong variables for message_key (#1635)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Nick Brown](https://github.com/nickbroon)
- [Takahiro YAMASHITA](https://github.com/nokute78)
- [Valerian Pereira](https://github.com/valerianpereira)
