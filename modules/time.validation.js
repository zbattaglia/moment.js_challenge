const moment = require('moment-timezone');

/**
 * If the timestamp is within 30 seconds of the current
 * time, return true. Otherwise, return false.
 * 
 * Input '2020-07-01T16:03:18.021Z' -> output: depends on current time (true or false)
 * 
 * @param {String} timestamp
 * @returns {Boolean} whether the timestamp is within 30 seconds of now
 */
function closeToNow(timestamp) {
    // format timeStamp using moment
    const stamp = moment(timestamp);
    // get the current date to check against timeStamp
    const currentTime = moment();
    // get the difference between stamp and currentTime
    const difference = moment.duration( currentTime.diff(stamp) );
    // convert difference to seconds
    const seconds = difference.asSeconds();

    // check if the difference in seconds is =/- 30,
    // if yes return true, else return false
    if( seconds < 30 && seconds > -30 ) {
        return true;
    }
    else {
        return false;
    }

}; // end closeToNow()

/**
 * Returns the previous days date if before 12pm CST or the
 * date of the timestamp if after 12pm CST. 
 * 
 * Input: '2020-07-01T16:03:18.021Z' -> output: '2020-06-30'
 * Input: '2020-07-01T17:03:18.021Z' -> output: '2020-07-01'
 * Input: '2020-07-01T12:03:18.021-05:00' -> output: '2020-07-01'
 * 
 * @param {String} timestamp 
 * @returns {String} calulated date in the format 'YYYY-MM-DD'
 */
function closestDate(timestamp) {
    // convert timestamp to central time
    const date = moment(timestamp);
    const centralTimestamp = date.tz('America/Chicago').format();
    // extract the hour out of 24 from converted timestamp
    const hour = moment( centralTimestamp ).format( 'HH' );

    // check to see if the extract hour is less than 12 (am)
    // if yes, return previous date formatted as specificed
    // else return timestamped date formatted as specified
    if( hour < 12 ) {
        return `${moment(centralTimestamp).subtract( 1, 'day' ).format('YYYY-MM-DD')}`
    }
    else {
        return `${moment(centralTimestamp).format('YYYY-MM-DD')}`
    }
}

/**
 * Takes in a timestamp and timezone, returns a string formatted for
 * that timezone. https://momentjs.com/timezone/
 *
 * Input: '2020-07-01T16:03:18.021Z', 'US/Central' -> output: 'July 1st, 2020 at 11:03 am'
 *
 * @param {String} timestamp
 * @returns {String} calulated date in the format 'MMMM Do, YYYY [at] h:mm a'
 */
function formatTimestamp(timestamp, timezone) {
    // YOUR CODE HERE
}

module.exports = {
    closeToNow,
    closestDate,
    formatTimestamp,
}