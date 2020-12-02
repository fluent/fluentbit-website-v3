---
layout: post
title:  "Cloud Native Logging"
date:   2017-06-27
categories: cloudnative logging news
author: eduardo
---

> The original draft post about Fluent Bit while back in 2017...

Logging is something that we have to deal with everyday, from the different components available in production is not the most fun area, but something that needs to be done right to perform proper analysis of applications behavior.

In the `Cloud Native` era, managing things at scale requires special handling and focus on performance and resources usage; logging is not the exception.

By it nature Logging _is_ expensive: capture, parsing and filtering strings have it complexity and shipping (forward) these logs to a backend like a database have it own costs. For this kind of scenario specialized and customizable tools are always required.

[Fluent Bit](https://fluentbit.io) is a [Cloud Native Computing Foundation (CNCF)](http://cncf.io) sub-project under the umbrella of Fluentd. Our primary focus are containerized environments and have built-in extensions to solve logging in Docker and Kubernetes deployments within other features like:

- Gather log messages from: tailing files, Systemd, TCP, Serial Interface, Syslog, etc.
- Handle unstructured messages, built-in JSON and Regex parsing.
- Filter log entries by patterns or enrich them with specific Metadata.
- Route and forward logs to databases like Elasticsearch, InfluxDB and HTTP end-points within others.

In addition to the features to handle the logging workflow ([pipeline](https://docs.fluentbit.io/manual/concepts/data-pipeline)), it comes with specific implementations to manage [Security](https://docs.fluentbit.io/manual/administration/security), [Buffering & Storage](https://docs.fluentbit.io/manual/administration/buffering-and-storage) and internal optimizations to reduce memory and CPU usage.
