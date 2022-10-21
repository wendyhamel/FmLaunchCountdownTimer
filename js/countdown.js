window.countdownJS = function() {
    return {
        // countDown: Alpine.$persist(true),
        days: {current: 14, next: 13},
        hours: {current: 20, next: 19},
        minutes: {current: 24, next: 23},
        seconds: {current: 12, next: 11},
        flipDay: false,
        flipHour: false,
        flipMinute: false,
        flipSecond: false,

        get launchDate() {


            let countDown = setInterval(function(){
                Date.prototype.addDays = function(days) {
                    let launch = new Date(this.valueOf());
                    launch.setDate(launch.getDate() + days);
                    return launch;
                }
                let launch = new Date();
                console.log(launch.addDays(14));
                let now = new Date().getTime();

                let timeToLaunch = launch - now;

                let days = {};
                let hours = {};
                let minutes = {};
                let seconds = {};

                days.current = Math.floor(timeToLaunch / (1000 * 60 * 60 * 24));
                hours.current = Math.floor(timeToLaunch % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                minutes.current = Math.floor(timeToLaunch % (1000 * 60 * 60) / (1000 * 60));
                seconds.current = Math.floor(timeToLaunch % (1000 * 60) / 1000);

                if (days.current < '0') { days.current = '00';}
                if (hours.current < '10') { hours.current = '0' + hours.current;}
                if (hours.current < '0' || '24') { hours.current = '00';}
                if (minutes.current < '10') { minutes.current = '0' + minutes.current;}
                if (minutes.current < '0' || '60') { minutes.current = '00';}
                if (seconds.current < '10') { seconds.current = '0' + seconds.current;}
                if (seconds.current < '0' || '60') { seconds.current = '00';}

                console.log('now: ' + days.current + 'd ' + hours.current + 'h ' + minutes.current + 'm ' + seconds.current)
                console.log('next: ' + days.next + ' ' + hours.next + ' ' + minutes.next + ' ' + seconds.next)

            }, 1000);
        },
    }

}