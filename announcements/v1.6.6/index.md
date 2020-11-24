---
layout: documentation
version: v1.6.6
title: Fluent Bit v1.6.6 - Release Notes
intro: Release Notes
---

# Release Notes v1.6.6

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.6.6__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- <a href="https://docs.fluentbit.io/manual/installation/upgrade_notes">https://docs.fluentbit.io/manual/installation/upgrade_notes</a>

<br>

## Give us Feedback!

Dear user, we would love to learn more about your journey using Fluentd / Fluent Bit, if you want to give us some useful feedback please fill the __1 minute__ community survey to help us understand your challenges and overall feedback:

- <a href="https://www.cognitoforms.com/Fluentecosystem/FluentEcosystemSurvey">https://www.cognitoforms.com/Fluentecosystem/FluentEcosystemSurvey</a>

If you are able to give us more than 1 minute of your time, let us know in the form so we can contact you back!

<br>
## Changes

[Fluent Bit](https://fluentbit.io) v1.6.6 is the minor release on 1.6 that comes with the following changes:

 - Core
   - output: plugins now uses an independent channel for events (#2661)
   - engine: fix the out-of-order issue when there is task retry in non-multiplex mode (#2777)
   - log: allow log level to be 'warn' and 'warning' (#2492)
   - win32: use SERVICE_WIN32_OWN_PROCESS for dwServiceType (#2788)

 - Plugins
   - [Tail (Input)](https://docs.fluentbit.io/manual/pipeline/inputs/tail/)
      - Dockermode: flush pending data on static files at exit (#2668)
      - Multiline: flush pending data on static files at exit (#2668)
   - [S3 (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/s3/)
      - Add support for Canned ACL

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Eduardo Silva](https://github.com/edsiper)
- [Zhonghui Hu](https://github.com/zhonghui12)
- [zhanghjster](https://github.com/zhanghjster)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Wesley Pettit](https://github.com/PettitWesley)
