---
layout: documentation
version: v1.3.1
title: Fluent Bit v1.3.1 - Release Notes
intro: Release Notes
---

# Release Notes v1.3.1

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.3.1__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>
## Changes

[Fluent Bit](https://fluentbit.io) v1.3.1 is the next patch release on v1.3 series and comes with the following changes:

<br>
### Kubernetes Filter

In the recent release of v1.3.0, the community reported a TLS connectivity problem when Fluent Bit connected to the API Server. The root cause of the problem was a wrong function prototype in the TLS context creation function that when the invoked, lead to undefined behavior due to the parameters received.

<br>
### List of general changes

 - Core
   - io: tls: fix context creation prototype that generated TLS connectivity issues (#1611)
   - bitbake: fix compile error with wrong DEPENDS and fix packaging error with wrong systemd service file (#1606)
   - init: systemd: do not prefix configuration file path (#1610)

 - Plugins
   - [Kubernetes (Filter)](https://docs.fluentbit.io/manual/filter/kubernetes/)
      - Skip TLS SNI vhost option
   - [Datadog (Output)](https://docs.fluentbit.io/manual/output/datadog/)
      - Fix variable declaration that broke builds in some environments

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

Since the list grows every time, it's hard to mention every single person involved. In a best effort possible, we are mentioning people who have signed contributions in our GIT project history through commits. We would like to thanks to the following people who have been involved doing coding, bug fixes, documentation and general contributions on this release:

- [Eduardo Silva](https://github.com/edsiper)
- [Mario Marín](https://github.com/mariomarin)
- [ghostylee](https://github.com/ghostylee)
