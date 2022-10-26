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

            this.timeToLaunch.days = Math.floor(secondsToLaunch / 86400);
            this.timeToLaunch.hours = Math.floor((secondsToLaunch - this.timeToLaunch.days * 86400) / 3600);
            this.timeToLaunch.minutes = Math.floor((secondsToLaunch - this.timeToLaunch.days * 86400 - this.timeToLaunch.hours * 3600) / 60);
            this.timeToLaunch.seconds = Math.floor(secondsToLaunch - this.timeToLaunch.days * 86400 - this.timeToLaunch.hours * 3600 - this.timeToLaunch.minutes * 60);

            if (this.timeToLaunch.days < "10") {
                this.timeToLaunch.days = "0" + this.timeToLaunch.days;
            }
            else if (this.timeToLaunch.days < "0") {
                this.timeToLaunch.days = "00";
            }
            if (this.timeToLaunch.hours < "10") {
                this.timeToLaunch.hours = "0" + this.timeToLaunch.hours;
            }
            else if (this.timeToLaunch.hours < "0") {
                this.timeToLaunch.hours = "00";
            }
            if (this.timeToLaunch.minutes < "10") {
                this.timeToLaunch.minutes = "0" + this.timeToLaunch.minutes;
            }
            else if (this.timeToLaunch.minutes < "0") {
                this.timeToLaunch.minutes = "00";
            }
            if (this.timeToLaunch.seconds < "10") {
                this.timeToLaunch.seconds = "0" + this.timeToLaunch.seconds;
            }
            else if (this.timeToLaunch.seconds < "0") {
                this.timeToLaunch.seconds = "00";
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
                this.animateFlip();
            }, 1000)
        },

        animateFlip() {
            this.timeToLaunch.seconds = this.timeToLaunch.seconds
            this.timeToLaunch.minutes = this.timeToLaunch.minutes
            this.timeToLaunch.hours = this.timeToLaunch.hours
            this.timeToLaunch.days = this.timeToLaunch.days
            this.flipSecond = true
            if ( this.timeToLaunch.minutes !== this.showCount.minutes) {
                this.flipMinute = true
            }
            if ( this.timeToLaunch.hours !== this.showCount.hours) {
                this.flipHour = true
            }
            if ( this.timeToLaunch.days !== this.showCount.days) {
                this.flipDay = true
            }
            setTimeout(function() {
                setTimeout(function() {
                    this.showCount.seconds = this.timeToLaunch.seconds
                    this.showCount.minutes = this.timeToLaunch.minutes
                    this.showCount.hours = this.timeToLaunch.hours
                    this.showCount.days = this.timeToLaunch.days
                }.bind(this), 850)
                this.flipSecond = false
                this.flipMinute = false
                this.flipHour = false
                this.flipDay = false
            }.bind(this), 900)
        }

    }

}