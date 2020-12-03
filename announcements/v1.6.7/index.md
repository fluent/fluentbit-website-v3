---
layout: documentation
version: v1.6.7
title: Fluent Bit v1.6.7 - Release Notes
intro: Release Notes
---

# Release Notes v1.6.7

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.6.7__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

- <a href="https://docs.fluentbit.io/manual/installation/upgrade_notes">https://docs.fluentbit.io/manual/installation/upgrade_notes</a>

<br>

## Give us Feedback!

Dear user, we would love to learn more about your journey using Fluentd / Fluent Bit, if you want to give us some useful feedback please fill the __1 minute__ community survey to help us understand your challenges and overall feedback:

- <a href="https://www.cognitoforms.com/Fluentecosystem/FluentEcosystemSurvey">https://www.cognitoforms.com/Fluentecosystem/FluentEcosystemSurvey</a>

If you are able to give us more than 1 minute of your time, let us know in the form so we can contact you back!

<br>
## Changes

[Fluent Bit](https://fluentbit.io) v1.6.7 is the minor release on 1.6 that comes with the following changes:

 - Core
   - socket: fix error socket status check (#2826 #2827)
   - input_chunk: Update tag value extraction for backoff logs (#2806)
   - parser: Add a new option ```time_strict``` (#2813)
   - aws: ECS comes before EC2 in standard chain
   - json parser: Fix null-dereference (oss-fuzz 27764)
   - input: fix socket error during shutdown on Windows (#2812)
   - pack gelf: remove uninvited newline
   - pack gelf: fix stack buffer overflow on temp variable (oss-fuzz 26237)
   - record accessor: fix multiple NULL dereferences (oss-fuzz 27234)
   - signv4: fix write heap-overflow (oss-fuzz 27710)

 - Plugins
   - [HTTP (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/http/)
      - Do not debug proxy if not enabled
   - [Gelf (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/gelf/)
      - Accept possible level values (#2257)
   - [Biquery (Output)](https://docs.fluentbit.io/manual/pipeline/outputs/biquery/)
      - Should not discard the last character of URL (#2731)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Fujimoto Seiji](https://github.com/fujimotos)
- [Wesley Pettit](https://github.com/PettitWesley)
- [Eduardo Silva](https://github.com/edsiper)
- [Jeff Luo](https://github.com/JeffLuoo)
- [Jevgeni Marenkov](https://github.com/jevgenimarenkov)
- [Mohammad Ali Toufighi](https://github.com/alitoufighi)
- [David Korczynski](https://github.com/DavidKorczynski)
