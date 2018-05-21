---
layout: documentation
version: v0.13.2
title: Fluent Bit v0.13.2 - Release Notes
intro: Release Notes
---

# Release Notes v0.13.2

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v0.13.2__.

## Changes

This is a minor fix release over 0.13 series that includes the following changes:

- Core
    - Parser: fix apache2 regex to allow quotes in User Agent.
- Plugins
  - Input
      - [Systemd](http://fluentbit.io/documentation/0.13/input/systemd.html): fix calculation of nanosecond in timestamp.

  - Filter
      - [Nest](http://fluentbit.io/documentation/0.13/filter/nest.html): new filter to handle nested key/values.
      - [Modify](http://fluentbit.io/documentation/0.13/filter/modify.html): new filter to change records content.
      - [Kubernetes](http://fluentbit.io/documentation/0.13/filter/kubernetes.html): fix memory leak when messages coming from Journal are not associated with k8s.

  - Output
      - [HTTP](http://fluentbit.io/documentation/0.13/output/http.html): new feature tp pass _Tag_ dynamically in request header.
      - [HTTP](http://fluentbit.io/documentation/0.13/output/http.html): new _json\_lines_ format, when enabled it adds Loggly support.
      - [HTTP](http://fluentbit.io/documentation/0.13/output/http.html): new _ISO8601_ format support for JSON data

## Contributors

We would like to thanks to the following people who have been involved doing coding, bug fixes, troubleshooting, documentation, reporting issues and general contributions on this release:


- [Michiel Kalkman](https://github.com/michiel)
- [Mike Kaplinskiy](https://github.com/mikekap)
- [Brandon Cole](https://github.com/brandoncole)
- [Stefan Reimer](https://github.com/Quarky9)
- [Brava-Vinh](https://github.com/brava-vinh)
- [Gavrie Philipson](https://github.com/gavrie)
- [Bryan Boreham](https://github.com/bboreham)
- [Eduardo Silva](https://github.com/edsiper)
