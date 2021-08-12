---
layout: post
title:  "Fluent Bit Operator becomes an official sub-project of the Fluent Community!"
date:   2021-08-12
categories: cloudnative logging news
author: Feynman Zhou(https://github.com/FeynmanZhou)
---

# Fluent Bit Operator becomes an official sub-project of the Fluent Community!

[Fluent Bit Operator](https://github.com/fluent/fluentbit-operator) is the only existing operator which facilitates the deployment of [Fluent Bit](https://fluentbit.io/) and provides great flexibility in building a logging layer based on Fluent Bit and Kubernetes. With a dedicated observability team at [KubeSphere](https://kubesphere.io) created this project, multiple maintainers from [DigitalOcean](https://www.digitalocean.com/) and other organizations have been maintaining it for almost three years and delivered 12 major releases, today we are glad to announce that Fluent Operator has become an official sub-project of the Fluent Community!

## Why Fluent Bit Operator

As the dynamic configuration reloading without restart is not supported in Fluent Bit and it [has been asked in the community](https://github.com/fluent/fluent-bit/issues/365) for several years, the KubeSphere team initiated the Fluent Bit Operator to enable Fluent Bit to pick up and use the latest config whenever the Fluent Bit config changes without restarting the Fluent Bit Pod. 

As a Kubernetes-native solution for Fluent system, Fluent bit Operator gracefully solved the dynamic config reloading issue of Fluent Bit. This makes things easier to use Fluent Bit as a log collection agent in Kubernetes in a Kubernetes native way. Fluent Bit Operator bridges the gap between Fluent Bit and Kubernetes, it provides the following features:

- Fluent Bit Management: Deploy and destroy Fluent Bit DaemonSet automatically.
- Custom Configuration: Select input/filter/output plugins via labels.
- Dynamic Reloading: Update configuration without rebooting Fluent Bit pods.

![fluentbit-operator-workflow](/assets/img/blog/2021-08-12-fluentbit-operator/fluentbit-operator-workflow.png){:class="img-responsive"}

## Evolving to the Fluent Operator

Sometimes, Fluentd is still needed as an optional sink to aggregate logs received from Fluent Bit, then filter and forward logs to more destinations. So we are working with adding Fluentd CRDs to Fluent Bit Operator and [rename the project to Fluent Operator](https://github.com/fluent/fluentbit-operator/issues/68), it will help the Fluent Bit and Fluentd to establish a more powerful Kubernetes-native log processing pipeline. 

You can check out the proposal of [adding Fluentd to Fluent Operator as an optional log aggregation and forwarding layer](https://hackmd.io/7-CCpsJDQ52hXtfBM6X30Q?view=) if you are interested in this evolution. 

![fluent-operator](/assets/img/blog/2021-08-12-fluentbit-operator/fluent-operator.png){:class="img-responsive"}

## Embracing the Fluent community and global developers

Fluent Bit Operator is currently a vendor-neutral and 100% community-driven project. We truly believe that the active community engagement will result in significant improvements to Fluent Bit Operator, as well as the Fluent ecosystem itself.

You are welcome to create issues and pull requests. We are actively resolving community issues, host community meetings, and providing answers on a dedicated [Slack channel](https://fluent-all.slack.com/archives/C02642TE9HR).

If you still haven’t used Fluent Bit Operator, you’re welcome to try it now by following the [quick start](https://github.com/fluent/fluentbit-operator#install). Let's discover more simplicity of running Fluent Bit Operator on Kubernetes.