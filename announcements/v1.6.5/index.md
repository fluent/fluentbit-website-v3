---
layout: documentation
version: v1.6.5
title: Fluent Bit v1.6.5 - Release Notes
intro: Release Notes
---

# Release Notes v1.6.5

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.6.5__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- <a href="https://docs.fluentbit.io/manual/installation/upgrade_notes">https://docs.fluentbit.io/manual/installation/upgrade_notes</a>

<br>

## Give us Feedback!

Dear user, we would love to learn more about your journey using Fluentd / Fluent Bit, if you want to give us some useful feedback please fill the __1 minute__ community survey to help us understand your challenges and overall feedback:

- <a href="https://www.cognitoforms.com/Fluentecosystem/FluentEcosystemSurvey">https://www.cognitoforms.com/Fluentecosystem/FluentEcosystemSurvey</a>

If you are able to give us more than 1 minute of your time, let us know in the form so we can contact you back!

<br>
## Changes

[Fluent Bit](https://fluentbit.io) v1.6.5 is the minor release on 1.6 that comes with the following changes:

 - Core
   - engine: manage output events from independent channel (#2661)
   - input_chunk: update bytes counter for backoff logs (#2771)
   - scheduler: fix problem with SIGSEGV on FreeBSD 12+ (#2781)
   - lib: libco: sync changes for FreeBSD and non-gcc compilers
   - aws: credentials: add support for EKS_POD_EXECUTION_ROLE

 - Plugins
   - [Forward (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/forward/)
      - Add ```compress``` option for gzip compression (#2773)
   - [Stackdriver (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver/)
      - Add trace and custom log name support (#2683)
   - [Loki (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/loki/)
      - New 'line_format' option, values: ```json``` (default), ```key_value``` (#2711)
      - Sanitize labels key names (#2793)
      - Add support for basic auth: ```http_user``` and ```http_passwd```
   - [Syslog (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/syslog/)
      - Fix ```maxsize``` value handling
   - [Cloudwatch_Logs (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/cloudwatch_logs/)
      - Add ```extra_user_agent``` option

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Eduardo Silva](https://github.com/edsiper)
- [Jim Minter](https://github.com/jim-minter)
- [Palle Girgensohn](https://github.com/girgen)
- [tpetrov-lp](https://github.com/tpetrov-lp)
- [Zhonghui Hu](https://github.com/zhonghui12)
- [Wesley Pettit](https://github.com/PettitWesley)
- [Jeff Luo](https://github.com/JeffLuoo)
