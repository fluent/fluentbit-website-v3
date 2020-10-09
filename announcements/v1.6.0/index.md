---
layout: documentation
version: v1.6.0
title: Fluent Bit v1.6.0 - Release Notes
intro: Release Notes
---

# Release Notes v1.6

[Fluent Bit](http://fluentbit.io) is a Fast and Lightweight Data Processor and Forwarder for Linux, BSD and OSX. We are proud to announce the availability of __Fluent Bit v1.6__.

For people upgrading from previous versions you __must read__ the Upgrading Notes section of our documentation:

https://docs.fluentbit.io/manual/installation/upgrade_notes

<br>

## Changes

[Fluent Bit](https://fluentbit.io) v1.6 is the next major release and include several improvements:

### Community Updates

Fluent Bit v1.6 release comes with exciting news from the community. The number of Cloud providers and end-users adopting and contributing back to Fluent Bit is continuously increasing, this is totally reflected into the project quality and new feature sets:

<center>
    <img width="75%" height="75%" src="https://github.com/fluent/fluent-bit/raw/master/documentation/fluentbit_users.png"/>
</center>

### Core

The following are the most visible changes for end-users:

- Properly handle of SIGTERM signal, graceful shutdown.
- On JSON formatting, handle duplicated keys, preserve the last one.

### Tail Input (local files)

The are three major changes on this release for Tail input plugin, it now effectively follow files from the end like ```tail -f```. In previous versions it always read them from the beginning. For opened files at start, it follows from the end, for newly discovered files at runtime or after rotation, it follows the files from the beginning. If you want to use the older mechanism you can enable the new option available ```read_from_head```.

Other performance improvements has been implemented when using the ```db``` option (database file). The synchronization mechanism has been changed to ```normal``` by default and changed the default journal mode. This is a big performance improvement for most of the users.

If you want to increase performance event more when using a database file, we have introduced the option ```db.locking``` (default: false) that specify that the database file is exclusively for Fluent Bit use, reducing the number of system calls required, at the cost of blocking any external connection to the database file.

If you are a Windows user, now you can enjoy for large files support.

### Amazon S3 & Kinesis Firehose Outputs

Amazon has done a great contribution on this major release, they contributed two new plugins plus other important improvements in existent components, list of changes below:

- [New plugin for Amazon S3](https://docs.fluentbit.io/manual/v/master/pipeline/outputs/s3)
- [New high performance core plugin for Amazon Kinesis Data Firehose](https://docs.fluentbit.io/manual/v/master/pipeline/outputs/firehose)
- [The AWS Metadata filter now supports more types of metadata, including VPC ID](https://docs.fluentbit.io/manual/v/master/pipeline/filters/aws-metadata)
- All AWS outputs now support custom STS endpoints, enabling you to use a VPC endpoint for STS]

### Microsoft Azure Blob Output

In a joint work with Microsoft Azure team, we created the new Azure Blob output plugin. This connector is flexible enough to be used with ```BlockBlob``` or ```AppendBlob``` types. In addition it can be used with custom end-points, providing a default connectivity with Azure service but optionally it can be used with [Azurite Emulator](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azurite) for local testing.

<center>
    <img width="75%" height="75%" src="https://gblobscdn.gitbook.com/assets%2F-LKKSx-3LBTCtaHbg0gl%2F-MGK3OSmbPg5iIWbWhdt%2F-MGK3yYQn68J5H1AiKLr%2Fazure_blob.png?alt=media&token=b5fd092d-5aff-425c-a4f6-4dce1a7d9b0c" />
</center>

Learn more about this new output here:

- [https://docs.fluentbit.io/manual/pipeline/outputs/azure_blob](https://docs.fluentbit.io/manual/pipeline/outputs/azure_blob)

### TensorFlow Lite Filter

The new filter [Tensorflow](https://docs.fluentbit.io/manual/pipeline/filters/tensorflow) allows running Machine Learning inference tasks on the records of data coming from input plugins or stream processor.

Tensorflow Lite is a lightweight open-source deep learning framework that is used for mobile and IoT applications. Tensorflow Lite only handles inference (not training), therefore, it loads pre-trained models (.tflite files) that are converted into Tensorflow Lite format (FlatBuffer).

Learn more about this new filter here:

- [https://docs.fluentbit.io/manual/v/master/pipeline/filters/tensorflow](https://docs.fluentbit.io/manual/v/master/pipeline/filters/tensorflow)

### Lua Filter

The Lua filter has been improved in two main areas:

When a script receives a timestamp, by default it get it in a Floating point number, but when returning the modified record the extact precision is likely lost. For users that requires exact timestamp handling we have introduced a new configuration property called ```time_as_table```, when enabled, the script receives the timestamp in a Lua table with the following structure:

```
timestamp['sec'] = EPOCH SECONDS
timestamp['nsec] = NANOSECONDS
```

when returning the value the timestamp will not lose precision.

Learn more about our Lua filter here:

- [https://docs.fluentbit.io/manual/v/master/pipeline/filters/lua](https://docs.fluentbit.io/manual/v/master/pipeline/filters/lua)

### Elasticsearch Output

The [Elasticsearch Output](https://docs.fluentbit.io/manual/pipeline/outputs/es/) plugin now increases the default size of the response buffer to 512k and it supports nanosecond timestamp precision.

Learn more about this plugin here:

- [https://docs.fluentbit.io/manual/pipeline/outputs/elasticsearch](https://docs.fluentbit.io/manual/pipeline/outputs/elasticsearch)

### Kafka Output

There are cases where the buffered messages ready for delivery cannot be flushed if the Kafka Broker is not fast enough, this local buffering is handled by ```rdkafka```.

The Kafka output connector now exposes a new configuration property called ```queue_full_retries``` which indicate the connector the limit of retries to enqueue the data into ```rdkafka```. If the process fails by default 10 times, it issue a full retry to Fluent Bit engine.

note: setting this value to ```0``` is possible if you desire unlimited enqueue retries.

Learn more about this plugin here:

- [https://docs.fluentbit.io/manual/pipeline/outputs/kafka](https://docs.fluentbit.io/manual/pipeline/outputs/kafka)

### PostgreSQL Output

Our PostreSQL output connector landed in v1.5 series and now in addition to Postres it got compatibility with CockroachDB. The new option ```cockroachdb``` is available in the configuration (default: off).

Learn more about this plugin here:

- [https://docs.fluentbit.io/manual/pipeline/outputs/postgresql](https://docs.fluentbit.io/manual/pipeline/outputs/postgresql)

### Stackdriver Output

The new version of the Google Stackdriver plugin, supports monitored resource ingestion from the log entry, in addition it comes with correction of project id usage.

Learn more about this plugin here:

- [https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver](https://docs.fluentbit.io/manual/pipeline/outputs/stackdriver)

## Contributors

On every release, there are many people involved doing contributions on different areas like bug reporting, troubleshooting, documentation and coding, without these contributions from the community, the project won't be the same and won't be in the good shape that it is now. So THANK YOU! to everyone who takes part of this journey!
