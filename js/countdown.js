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
                seconds: ''
            },
            front: {
                seconds: ''
            }
        },

        setCountdown() {
            let launchDate = new Date("October 30, 2022 20:00:00");
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
            setInterval(() => {
                this.setCountdown();
                this.animateFlip();
            }, 1000)
        },

        animateFlip() {
            this.flipSecond = true;
            this.showCount.back.seconds = this.countTime.seconds;
            setTimeout(function() {
                setTimeout(function() {
                    this.showCount.front.seconds = this.countTime.seconds
                }.bind(this), 850)
                this.flipSecond = false
            }.bind(this), 900)
        }

    }

}