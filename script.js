const plats = [

    {

        img: "./img/soupevegetarien.jpg",
        nom: "CRÈME DE BROCOLI ET POIREAUX",
        genre: "végétarien",
        chaleur: "chaud",
        type: "soupe",
        prix: 10 + "$",
        icon: "./img/coffee-cup.png"

    },
    {

        img: "./img/soupeboeuf.jpg",
        nom: "SOUPE DE LÉGUMES AU BOEUF",
        genre: "normal",
        chaleur: "chaud",
        type: "soupe",
        prix: 12 + "$",
        icon: "./img/coffee-cup.png"

    },
    {

        img: "./img/tartefinebrocoli.jpg",
        nom: "Tarte fine au brocoli et gorgonzola",
        genre: "végétarien",
        chaleur: "chaud",
        type: "plat",
        prix: 200 + "$",
        icon: "./img/coffee-cup.png"

    },
    {

        img: "./img/Epaule-d-agneau.jpg",
        nom: "Épaule d'agneau entière rôtie au four",
        genre: "normal",
        chaleur: "chaud",
        type: "plat",
        prix: 500 + "$",
        icon: "./img/coffee-cup.png"

    },
    {

        img: "./img/ananas-roti-au-miel.jpg",
        nom: "Ananas rôti au miel",
        genre: "normal",
        chaleur: "chaud",
        type: "dessert",
        prix: 10000 + "$",
        icon: "./img/coffee-cup.png"

    },
    {

        img: "./img/tiramisu.jpg",

        nom: "Tiramisu",
        genre: "normal",
        chaleur: "froid",
        type: "dessert",
        prix: 100 + "$",
        icon: "./img/snowflake.png"
    },
    {

        img: "./img/café.jpg",
        nom: "Café",
        genre: "normal",
        chaleur: "chaud",
        type: "boisson",
        prix: 100 + "$",
        icon: "./img/coffee-cup.png"
    },
    {

        img: "./img/pasteque.jpg",
        nom: "Smoothie à la pastèque",
        genre: "normal",
        chaleur: "froid",
        type: "boisson",
        prix: 100 + "$",
        icon: "./img/snowflake.png"
    },
]

let main = document.createElement('main')
let body = document.querySelector('body')
let content = document.querySelector('.content')
content.appendChild(main)

function display(array) {
    main.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let article = document.createElement('article')
        article.className = 'hello'
        main.appendChild(article)
        let figure = document.createElement('figure')
        article.appendChild(figure)
        let img = document.createElement('img')
        img.classList = "image"

        figure.appendChild(img)
        img.src = array[i].img
        let figcaption = document.createElement("figcaption")
        figure.appendChild(figcaption)
        figcaption.innerHTML = array[i].type;
        let section = document.createElement('section')
        article.appendChild(section)
        let h2 = document.createElement('h2')
        section.appendChild(h2)
        h2.innerHTML = array[i].nom
        let p = document.createElement('p')


        section.appendChild(p)


        p.innerHTML = array[i].prix
        let footer = document.createElement('footer')
        article.appendChild(footer)
        let h31 = document.createElement("h3")
        let h32 = document.createElement("h3")
        let div = document.createElement('div')
        div.className = "icon"
        footer.appendChild(div)
        let img2 = document.createElement('img')
        div.appendChild(img2)
        img2.src = array[i].icon
        div.appendChild(h31)
        footer.appendChild(h32)
        h31.innerHTML = array[i].chaleur
        h32.innerHTML = array[i].genre
        
            img.addEventListener('click', function () {
                let arr = [];
                console.log(array[i]);
                arr.push(array[i])
                let nndiv = document.createElement('div')
                nndiv.className = "hellow"
                aside.appendChild(nndiv)
                let pic = document.createElement('img')
                nndiv.appendChild(pic)
                pic.className = "pic"

                pic.src = array[i].img
                let h222 = document.createElement('h2')
                nndiv.appendChild(h222)
                h222.innerHTML = array[i].nom
                let ppp = document.createElement('p')
                nndiv.appendChild(ppp)
                ppp.innerHTML = array[i].prix
                let iicon = document.createElement('button')
                nndiv.appendChild(iicon)
                iicon.innerHTML = "delete";
                iicon.classList = 'delete';
     
                iicon.addEventListener('click', function () {
                    nndiv.remove()


                })
                let dellleted = document.querySelector('.delete-All')
                dellleted.addEventListener('click', function () {

                    nndiv.remove()
                })

            })
        
    }
}

    display(plats)


    let input = document.querySelector('#input')

   input.addEventListener('keyup', function (e) {
        const lower = e.target.value.toLowerCase()
        const result = plats.filter(plat => plat.nom.toLocaleLowerCase().startsWith(lower));
        display(result)

    })


    let select = document.querySelector('#select')

    select.addEventListener('change', function () {
        let valeur = select.value

        if (valeur === "vegan") {
            
                
                const result = plats.filter(plat => plat.genre==="végétarien");
                display(result)
                select.addEventListener('click',function(){
                    select.style.backgroundColor='green'
                    input.style.backgroundColor="green"
                })
               
               
        
        } else if (valeur === "type") {
            input.addEventListener('keyup', function (e) {
                const lower = e.target.value.toLowerCase()
                const result = plats.filter(plat => plat.type.toLocaleLowerCase().startsWith(lower));
                display(result)
                

            })
        } else if (valeur === "froid") {
             
             
               
                const result = plats.filter(plat => plat.chaleur === "froid")
                console.log(result);;
                display(result)
                select.addEventListener('click',function(){
                    select.style.backgroundColor='blue'
                    input.style.backgroundColor="blue"
                    input.addEventListener('keyup', function (e) {
                        const lower = e.target.value.toLowerCase()
                        const result = plats.filter(plat => plat.nom.toLocaleLowerCase().startsWith(lower));
                        display(result)
                        
        
                    })
                })
            
        }
        else if(valeur==="chaud"){
            const result = plats.filter(plat => plat.chaleur ==="chaud")
                console.log(result);
                display(result)
                select.addEventListener('click',function(){
                    select.style.backgroundColor='red'
                    input.style.backgroundColor='red'
                })
        } 
        else {
            input.addEventListener('keyup', function (e) {
                const lower = e.target.value.toLowerCase()
                const result = plats.filter(plat => plat.nom.toLocaleLowerCase().startsWith(lower));

                display(result)


            })
        }
    })
   
    let aside = document.querySelector('aside')

    let shoppingCard = document.querySelector('.shopping-card')

    let close = document.querySelector('.close')



    shoppingCard.addEventListener('click', function () {
        aside.classList.toggle('active')
        if (aside.classList.contains('active')) {
            aside.style.display = 'flex';

        } else {
            aside.style.display = 'none'
        }

    })


    close.addEventListener('click', function () {
        aside.classList.remove('active')
        if (!aside.classList.contains('active')) {
            aside.style.display = 'none'
        }
    })