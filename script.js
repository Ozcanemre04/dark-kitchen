const plats = [
    {   img :"./img/soupevegetarien.jpg",
        nom:"CRÈME DE BROCOLI ET POIREAUX",
        genre:"végétarien",
        chaleur:"chaud",
        type:"soupe",
        prix:10 +"$" ,

    },
    {   img :"./img/soupeboeuf.jpg",
    nom:"SOUPE DE LÉGUMES AU BOEUF",
    genre:"normal",
    chaleur:"chaud",
    type:"soupe",
    prix:12+"$",

},
{   img :"./img/tartefinebrocoli.jpg",
nom:"Tarte fine au brocoli et gorgonzola",
genre:"végétarien",
chaleur:"chaud",
type:"plat",
prix:200 + "$",

},
{   img :"./img/Epaule-d-agneau.jpg",
nom:"Épaule d'agneau entière rôtie au four",
genre:"normal",
chaleur:"chaud",
type:"plat",
prix:500+"$",

},
{   img :"./img/ananas-roti-au-miel.jpg",
nom:"Ananas rôti au miel",
genre:"normal",
chaleur:"chaud",
type:"dessert",
prix:10000+"$",

},
{   img :"./img/tiramisu.jpg",

nom:"Tiramusu",
genre:"normal",
chaleur:"froid",
type:"dessert",
prix:100+"$",
},
{   img :"./img/café.jpg",
nom:"Café",
genre:"normal",
chaleur:"chaud",
type:"boisson",
prix:100+"$",
},
{   img :"./img/pasteque.jpg",
nom:"Smoothie à la pastèque",
genre:"normal",
chaleur:"froid",
type:"boisson",
prix:100+"$",
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
     img.src=array[i].img
 let figcaption = document.createElement("figcaption")
 figure.appendChild(figcaption)
 figcaption.innerHTML=array[i].type;
 let section = document.createElement('section')
 article.appendChild(section)
let h2 = document.createElement('h2')
section.appendChild(h2)
h2.innerHTML=array[i].nom
let p = document.createElement('p')


section.appendChild(p)


p.innerHTML=array[i].prix
let footer = document.createElement('footer')
article.appendChild(footer)
let h31 = document.createElement("h3")
let h32 = document.createElement("h3")
footer.appendChild(h31)
footer.appendChild(h32)
h31.innerHTML=array[i].chaleur
h32.innerHTML=array[i].genre
    }
}

display(plats)


let input =document.querySelector('#input')

input.addEventListener('keyup' ,function(e){
    const lower = e.target.value.toLowerCase()
    const result = plats.filter(plat => plat.genre.toLocaleLowerCase().startsWith(lower));
    display(result)

})


let select = document.querySelector('#select')

select.addEventListener('change',function(){
    let valeur= select.value
    if(valeur==="genre"){
        input.addEventListener('keyup' ,function(e){
            const lower = e.target.value.toLowerCase()
            const result = plats.filter(plat => plat.genre.toLocaleLowerCase().startsWith(lower));
            display(result)
        
        })
    }
    else if(valeur==="type"){
        input.addEventListener('keyup' ,function(e){
            const lower = e.target.value.toLowerCase()
            const result = plats.filter(plat => plat.type.toLocaleLowerCase().startsWith(lower));
            display(result)
        
        })
    }
    else if(valeur==="chaleur"){
    input.addEventListener('keyup' ,function(e){
        const lower = e.target.value.toLowerCase()
        const result = plats.filter(plat => plat.chaleur.toLocaleLowerCase().startsWith(lower));
        display(result)
    
    })
}
else{input.addEventListener('keyup' ,function(e){
    const lower = e.target.value.toLowerCase()
    const result = plats.filter(plat => plat.nom.toLocaleLowerCase().startsWith(lower));
    display(result)

})}
})

