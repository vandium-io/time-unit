'use strict';

/*jshint expr: true*/

const expect = require( 'chai' ).expect;

const timeUnit = require( '../../lib/time_unit' );

describe( 'lib/time_unit', function() {

    describe( 'TimeUnit', function() {

        describe( '.nanoseconds', function() {

            it( 'normal operation', function() {

                expect( timeUnit.nanoseconds ).to.equal( timeUnit.NANOSECONDS );

                expect( timeUnit.nanoseconds.toNanos( 1 ) ).to.equal( 1 );
                expect( timeUnit.nanoseconds.toMicros( 1000 ) ).to.equal( 1 );
                expect( timeUnit.nanoseconds.toMillis( 1000*1000 ) ).to.equal( 1 );
                expect( timeUnit.nanoseconds.toSeconds( 1000*1000*1000 ) ).to.equal( 1 );
                expect( timeUnit.nanoseconds.toMinutes( 1000*1000*1000*60 ) ).to.equal( 1 );
                expect( timeUnit.nanoseconds.toHours( 1000*1000*1000*60*60 ) ).to.equal( 1 );
                expect( timeUnit.nanoseconds.toDays( 1000*1000*1000*60*60*24 ) ).to.equal( 1 );
            });
        });

        describe( '.microseconds', function() {

            it( 'normal operation', function() {

                expect( timeUnit.microseconds ).to.equal( timeUnit.MICROSECONDS );

                expect( timeUnit.microseconds.toNanos( 1 ) ).to.equal( 1000 );
                expect( timeUnit.microseconds.toMicros( 1 ) ).to.equal( 1 );
                expect( timeUnit.microseconds.toMillis( 1000 ) ).to.equal( 1 );
                expect( timeUnit.microseconds.toSeconds( 1000*1000 ) ).to.equal( 1 );
                expect( timeUnit.microseconds.toMinutes( 1000*1000*60 ) ).to.equal( 1 );
                expect( timeUnit.microseconds.toHours( 1000*1000*60*60 ) ).to.equal( 1 );
                expect( timeUnit.microseconds.toDays( 1000*1000*60 *60*24 ) ).to.equal( 1 );
            });
        });

        describe( '.milliseconds', function() {

            it( 'normal operation', function() {

                expect( timeUnit.milliseconds ).to.equal( timeUnit.MILLISECONDS );

                expect( timeUnit.milliseconds.toNanos( 1 ) ).to.equal( 1000*1000 );
                expect( timeUnit.milliseconds.toMicros( 1 ) ).to.equal( 1000 );
                expect( timeUnit.milliseconds.toMillis( 1 ) ).to.equal( 1 );
                expect( timeUnit.milliseconds.toSeconds( 1000 ) ).to.equal( 1 );
                expect( timeUnit.milliseconds.toMinutes( 1000*60 ) ).to.equal( 1 );
                expect( timeUnit.milliseconds.toHours( 1000*60*60 ) ).to.equal( 1 );
                expect( timeUnit.milliseconds.toDays( 1000*60*60*24 ) ).to.equal( 1 );
            });
        });

        describe( '.seconds', function() {

            it( 'normal operation', function() {

                expect( timeUnit.seconds ).to.equal( timeUnit.SECONDS );

                expect( timeUnit.seconds.toNanos( 1) ).to.equal( 1000*1000*1000 );
                expect( timeUnit.seconds.toMicros( 1 ) ).to.equal( 1000*1000 );
                expect( timeUnit.seconds.toMillis( 1 ) ).to.equal( 1000 );
                expect( timeUnit.seconds.toSeconds( 1 ) ).to.equal( 1 );
                expect( timeUnit.seconds.toMinutes( 60 ) ).to.equal( 1 );
                expect( timeUnit.seconds.toHours( 60*60 ) ).to.equal( 1 );
                expect( timeUnit.seconds.toDays( 60*60*24 ) ).to.equal( 1 );
            });
        });

        describe( '.minutes', function() {

            it( 'normal operation', function() {

                expect( timeUnit.minutes ).to.equal( timeUnit.MINUTES );

                expect( timeUnit.minutes.toNanos( 1 ) ).to.equal( 60*1000*1000*1000 );
                expect( timeUnit.minutes.toMicros( 1 ) ).to.equal( 60*1000*1000 );
                expect( timeUnit.minutes.toMillis( 1 ) ).to.equal( 60*1000 );
                expect( timeUnit.minutes.toSeconds( 1 ) ).to.equal( 60 );
                expect( timeUnit.minutes.toMinutes( 1 ) ).to.equal( 1 );
                expect( timeUnit.minutes.toHours( 60 ) ).to.equal( 1 );
                expect( timeUnit.minutes.toDays( 60*24  ) ).to.equal( 1 );
            });
        });

        describe( '.hours', function() {

            it( 'normal operation', function() {

                expect( timeUnit.hours ).to.equal( timeUnit.HOURS );

                expect( timeUnit.hours.toNanos( 1 ) ).to.equal( 60*60*1000*1000*1000 );
                expect( timeUnit.hours.toMicros( 1 ) ).to.equal( 60* 60*1000*1000 );
                expect( timeUnit.hours.toMillis( 1 ) ).to.equal( 60* 60*1000 );
                expect( timeUnit.hours.toSeconds( 1 ) ).to.equal( 60*60 );
                expect( timeUnit.hours.toMinutes( 1 ) ).to.equal( 60 );
                expect( timeUnit.hours.toHours( 1 ) ).to.equal( 1 );
                expect( timeUnit.hours.toDays( 24 ) ).to.equal( 1 );
            });
        });

        describe( '.days', function() {

            it( 'normal operation', function() {

                expect( timeUnit.days ).to.equal( timeUnit.DAYS );

                expect( timeUnit.days.toNanos( 1 ) ).to.equal( 1000*1000*1000*60*60*24 );    // prec will be off otherwise
                expect( timeUnit.days.toMicros( 1 ) ).to.equal( 1000*1000*60*60*24 );
                expect( timeUnit.days.toMillis( 1 ) ).to.equal( 1000*60*60*24 );
                expect( timeUnit.days.toSeconds( 1 ) ).to.equal( 60*60*24 );
                expect( timeUnit.days.toMinutes( 1 ) ).to.equal( 60*24 );
                expect( timeUnit.days.toHours( 1 ) ).to.equal( 24 );
                expect( timeUnit.days.toDays( 1  ) ).to.equal( 1 );
            });
        });

        describe( '.convert', function() {

            it( 'normal operation', function() {

                expect( timeUnit.seconds.convert( 1, timeUnit.MILLISECONDS ) ).to.equal( 1000 );
                expect( timeUnit.seconds.convert( 1, timeUnit.SECONDS ) ).to.equal( 1 );
            });

            it( 'fail: when missing time unit', function() {

                expect( timeUnit.seconds.convert.bind( timeUnit.seconds, 1 ) ).to.throw( 'invalid time unit' );
            });

            it( 'fail: invalid time unit', function() {

                expect( timeUnit.seconds.convert.bind( timeUnit.seconds, 1, {} ) ).to.throw( 'invalid time unit' );
            });
        });
    });
});
