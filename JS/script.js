let switchMode =  document.querySelector('button')
let body = document.querySelector('body')
let header = document.querySelector('header')
let footer = document.querySelector('footer')
let inputNewsletter = document.getElementById('sendEmail')

switchMode.addEventListener('click',function() {
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
})