# RELEASE NOTES

## Binary

- New option _-R_ to load parsers file.

## Core

- Pack: new function to convert Msgpack to JSON
- Regex: new internal interface to provide regex support to the core and plugins.
- Hash: new hashing interface.
- Environment: Fluent Bit now is aware about environment variables and allow to set and use specific variables in configuration files.
- Thread: ucontext backend deprecated. Everything is handled by libco now.
- Logging fixed for master process.
- HTTP Client: map payload content in response.

## Parsers

A new Parsers interface have been added. From now plugins can take advante of built-in parsing support. Given a collected log/string, when applyng a parser rule it's possible to capture specific fields and convert the unstructure log to a structured one.

The parsers are defined in a configuration file, the parsing can be based in a regular expression or mapping a direct JSON format. It also supports time format lookup.

## Libraries / Dependencies

- Onigmo: new Regex engine.
- SQLite3 upgraded to v3.16.1.
- cJSON deprecated (finally).

## Filter

- New Filtering plugin architecture.
- filter_kubernetes: new filter to enrich logs with Kubernetes metadata. It append POD and container info gathered locally from file names and from the API server.
- filter_stdout: new filter stdout plugin.
- filter_grep: new _grep_ filter. It supports _regex_ and _exclude_ modes.

## Proxy

- Refactored Golang interface for output plugins

## Input

- input plugins: msgpack buffers now are handled by Fluent Bit Core, input plugins uses new API to ingest data.

- in_tail: add support for parsing, new _Parser_ configuration key.
- in_tail: support to append file name to the tags when a wildcard is specified.
- in_proc: new features to collect memory usage and count open file descriptors by process.
- in_mem: adjustments to generate info similar to free(1) command.

- in_disk: new plugin to gather disks metrics.

## Output Plugins

- out_flowcounter: support counters for different inputs.
- out_lib: support JSON output.
- out_file: new plugin to write records to the file system.
- out_es (elasticsearch): add support for nested fields.
- out_es (elasticsearch): fix buffering realloc logic.
- out_nats: enable by default.
- out_influxdb: fix buffering realloc logic.
