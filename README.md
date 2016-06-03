[![Build Status](https://travis-ci.org/vandium-io/time-unit.svg?branch=master)](https://travis-ci.org/vandium-io/time-unit)
[![npm version](https://badge.fury.io/js/time-unit.svg)](https://badge.fury.io/js/time-unit)

# time-unit

Time Unit Conversion utility that mimics the conversion functionality of Java's [TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html) class.

## Features

* Easy to use
* Low overhead
* No dependencies

## Installation

Install via npm.

	npm install time-unit --save

## Getting Started

To use time unit in your project:

```js
const TimeUnit = require( 'time-unit' );

let milliseconds = TimeUnit.seconds.toMillis( 1 );
// milliseconds = 1000

let minutes = TimeUnit.hours.toMinutes( 1 );
// minutes = 60
```

## Feedback

We'd love to get feedback on how to make this tool better. Feel free to contact us at `feedback@vandium.io`


## License

[BSD-3-Clause](https://en.wikipedia.org/wiki/BSD_licenses)
