


// document.addEventListener('DOMContentLoaded', function () {
//     var checkPageButton = document.getElementById('checkPage');
//     checkPageButton.addEventListener('click', function () {

//         chrome.tabs.getSelected(null, function (tab) {
//             d = document;
//             var f = d.createElement('form');
//             // f.action = 'google.com';
//             // f.method = 'post';
//             var i = d.createElement('input');
//             i.type = 'hidden';
//             i.name = 'url';
//             i.value = tab.url;
//             f.appendChild(i);
//             d.body.appendChild(f);
//             f.submit();
//         });
//     }, false);
// }, false);



//js for our html

let sec = 0;
let min = 0;
let initialTime = "00:00"
let timeLeft = min + ":" + sec;

function underTen(min,sec) {
    if (sec < 10) { return min + ":0" + sec }
    return min + ":" + sec;
}
// if (min < 10) { min = "0" + min }

// let breakLength = 12;
$('.timeLeft').text(timeLeft);
function addTime() {
    min += 1;
    timeLeft = underTen(min,sec)
    $('.timeLeft').text(timeLeft);
    console.log(timeLeft)
}
function subtractTime() {
    min -= 1;
    timeLeft = underTen(min,sec)
    $('.timeLeft').text(timeLeft);
    console.log(timeLeft)
}
function countDown(min, sec) {
    countInt = setInterval(function () {
        if (min === 0 && sec === 0) {
clearInterval(countInt);
        } else {
            if (sec !== 0) {
                if (sec <= 10) {
                    sec -= 1;
                    timeLeft = min + ':0' + sec;
                } else {
                    sec -= 1;
                    timeLeft = min + ':' + sec;
                }
            } else if (sec === 0) {
                sec = 59;
                min -= 1;
                timeLeft = min + ':' + sec;
            }
        }
        $('.timeLeft').text(timeLeft)
    },100);
}
