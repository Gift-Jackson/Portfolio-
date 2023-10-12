const themeToggle = document.querySelector('.theme');
const dMode = document.querySelector('#dark-mode');
const lMode = document.querySelector('#light-mode');

themeToggle.addEventListener('click', ()=>{
    themeToggle.classList.toggle("active");
    if(themeToggle.classList.contains("active")){
        document.body.classList.remove("dark-theme")
    }
    else{
        document.body.classList.add("dark-theme")
    }
})
