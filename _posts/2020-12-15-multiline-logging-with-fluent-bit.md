---
layout: post
title:  "Multiline log parsing with Fluent Bit"
date:   2020-12-15
categories: cloudnative logging news
author: anurag
---
> Learn about how to handle multiline logging with Fluent Bit with suggestions and an example of multiline parser 

There are thousands of different log formats that applications use; however, one of the most challenging structures to collect/parse/transform is multiline logs. While multiline logs are hard to manage, many of them include essential information needed to debug an issue. In this blog, we will walk through multiline log collection challenges and how to use Fluent Bit to collect these critical logs.

## Example of Java multiline
One primary example of multiline log messages is Java stack traces. These logs contain vital information regarding exceptions that might not be handled well in code. Let's use a sample stack track sample from the following blog (INSERT BLOG HERE) :

```
Dec 14 06:41:08 Exception in thread "main" java.lang.RuntimeException: Something has gone wrong, aborting!
    at com.myproject.module.MyProject.badMethod(MyProject.java:22)
    at com.myproject.module.MyProject.oneMoreMethod(MyProject.java:18)
    at com.myproject.module.MyProject.anotherMethod(MyProject.java:14)
    at com.myproject.module.MyProject.someMethod(MyProject.java:10)
    at com.myproject.module.MyProject.main(MyProject.java:6)
```

If we were to read this file without any Multiline log processing, we would get the following.
```
[0] tail.0: [1607925473.782516439, {"log"=>"Exception in thread "main" java.lang.RuntimeException: Something has gone wrong, aborting!"}]
[1] tail.0: [1607925473.782530018, {"log"=>"    at com.myproject.module.MyProject.badMethod(MyProject.java:22)"}]
[2] tail.0: [1607925473.782530479, {"log"=>"    at com.myproject.module.MyProject.oneMoreMethod(MyProject.java:18)"}]
[3] tail.0: [1607925473.782530828, {"log"=>"    at com.myproject.module.MyProject.anotherMethod(MyProject.java:14)"}]
[4] tail.0: [1607925473.782531218, {"log"=>"    at com.myproject.module.MyProject.someMethod(MyProject.java:10)"}]
[5] tail.0: [1607925473.782531578, {"log"=>"    at com.myproject.module.MyProject.main(MyProject.java:6)"}]
```

While these separate events might not be a problem when viewing with a specific backend, they could easily get lost as more logs are collected that conflict with the time.

## Turning on Multiline processing

There are two main methods to turn these multiple events into a single event for easier processing:
1. Picking a format that encapsulates the entire event as a field
2. Leveraging Fluent Bit and Fluentd's multiline parser

### Using a Logging Format (E.g., JSON)
One of the easiest methods to encapsulate multiline events into a single log message is by using a format that serializes the multiline string into a single field. One typical example is using JSON output logging, making it simple for Fluentd / Fluent Bit to pick up and ship off to any number of backends. 

To implement this type of logging, you will need access to the application, potentially changing how your application logs. For example, if using [Log4J](https://logging.apache.org/log4j/2.x/) you can set the JSON template format ahead of time.

Also, be sure within Fluent Bit to use the built-in `JSON` parser and ensure that messages have their format preserved. An example of the file `/var/log/example-java.log` with `JSON` parser is seen below:
```
[INPUT]
	Name tail
	Path /var/log/example-java.log
	parser json
```

### Using the Multiline parser
However, in many cases, you may not have access to change the application's logging structure, and you need to utilize a parser to encapsulate the entire event.

Thankfully, Fluent Bit and Fluentd contain multiline logging parsers that make this a few lines of configuration.

An example of Fluent Bit parser configuration can be seen below:
```
[PARSER]
    Name multiline
    Format regex
    Regex /(?<time>Dec \d+ \d+\:\d+\:\d+)(?<message>.*)/
    Time_Key  time
    Time_Format %b %d %H:%M:%S
```

In this example, we define a new Parser named `multiline`. We then use a regular expression that matches the first line. We also then use the multiline option within the tail plugin. An example can be seen below:

```
[INPUT]
    Name        tail
    Path        /var/log/example-java.log
    Read_from_head true
    Multiline on
    Parser_Firstline multiline
```
We turn on multiline processing and then specify the parser we created above, `multiline`. Fluent Bit will now see if a line matches the parser and capture all future events until another first line is detected. If we needed to extract additional fields from the full multiline event, we could also add another `Parser_1` that runs on top of the entire event. In this case, we will only use `Parser_Firstline` as we only need the message body.

In our example output, we can also see that now the entire event is sent as a single log message:

```
[0] tail.0: [1607928428.466041977, {"message"=>"Exception in thread "main" java.lang.RuntimeException: Something has gone wrong, aborting!
	at com.myproject.module.MyProject.badMethod(MyProject.java:22)
	at com.myproject.module.MyProject.oneMoreMethod(MyProject.java:18)
	at com.myproject.module.MyProject.anotherMethod(MyProject.java:14)
	at com.myproject.module.MyProject.someMethod(MyProject.java:10)", "message"=>"at com.myproject.module.MyProject.main(MyProject.java:6)"}]
```

## Conclusion

Multiline logs are harder to collect, parse, and send to backend systems; however, using Fluent Bit and Fluentd can simplify this process. If you have questions on this blog or additional use cases to explore, join us in our [slack channel](https://slack.fluentd.org).
