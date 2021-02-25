---
layout: post
title:  "Diagtool for Fluent Bit is ready"
date:   2021-01-17
categories: cloudnative logging news
author: TK-Kubota(https://github.com/kubotat)
---

Diatool now supports “[Fluent Bit](https://www.fluentbit.io/)”! Tool was just released as v.1.0, and now you can automate your troubleshooting process for both Fluentd and Fluent Bit.

# Fluentd vs Fluent Bit

Fluent Bit is an open source and multi-platform Log Processor and Forwarder. Both Fluentd and Fluent Bit have been developed by Treasure Data to solve the data collection problem but they have different features. Fluent Bit is light-weight and less dependencies compared to Fluentd, so that Fluent Bit is good for the environment where the system resource for applications are limited such as container and IoT use cases.
The following table describe a comparison of features between Fluentd and Fluent Bit. 

|      | Fluentd | Fluent Bit |
| ----------- | ----------- | ----------- |
| Scope     | Containers / Servers     |Embedded Linux / Containers / Servers     |
| Language   | C & Ruby       |C      |
| Memory   | ~40MB       |~650MB       |
| Dependencies   | Built as a Ruby Gem, it requires a certain number of gems.     |Zero dependencies, unless some special plugin requires them.      |
| Plugins   |More than 1000 plugins available      |Around 70 plugins available   |

# How Diagtool works for Fluent Bit

Fluentd and Fluent Bit have similar concepts, both have pluggable input and output modules and data process functions, however the format of configuration is not same.  Diatool version 1.0 was released and now Diagtool is able to interpret the configuration of Fluent Bit and gather/validate required information as well as Fluentd.  The new option ‘—type/-t‘ enables you to switch Fluentd and Fluent Bit. Here is sample usage of Diagtool for Fluent Bit.  


## Run Pre-Check

Before running the main function of Diagtool, we recommend you to run precheck with ‘-t’ option to make sure if Diagtool could work in your environment. When you run td-agent-bit packaged Fluent Bit, the configuration information is stored under ‘/etc/td-agent-bit‘ directory and the log information is stored in ‘stdout’. When you build Fluent Bit from source code, you can specify the configuration file path with ‘-c‘ and the log file path with ‘-l’ option respectively. 

```
# diagtool --precheck -t fluentbit
2020-10-19 06:03:38 +0000: [Collectutils] [WARN] FluentBit logs are redirected to the standard output interface
2020-10-19 06:03:38 +0000: [Diagtool] [INFO] [Precheck] Fluentd Type = fluentbit
2020-10-19 06:03:38 +0000: [Diagtool] [INFO] [Precheck] Check OS parameters...
2020-10-19 06:03:38 +0000: [Diagtool] [INFO] [Precheck] operating system = Ubuntu 20.04.1 LTS
2020-10-19 06:03:38 +0000: [Diagtool] [INFO] [Precheck] kernel version = Linux 5.4.0-1024-gcp
2020-10-19 06:03:38 +0000: [Diagtool] [INFO] [Precheck] Check td-agent parameters...
2020-10-19 06:03:38 +0000: [Diagtool] [INFO] [Precheck] td-agent conf path = /etc/td-agent-bit/
2020-10-19 06:03:38 +0000: [Diagtool] [INFO] [Precheck] td-agent conf file = td-agent-bit.conf
2020-10-19 06:03:38 +0000: [Diagtool] [INFO] [Precheck] td-agent log path =
2020-10-19 06:03:38 +0000: [Diagtool] [INFO] [Precheck] td-agent log =
2020-10-19 06:03:38 +0000: [Diagtool] [WARN] [Precheck] can not find td-agent log path: please run diagtool command with -l /path/to/
```

## Run Diagtool

Once the pre-check is completed, you are ready to run the tool. When you use Fluent Bit, please specify the ‘fluentbit‘ in ‘-t‘ option as well as pre-check.  

```
# diagtool -t fluentbit -o /tmp/
2020-10-19 06:21:35 +0000: [Diagtool] [INFO] Parsing command options...
2020-10-19 06:21:35 +0000: [Diagtool] [INFO] Option : Output directory = /tmp/
2020-10-19 06:21:35 +0000: [Diagtool] [INFO] Option : Mask = no
2020-10-19 06:21:35 +0000: [Diagtool] [INFO] Option : Word list = []
2020-10-19 06:21:35 +0000: [Diagtool] [INFO] Option : Hash Seed =
2020-10-19 06:21:35 +0000: [Diagtool] [INFO] Initializing parameters...
2020-10-19 06:21:35 +0000: [Collectutils] [WARN] FluentBit logs are redirected to the standard output interface
2020-10-19 06:21:35 +0000: [Diagtool] [INFO] [Collect] Loading the environment parameters...
2020-10-19 06:21:35 +0000: [Diagtool] [INFO] [Collect] operating system = Ubuntu 20.04.1 LTS
2020-10-19 06:21:35 +0000: [Diagtool] [INFO] [Collect] kernel version = Linux 5.4.0-1024-gcp
2020-10-19 06:21:35 +0000: [Diagtool] [INFO] [Collect] td-agent conf path = /etc/td-agent-bit/
2020-10-19 06:21:35 +0000: [Diagtool] [INFO] [Collect] td-agent conf file = td-agent-bit.conf
2020-10-19 06:21:35 +0000: [Diagtool] [INFO] [Collect] td-agent log path =
2020-10-19 06:21:35 +0000: [Diagtool] [INFO] [Collect] td-agent log =
2020-10-19 06:21:35 +0000: [Diagtool] [INFO] [Collect] Collecting log files of td-agent...
2020-10-19 06:21:35 +0000: [Diagtool] [INFO] [Collect] Collecting config file of td-agent...
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] config file is stored in ["/tmp//20201019062135/etc/td-agent-bit/td-agent-bit.conf", "/tmp//20201019062135/etc/td-agent-bit/parser_test.conf", "/tmp//20201019062135/etc/td-agent-bit/plugins.conf"]
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] Collecting td-agent gem information...
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] td-agent gem information is stored in /tmp//20201019062135/output/tdgem_list.output
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] Collecting config file of OS log...
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] config file is stored in /tmp//20201019062135/var/log/syslog
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] Collecting date/time information...
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] date/time information is stored in /tmp//20201019062135/output/chronyc_sources.txt
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] Collecting command output : command = ps -eo pid,ppid,stime,time,%mem,%cpu,cmd
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] Collecting command output ps stored in /tmp//20201019062135/output/ps_-eo_pid_ppid_stime_time_%mem_%cpu_cmd.txt
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] Collecting command output : command = cat /proc/meminfo
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] Collecting command output cat stored in /tmp//20201019062135/output/cat_-proc-meminfo.txt
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] Collecting command output : command = netstat -plan
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] Collecting command output : command = netstat -s
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] Collecting systctl information...
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] sysctl information is stored in /tmp//20201019062135/output/sysctl_-a.txt
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Valid] Validating systctl information...
2020-10-19 06:21:36 +0000: [Validutils] [WARN] net_core_netdev_max_backlog => 1000 is incorrect, should be 5000
2020-10-19 06:21:36 +0000: [Validutils] [WARN] net_core_rmem_max => 212992 is incorrect, should be 16777216
2020-10-19 06:21:36 +0000: [Validutils] [WARN] net_core_somaxconn => 4096 is incorrect, should be 1024
2020-10-19 06:21:36 +0000: [Validutils] [WARN] net_core_wmem_max => 212992 is incorrect, should be 16777216
2020-10-19 06:21:36 +0000: [Validutils] [WARN] net_ipv4_ip_local_port_range => ["32768", "60999"] is incorrect, should be ["10240", "65535"]
2020-10-19 06:21:36 +0000: [Validutils] [WARN] net_ipv4_tcp_max_syn_backlog => 128 is incorrect, should be 8096
2020-10-19 06:21:36 +0000: [Validutils] [WARN] net_ipv4_tcp_rmem => ["4096", "131072", "6291456"] is incorrect, should be ["4096", "12582912", "16777216"]
2020-10-19 06:21:36 +0000: [Validutils] [WARN] net_ipv4_tcp_slow_start_after_idle => 1 is incorrect, should be 0
2020-10-19 06:21:36 +0000: [Validutils] [WARN] net_ipv4_tcp_tw_reuse => 2 is incorrect, should be 1
2020-10-19 06:21:36 +0000: [Validutils] [WARN] net_ipv4_tcp_wmem => ["4096", "16384", "4194304"] is incorrect, should be ["4096", "12582912", "16777216"]
2020-10-19 06:21:36 +0000: [Diagtool] [WARN] [Valid] Sysctl: net_core_netdev_max_backlog => 1000 is incorrect (recommendation is 5000)
2020-10-19 06:21:36 +0000: [Diagtool] [WARN] [Valid] Sysctl: net_core_rmem_max => 212992 is incorrect (recommendation is 16777216)
2020-10-19 06:21:36 +0000: [Diagtool] [WARN] [Valid] Sysctl: net_core_somaxconn => 4096 is incorrect (recommendation is 1024)
2020-10-19 06:21:36 +0000: [Diagtool] [WARN] [Valid] Sysctl: net_core_wmem_max => 212992 is incorrect (recommendation is 16777216)
2020-10-19 06:21:36 +0000: [Diagtool] [WARN] [Valid] Sysctl: net_ipv4_ip_local_port_range => ["32768", "60999"] is incorrect (recommendation is ["10240", "65535"])
2020-10-19 06:21:36 +0000: [Diagtool] [WARN] [Valid] Sysctl: net_ipv4_tcp_max_syn_backlog => 128 is incorrect (recommendation is 8096)
2020-10-19 06:21:36 +0000: [Diagtool] [WARN] [Valid] Sysctl: net_ipv4_tcp_rmem => ["4096", "131072", "6291456"] is incorrect (recommendation is ["4096", "12582912", "16777216"])
2020-10-19 06:21:36 +0000: [Diagtool] [WARN] [Valid] Sysctl: net_ipv4_tcp_slow_start_after_idle => 1 is incorrect (recommendation is 0)
2020-10-19 06:21:36 +0000: [Diagtool] [WARN] [Valid] Sysctl: net_ipv4_tcp_tw_reuse => 2 is incorrect (recommendation is 1)
2020-10-19 06:21:36 +0000: [Diagtool] [WARN] [Valid] Sysctl: net_ipv4_tcp_wmem => ["4096", "16384", "4194304"] is incorrect (recommendation is ["4096", "12582912", "16777216"])
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] Collecting ulimit information...
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] ulimit information is stored in /tmp//20201019062135/output/sh_-c_'ulimit_-n'.txt
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Valid] Validating ulimit information...
2020-10-19 06:21:36 +0000: [Validutils] [WARN] ulimit => 1024 is incorrect, should be 65535
2020-10-19 06:21:36 +0000: [Diagtool] [WARN] [Valid] ulimit => 1024 is incorrect (recommendation is >65535)
2020-10-19 06:21:36 +0000: [Diagtool] [INFO] [Collect] Generate tar file /tmp//diagout-20201019062135.tar.gz
```

## Conclusion
Fluentd and Fluent Bit are powerful and flexible applications that you can use as part of your data, observability, and security pipelines. Knowing more about common architecture patterns can help you make your decision to deploy Fluentd and Fluent Bit.

We invite you to discuss these architecture patterns further with us in the [Fluent Slack channel](https://slack.fluentd.org/), GitHub, or even email. 
