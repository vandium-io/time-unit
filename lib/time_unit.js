'use strict';

const UNIT_NANO = 1;
const UNIT_MICRO = UNIT_NANO * 1000;
const UNIT_MILLIS = UNIT_MICRO * 1000;
const UNIT_SECONDS = UNIT_MILLIS * 1000;
const UNIT_MINUTES = UNIT_SECONDS * 60;
const UNIT_HOURS = UNIT_MINUTES * 60;
const UNIT_DAYS = UNIT_HOURS * 24;



const PARSE_REGEX = /^\s*(\d*(?:[.,]\d*)?)\s*(ns|us|ms|s|m|h|d)?\s*$/;


class TimeUnit {

    constructor( unit ) {

        this.unit = unit;
    }

    toNanos( value ) {

        return this._convert( value, UNIT_NANO );
    }

    toMicros( value ) {

        return this._convert( value, UNIT_MICRO );
    }

    toMillis( value ) {

        return this._convert( value, UNIT_MILLIS );
    }

    toSeconds( value ) {

        return this._convert( value, UNIT_SECONDS );
    }

    toMinutes( value ) {

        return this._convert( value, UNIT_MINUTES );
    }

    toHours( value ) {

        return this._convert( value, UNIT_HOURS );
    }

    toDays( value ) {

        return this._convert( value, UNIT_DAYS );
    }

    convert( value, timeUnit ) {

        if( !timeUnit || !timeUnit.unit ) {

            throw new Error( 'invalid time unit' );
        }

        return this._convert( value, timeUnit.unit );
    }

    _convert( value, unit ) {

        return value * this.unit / unit;
    }
}

const NANOSECONDS = new TimeUnit( UNIT_NANO );

const MICROSECONDS = new TimeUnit( UNIT_MICRO );

const MILLISECONDS = new TimeUnit( UNIT_MILLIS );

const SECONDS = new TimeUnit( UNIT_SECONDS );

const MINUTES = new TimeUnit( UNIT_MINUTES );

const HOURS = new TimeUnit( UNIT_HOURS );

const DAYS = new TimeUnit( UNIT_DAYS );

const SUFFIX_UNIT_MAP = {

    ns: NANOSECONDS,
    us: MICROSECONDS,
    ms: MILLISECONDS,
    s: SECONDS,
    m: MINUTES,
    h: HOURS,
    d: DAYS
};

TimeUnit.prototype.parse = function( str, timeUnit ) {

    let results = PARSE_REGEX.exec( str );

    if( !results ) {

        throw new Error( 'invalid string: ' + str );
    }

    let value = Number( results[1] );

    let unit;

    if( results[2] === undefined ) {

        if( timeUnit ) {

            unit = timeUnit;
        }
        else {

            unit = SECONDS;
        }
    }
    else {

        unit = SUFFIX_UNIT_MAP[ results[2] ];
    }

    return unit._convert( value, this.unit );
}

module.exports = {

    NANOSECONDS,
    nanoseconds: NANOSECONDS,

    MICROSECONDS,
    microseconds: MICROSECONDS,

    MILLISECONDS,
    milliseconds: MILLISECONDS,

    SECONDS,
    seconds: SECONDS,

    MINUTES,
    minutes: MINUTES,

    HOURS,
    hours: HOURS,

    DAYS,
    days: DAYS
};
