const moment = require('moment-timezone');
moment.tz.setDefault('America/Chicago');

if(process.argv.length != 3){
    console.error('Usage: node <script-file> <timezone>')
    process.exit(1);
}
else{
    const targetTimezone = process.argv[2];

    if(moment.tz.zone(targetTimezone)){
        const targetTime = moment().tz(targetTimezone).format();

        console.log(`The time at the ${targetTimezone} timezone is ${targetTime}`);
    }
    else{
        console.error(`Unable to convert to timezone ${process.argv[2]}!`);
        process.exit(1);
    }
}
