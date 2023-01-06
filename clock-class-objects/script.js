 class Clock {
    constructor({template}){
        this.template = template;
    }

    render(){
        let date = new Date()
        // console.log(date)

        let hour = date.getHours();
        if(hour < 10) hour = "0" + hour;

        let min = date.getMinutes();
        if(min < 10) min = "0" + min;

        let second = date.getSeconds();
        if(second < 10) second = "0" + second;

        let milisecond = date.getMilliseconds();
        if(milisecond < 10) milisecond = "0" + milisecond;

        // console.log(`${hour}:${min}:${second}:${milisecond}`);

        let output = this.template
          .replace('h', hour)
          .replace('m', min)
          .replace('s', second)
          .replace('ms', milisecond);

        console.log(output);
    }

    stop (){
        clearInterval(this.timer);
    }

    start (){
        this.render();
        this.timer = setInterval(()=>this.render(),1000);
    }
}

let clock = new Clock({template:'h:m:s:ms'});
clock.start();

// To stop interval
// clock.stop();