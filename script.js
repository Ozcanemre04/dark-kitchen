const plats = [
    {   img :"",
        nom:"Salade de pâtes vegan",
        genre:"végétarien",
        plat:"chaud",
        type:"plat",
    },
    {   img :"",
    nom:"Salade de pâtes vegan",
    genre:"végétarien",
    plat:"chaud",
    type:"plat",
},
{   img :"",
nom:"Salade de pâtes vegan",
genre:"végétarien",
plat:"froid",
type:"plat",
},
{   img :"",
nom:"Salade de pâtes vegan",
genre:"végétarien",
plat:"chaud",
type:"plat",
},
{   img :"",
nom:"Salade de pâtes vegan",
genre:"végétarien",
plat:"chaud",
type:"plat",
},
{   img :"",
nom:"hello",
genre:"végétarien",
plat:"chaud",
type:"plat",
},
]

let main = document.createElement('main')
let body= document.querySelector('body')
body.appendChild(main)
function display(array){
    main.innerHTML='';
    for(let i = 0;i<array.length;i++){
     let article = document.createElement('article')
     main.appendChild(article)
     let figure = document.createElement('figure')
     article.appendChild(figure)
     let img = document.createElement('img')
     figure.appendChild(img)
     img.innerHTML=array[i].img
 let figcaption = document.createElement("figcaption")
 figure.appendChild(figcaption)
 figcaption.innerHTML=array[i].type;
 let section = document.createElement('section')
 article.appendChild(section)
let h2 = document.createElement('h2')
section.appendChild(h2)
h2.innerHTML=array[i].nom
let footer = document.createElement('footer')
article.appendChild(footer)
let h31 = document.createElement("h3")
let h32 = document.createElement("h3")
footer.appendChild(h31)
footer.appendChild(h32)
h31.innerHTML=array[i].plat
h32.innerHTML=array[i].genre
    }
}

display(plats)


let input =document.querySelector('#input')

input.addEventListener('keyup' ,function(e){
    const lower = e.target.value.toLowerCase()
    const result = plats.filter(plat => plat.nom.toLocaleLowerCase().startsWith(lower));
    display(result)

})


let select = document.querySelector('#select')