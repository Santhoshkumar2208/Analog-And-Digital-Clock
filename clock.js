function clock()
{
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let session = document.getElementById("session");
    let day = document.getElementById("day");
    day.innerText = time.toLocaleDateString('en-US', { weekday: 'short'});
    if (h >= 12) {
        h = h - 12;
        session.innerText = "PM";
    }
    console.log(h,m,s);

    h1 = h*30 + m*0.5;
    m1 = m*6;
    s1 = s*6;

    document.getElementById("hour-hand").style.transform =  `translateX(-50%) translateY(-100%) rotate(${h1}deg)`;
    document.getElementById("minute-hand").style.transform = `translateX(-50%) translateY(-100%) rotate(${m1}deg)`;
    document.getElementById("second-hand").style.transform = `translateX(-50%) translateY(-100%) rotate(${s1}deg)`;
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    let dhour = document.getElementById("dhour");
    dhour.innerText = h;
    let dmin = document.getElementById("dmin");
    dmin.innerText = m;
    let dsec = document.getElementById("dsec");
    dsec.innerText = s;
    let session_1 = document.getElementById("session1");
    if (h >= 12)
        h = h - 12;
        session_1.innerText = "PM";
};

setInterval(clock,500);

clock();

