window.countdownJS = function() {
    return {
        flipDay: false,
        flipHour: false,
        flipMinute: false,
        flipSecond: false,

        // launchDate: Alpine.$persist(),
        // launch: this.now,
        // launchDate: this.launch.setDate(this.now.getDate() + 14),


        // set launchdate (14 days from now) , save this date with persist
        // find time now V
        // find difference now - launchdate V
        // calculate difference every second V

        // show time
        // change back card
        // animate
        // change front card
        // repeat
        // reset to 14 days when time is up

        countTime: {},
        showCount: {
            back: {
                days: '',
                hours: '',
                minutes: '',
                seconds: ''
            },
            front: {
                days: '',
                hours: '',
                minutes: '',
                seconds: ''
            }
        },

        setCountdown() {
            let launchDate = new Date("October 28, 2022 15:01:00");
            let launchSeconds = Date.parse(launchDate) / 1000;

            let now = new Date();
            let nowSeconds = Date.parse(now) / 1000;

            let launchSet = {}

            launchSet.timeLeft = launchSeconds - nowSeconds;

            launchSet.days = Math.floor(launchSet.timeLeft / 86400);
            launchSet.hours = Math.floor((launchSet.timeLeft - launchSet.days * 86400) / 3600);
            launchSet.minutes = Math.floor((launchSet.timeLeft - launchSet.days * 86400 - launchSet.hours * 3600) / 60);
            launchSet.seconds = Math.floor(launchSet.timeLeft - launchSet.days * 86400 - launchSet.hours * 3600 - launchSet.minutes * 60);

            if (launchSet.days < "10") {
                launchSet.days = "0" + launchSet.days;
            }
            else if (launchSet.days < "0") {
                launchSet.days = "00";
            }
            if (launchSet.hours < "10") {
                launchSet.hours = "0" + launchSet.hours;
            }
            else if (launchSet.hours < "0") {
                launchSet.hours = "00";
            }
            if (launchSet.minutes < "10") {
                launchSet.minutes = "0" + launchSet.minutes;
            }
            else if (launchSet.minutes < "0") {
                launchSet.minutes = "00";
            }
            if (launchSet.seconds < "10") {
                launchSet.seconds = "0" + launchSet.seconds;
            }
            else if (launchSet.seconds < "0") {
                launchSet.seconds = "00";
            }

            return this.countTime = launchSet;
        },

        startCountDown() {
            let countdown = setInterval(() => {
                this.setCountdown();
                this.animateFlip();
            }, 1000)
        },

        animateFlip() {
            this.showCount.back.seconds = this.countTime.seconds
            this.showCount.back.minutes = this.countTime.minutes
            this.showCount.back.hours = this.countTime.hours
            this.showCount.back.days = this.countTime.days
            this.flipSecond = true
            if ( this.showCount.back.minutes !== this.showCount.front.minutes) {
                this.flipMinute = true
            }
            if ( this.showCount.back.hours !== this.showCount.front.hours) {
                this.flipHour = true
            }
            if ( this.showCount.back.days !== this.showCount.front.days) {
                this.flipDay = true
            }
            setTimeout(function() {
                setTimeout(function() {
                    this.showCount.front.seconds = this.countTime.seconds
                    this.showCount.front.minutes = this.countTime.minutes
                    this.showCount.front.hours = this.countTime.hours
                    this.showCount.front.days = this.countTime.days
                }.bind(this), 850)
                this.flipSecond = false
                this.flipMinute = false
                this.flipHour = false
                this.flipDay = false
            }.bind(this), 900)
        }

    }

}