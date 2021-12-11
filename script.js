class Clock {
    constructor() {
        this.hours = document.querySelector('.hours');
        this.minutes = document.querySelector('.minutes');
        this.seconds = document.querySelector('.seconds');
        this.separator = document.querySelector('.separator');
    }

    render() {
        let date = new Date();
        
        let hours = date.getHours();
        if (hours < 10) { 
        hours = '0' + hours; 
        };
        this.hours.innerHTML = hours;
        
        let minutes = date.getMinutes();
        if (minutes < 10) {
        minutes = '0' + minutes;
        };
        this.minutes.innerHTML = minutes;
        
        let seconds = date.getSeconds();
        if (seconds < 10) { 
        seconds = '0' + seconds
        };
        this.seconds.innerHTML = seconds;
    }
    toggle() {
        const changeFormat = document.querySelector('.clock');
        changeFormat.addEventListener('click', () => {
            this.seconds.classList.toggle('hiden');
            this.separator.classList.toggle('hiden');
        })
    }
    start() {
        this.toggle();
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

let сlock = new Clock();
сlock.start();






