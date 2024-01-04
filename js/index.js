const themeToggle = document.querySelector('.theme-toggler');
const dMode = document.querySelector('#dark-mode');
const lMode = document.querySelector('#light-mode');

themeToggle.addEventListener('click', ()=>{
    themeToggle.classList.toggle("active");
    if(themeToggle.classList.contains("active")){
        document.body.classList.add("light-mode-theme")
    }
    else{
        document.body.classList.remove("light-mode-theme")
    }
    saveTheme();
})

// LOCAL STORAGE
function saveTheme() {
    localStorage.setItem("theme", document.body.classList)
}
function getTheme() {
    document.body.classList = localStorage.getItem("theme");

    if(document.body.classList.contains("light-mode-theme")){
        themeToggle.classList.add("active");
    }
    else{
        themeToggle.classList.remove("active");
    }
}
getTheme();

