---
layout: documentation
version: v1.6.10
title: Fluent Bit v1.6.10 - Release Notes
intro: Release Notes
---

# Release Notes v1.6.10

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.6.10__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- <a href="https://docs.fluentbit.io/manual/installation/upgrade_notes">https://docs.fluentbit.io/manual/installation/upgrade_notes</a>

<br>

## Give us Feedback!

Dear user, we would love to learn more about your journey using Fluentd / Fluent Bit, if you want to give us some useful feedback please fill the __1 minute__ community survey to help us understand your challenges and overall feedback:

- <a href="https://www.cognitoforms.com/Fluentecosystem/FluentEcosystemSurvey">https://www.cognitoforms.com/Fluentecosystem/FluentEcosystemSurvey</a>

If you are able to give us more than 1 minute of your time, let us know in the form so we can contact you back!

<br>
## Changes

[Fluent Bit](https://fluentbit.io) v1.6.10 is the minor release on 1.6 that comes with the following changes:

 - Core
   - fstore: fix wrong data type and missing initialization of structure (#2909)
   - fstore: force usage of stream name (#2909)
   - strptime: fix data type size
   - network: fix connection error check in Windows (#2895)

 - Plugins
   - [S3 (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/s3/)
      - Fix multipart upload cache parsing (#2911)
      - S3 store: only store upload metadata once
      - auto-set putobject api when total file size is below the min size for multipart
      - Add content options
   - [Kafka (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/kafka/)
      - Prevent segfault in error path (#2890)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Wesley Pettit](https://github.com/PettitWesley)
- [Giedrius Statkevičius](https://github.com/GiedriusS)
- [xmcqueen](https://github.com/xmcqueen)
- [Fujimoto Seiji](https://github.com/fujimotos)
- [Eduardo Silva](https://github.com/edsiper)
