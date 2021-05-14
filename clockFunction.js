
let input = window.prompt('Isminiz nedir?');
let a = document.getElementById('myName');
a.innerHTML = input;
/*

var today = new Date();

    let hours = (`0${today.getHours()}`).slice(-2);
    let minutes = (`0${today.getMinutes()}`).slice(-2);
    let seconds =( `0${today.getSeconds()}`).slice(-2);
    console.log(hours+':'+minutes+':'+seconds);

    document.getElementById('myClock').innerHTML = hours+':'+minutes+':'+seconds;
    */

    function showTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        h = checkTime(h);
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Pazar";
        weekday[1] = "Pazartesi";
        weekday[2] = "Sali";
        weekday[3] = "Carsamba";
        weekday[4] = "Persembe";
        weekday[5] = "Cuma";
        weekday[6] = "Cumartesi";
        
        var n = weekday[d.getDay()];
        document.getElementById('myClock').innerHTML =  h + ":" + m
        + ":" + s+' '+n;
        t = setTimeout('showTime()', 1000);
        }
        // add a zero in front of numbers<10
        function checkTime(i) {
        if (i < 10) {
        i = "0" + i;
        }
        return i;
        }
       
        
