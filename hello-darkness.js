let rgb = 255
let secondsremaining = 15;
//change time remaining every 1 second
let countdownInterval = setInterval(function(){
    if( rgb > 0 ){
        rgb --;
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`
    }
    
}, 30)

let x = 0
const animate = function() {
x++
    if (x < window.innerWidth) {
        const transfrm = `translateX(${x}px)`
        imgEl.style.transform = transfrm
        requestAnimationFrame(animate)
    }
}
requestAnimationFrame(animate)
