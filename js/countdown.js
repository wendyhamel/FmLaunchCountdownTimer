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
        // find time now
        // find difference now - launchdate
        // calculate difference every second

        // show time
        // change back card
        // animate
        // change front card
        // repeat
        // reset to 14 days when time is up

        showCount : {},

        makeTimer() {
        let launchDate = new Date("October 30, 2022 20:00:00");
        let launchSeconds = Date.parse(launchDate) / 1000;

        let now = new Date();
        let nowSeconds = Date.parse(now) / 1000;

        let timeLeft = launchSeconds - nowSeconds;

        let launchSet = {}
        launchSet.days = Math.floor(timeLeft / 86400);
        launchSet.hours = Math.floor((timeLeft - launchSet.days * 86400) / 3600);
        launchSet.minutes = Math.floor((timeLeft - launchSet.days * 86400 - launchSet.hours * 3600) / 60);
        launchSet.seconds = Math.floor(
            timeLeft - launchSet.days * 86400 - launchSet.hours * 3600 - launchSet.minutes * 60
        );

        if (launchSet.days < "10") {
            launchSet.days = "0" + launchSet.days;
        }
        if (launchSet.days < "0") {
            launchSet.days = "00";
        }
        if (launchSet.hours < "10") {
            launchSet.hours = "0" + launchSet.hours;
        }
        if (launchSet.hours < "0") {
            launchSet.hours = "00";
        }
        if (launchSet.minutes < "10") {
            launchSet.minutes = "0" + launchSet.minutes;
        }
        if (launchSet.minutes < "0") {
            launchSet.minutes = "00";
        }
        if (launchSet.seconds < "10") {
            launchSet.seconds = "0" + launchSet.seconds;
        }
        if (launchSet.seconds < "0") {
            launchSet.seconds = "00";
        }

        return this.showCount = launchSet;
    },

        startCountDown() {
            setInterval(() => {
                // if() {
                    this.makeTimer();
                // }
            }, 1000)
        },

    }

}