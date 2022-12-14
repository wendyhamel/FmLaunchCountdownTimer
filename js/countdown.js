window.countdownJS = function() {
    return {
        flipDay: false,
        flipHour: false,
        flipMinute: false,
        flipSecond: false,
        launchDate: false,
        launchDateMicroseconds: Alpine.$persist(false),
        timeToLaunch: {},
        showCount: {
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        },

        setCountdown() {
            let launchInSeconds = Date.parse(this.launchDate) / 1000;
            let now = new Date();
            let nowInSeconds = Date.parse(now) / 1000;
            let secondsToLaunch = launchInSeconds - nowInSeconds;

            const dayInSeconds = 86400;
            const hourInSeconds = 3600;
            const minuteInSeconds = 60;

            this.timeToLaunch.days = Math.floor(secondsToLaunch / dayInSeconds);
            this.timeToLaunch.hours = Math.floor((secondsToLaunch - this.timeToLaunch.days * dayInSeconds) / hourInSeconds);
            this.timeToLaunch.minutes = Math.floor((secondsToLaunch - this.timeToLaunch.days * dayInSeconds - this.timeToLaunch.hours * hourInSeconds) / minuteInSeconds);
            this.timeToLaunch.seconds = Math.floor(secondsToLaunch - this.timeToLaunch.days * dayInSeconds - this.timeToLaunch.hours * hourInSeconds - this.timeToLaunch.minutes * minuteInSeconds);

            for(const timeUnit in this.timeToLaunch) {
                this.timeToLaunch[timeUnit] = String(this.timeToLaunch[timeUnit]).padStart(2,'0');
            }
        },

        init() {
            if(this.launchDateMicroseconds) {
                if (this.launchDateMicroseconds < 0) {
                    this.launchDate = new Date();
                    this.launchDateMicroseconds = Date.parse(this.launchDate);
                } else {
                    this.launchDate = new Date(this.launchDateMicroseconds);
                    }
            } else {
                this.launchDate = new Date();
                this.launchDateMicroseconds = Date.parse(this.launchDate);
            }

            this.launchDate.setUTCDate(this.launchDate.getDate() + 14);

            setInterval(() => {
                this.setCountdown();

                for(const timeUnit in this.timeToLaunch) {
                    this.animateFlip(timeUnit);
                }
            }, 1000)
        },

        animateFlip(timeUnit) {
            const animate = {
                days: 'flipDay',
                hours: 'flipHour',
                minutes: 'flipMinute',
                seconds: 'flipSecond'

            }

            if (this.timeToLaunch[timeUnit] !== this.showCount[timeUnit]) {
                this[animate[timeUnit]] = true
            }

            setTimeout(function() {
                setTimeout(function() {
                    this.showCount[timeUnit] = this.timeToLaunch[timeUnit]
                }.bind(this), 850)
                this[animate[timeUnit]] = false
            }.bind(this), 900)
        }
    }
}