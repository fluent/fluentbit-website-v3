---
layout: post
title:  "Cloud Native Logging"
date:   2017-06-27
categories: cloudnative logging news
---

Logging is something that we have to deal with everyday, from the different components availables in production is not the most fun area, but something that needs to be done right to perform proper analysis of applications behavior.

In the `Cloud Native` era managing things at scale requires special handling and focus on performance and resources usage; logging is not the exception.

By it nature Logging _is_ expensive: capture, parsing and filtering strings have it complexity and shipping (forward) these logs to a backend like a database have it own costs. For this kind of scenario specialized and customizable tools are always required.

[Fluent Bit](http://fluentbit.io) is an open source project made and sponsored by [Treasure Data](https://www.treasuredata.com) and is part of the [Fluentd project](http://www.fluentd.org) ecosystem, hosted under the [Cloud Native Computing Foundation (CNCF)](http://cncf.io).

Fluent Bit primary focus are containerized environments and have built-in extensions to solve logging in Docker and Kubernetes deployments within other features like:

- Gather log messages from: tailing files, Systemd, TCP, Serial Interface, Syslog, etc.
- Handle unstructured messages, built-in JSON and Regex parsing.
- Filter log entries by patterns or enrich them with specific Metadata.
- Route and forward logs to databases like Elasticsearch, InfluxDB and HTTP end-points within others.

In addition to the features to handle the logging workflow ([pipeline](http://fluentbit.io/documentation/0.11/getting_started/)), it comes with specific implementations to manage [Security](http://fluentbit.io/documentation/0.11/configuration/tls_ssl.html), [Backpressure](http://fluentbit.io/documentation/0.11/configuration/backpressure.html) and internal optimizations to reduce memory and CPU usage.
