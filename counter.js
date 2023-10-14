const counts = document.querySelectorAll(".num");
let interval = 5000;

counts.forEach((count) =>{
    let startValue = 0;
    let endValue = parseInt(count.getAttribute("data-value"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        count.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration)
})