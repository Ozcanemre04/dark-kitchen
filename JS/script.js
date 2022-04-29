const buttonn =  document.querySelector('#toggleModeChange')
const bodyy = document.querySelector('body')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const coontent = document.querySelector('.content')
const inputNewsletter = document.getElementById('sendEmail')

buttonn.addEventListener("click",function(){
    coontent.classList.toggle('dark')
    buttonn.classList.toggle('dark')
    if(coontent.classList.contains('dark')){
        
        
        buttonn.innerHTML = "Turn on dark mode"
    }else{
        
        
        buttonn.innerHTML =  "Turn off dark mode"
    }

})

if(localStorage.getItem('theme') === 'dark'){
    coontent.classList.add('dark')
    buttonn.innerHTML = "Turn off dark mode"
}
















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