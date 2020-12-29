---
layout: documentation
version: v1.6.9
title: Fluent Bit v1.6.9 - Release Notes
intro: Release Notes
---

# Release Notes v1.6.9

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.6.9__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- <a href="https://docs.fluentbit.io/manual/installation/upgrade_notes">https://docs.fluentbit.io/manual/installation/upgrade_notes</a>

<br>

## Give us Feedback!

Dear user, we would love to learn more about your journey using Fluentd / Fluent Bit, if you want to give us some useful feedback please fill the __1 minute__ community survey to help us understand your challenges and overall feedback:

- <a href="https://www.cognitoforms.com/Fluentecosystem/FluentEcosystemSurvey">https://www.cognitoforms.com/Fluentecosystem/FluentEcosystemSurvey</a>

If you are able to give us more than 1 minute of your time, let us know in the form so we can contact you back!

<br>
## Changes

[Fluent Bit](https://fluentbit.io) v1.6.9 is the minor release on 1.6 that comes with the following changes:

 - Core
   - lib: monkey: sync sched thread destroy fix

 - Plugins
   - [S3 (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/s3/)
      - Fix '\0' assignment
      - Do not use ':' in stream names on windows (#2855)
   - [Kafka (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/kafka/)
      - Check only for first val.via.str.size chars (#2845)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Fujimoto Seiji](https://github.com/fujimotos)
- [Zero King](https://github.com/l2dy)
- [Eduardo Silva](https://github.com/edsiper)
- [Giedrius Statkevičius](https://github.com/GiedriusS)
