const button =  document.getElementById('toggleModeChange')
const body = document.querySelector('body')
const header = document.querySelector('header')
const footer = document.querySelector('footer')

const inputNewsletter = document.getElementById('sendEmail')

function toggleDarkMode(){
    if(body.classList.contains('dark')){
        body.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        button.innerHTML = "Turn on dark mode"
    }else{
        body.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        button.innerHTML =  "Turn off dark mode"
    }
}

if(localStorage.getItem('theme') === 'dark'){
    body.classList.add('dark')
    button.innerHTML = "Turn off dark mode"
}

document.getElementById("toggleModeChange").addEventListener("click",toggleDarkMode)














/*switchMode.addEventListener('click',function() {
    switchMode.classList.toggle('dark')
    body.classList.toggle('dark')
    header.classList.toggle('dark')
    footer.classList.toggle('dark')
    inputNewsletter.classList.toggle('dark')
    if(switchMode.classList.contains('dark')){
        header.style.backgroundColor = "#000"
        footer.style.backgroundColor = "#000"
        inputNewsletter.style.backgroundColor =  "#fff";
    }else{
        header.style.backgroundColor = "#333"
        footer.style.backgroundColor = "#333"
        inputNewsletter.style.backgroundColor = "#000"
    }
})*/