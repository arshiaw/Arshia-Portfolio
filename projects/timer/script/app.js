let elem = document.querySelector(".widhetItems")
let icons = document.querySelectorAll(".widgets__holder__items")
let clickable = false
let wid = 0;
let hig = 0;
let unit = 5;
let id
let id2
// opening counter page
icons[0].addEventListener("click", (() => {

    if (clickable) return;
    clearInterval(id2)
    clickable = true
    id = setInterval(() => {
        if (wid <= 25 && hig <= 20) {
            wid += unit
            hig += unit
            elem.style.width = wid + "rem"
            elem.style.height = hig + "rem"

        } else {
            clearInterval(id)
            document.querySelector(".timerBox").style.opacity = "1"
            clickable = false
        }

    }, 30);
}))

// closing page sec 1
icons[1].addEventListener("click", (() => {
    clearInterval(id)
    document.querySelector(".timerBox").style.opacity = "0"
    setTimeout(() => {
        let id2 = setInterval(() => {
            if (wid != 0 && hig != 0) {

                wid -= unit;
                hig -= unit;
                elem.style.width = wid + "rem"
                elem.style.height = hig + "rem"

            } else {
                clearInterval(id2)
            }
        }, 20);
    }, 150);

}))
// closing page sec 2
icons[2].addEventListener("click", (() => {
    clearInterval(id)
    document.querySelector(".timerBox").style.opacity = "0"
    setTimeout(() => {
        let id2 = setInterval(() => {
            if (wid != 0 && hig != 0) {

                wid -= unit;
                hig -= unit;
                elem.style.width = wid + "rem"
                elem.style.height = hig + "rem"

            } else {
                clearInterval(id2)
            }
        }, 20);
    }, 150);

}))

let sec = 0;
let min = 0
let startBtn = document.querySelector("#starting");
let secend = document.querySelector("#secend")
let minut = document.querySelector("#minute")
let flag = false
let isWork = false
let counter = null; // interval container
startBtn.addEventListener("click", (() => {
    if (isWork) return;
    isWork = true;

    if (flag) {
        startBtn.classList.remove("fa", "fa-pause")
        startBtn.classList.add("fa", "fa-play")
        flag = false;
    } else {
        startBtn.classList.remove("fa", "fa-play")
        startBtn.classList.add("fa", "fa-pause")
        flag = true;
    }
    // startBtn.classList.remove("fa" ,"fa-play")
    // startBtn.classList.add("fa" ,"fa-pause")
    counter = setInterval(() => {
        ++sec
        secend.innerHTML = sec
        if (sec == 59) {
            ++min
            sec = 0
            minut.innerHTML = min
        }
    }, 1000);
}))

let resetKey = document.querySelector("#restart")
resetKey.addEventListener("click", (() => {
    startBtn.classList.remove("fa", "fa-pause")
    startBtn.classList.add("fa", "fa-play")
    flag = !flag
    sec = min = 0
    clearInterval(counter);
    isWork = false
    minut.innerHTML = "00"
    secend.innerHTML = "00"

}))