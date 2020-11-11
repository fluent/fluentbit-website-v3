---
layout: documentation
version: v1.6.4
title: Fluent Bit v1.6.4 - Release Notes
intro: Release Notes
---

# Release Notes v1.6.4

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.6.4__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>

## Give us Feedback!

Dear user, we would love to learn more about your journey using Fluentd / Fluent Bit, if you want to give us some useful feedback please fill the __1 minute__ community survey to help us understand your challenges and overall feedback:

- https://www.cognitoforms.com/Fluentecosystem/FluentEcosystemSurvey

If you are able to give us more than 1 minute of your time, let us know in the form so we can contact you back!

## Changes

[Fluent Bit](https://fluentbit.io) v1.6.4 is the minor release on 1.6 that comes with the following changes:

 - Core
   - http_client: use HTTP_PROXY environment varialble for proxy globally
   - io: fix flb_io_net_connect only opening sync connections (#2750)
   - lib: use context status to monitor thread
   - parser: fix to ensure string size is enough for comparison (oss-fuzz testcase 5200866812100608)
   - parser: ensure proper string null-termination (oss-fuzz 26327)
   - parser: fix insecure string pass (oss-fuzz 26325)
   - hash: fix null-derefence by ensure id is within size (oss-fuzz test case 5672848712269824)
   - utils: fix case of empty string in time to sec conversion (oss-fuzz 26593)
   - utils: fix bad handling of utf-8 parsing (oss-fuzz 26304)
   - config_map: fix cases where kv->val is NULL (oss-fuzz issue 27023)
   - strptime: fix bounds check (oss-fuzz 27241)
   - gzip: fix compression size calculation (oss-fuzz 27261)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!

- [Eduardo Silva](https://github.com/edsiper)
- [David Korczynski](https://github.com/DavidKorczynski)
- [Yu Yi](https://github.com/erain)
- [hsmatulisgoogle](https://github.com/hsmatulisgoogle)
- [Fujimoto Seiji](https://github.com/fujimotos)
