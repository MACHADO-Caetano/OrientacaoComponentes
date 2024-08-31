import {somar1, somar2, somar3}from "./calculos.js"
import ola from "./calculos.js"


const h1 = document.createElement('h1')

h1.textContent = "Aula 05 - JS"

const body = document.querySelector('body')
body.appendChild(h1)

const t2 = document.getElementById('t2')
t2.remove()

const section = document.querySelector('section')

const img = document.createElement('img')
img.src = 'https://www.freecodecamp.org/portuguese/news/content/images/size/w2000/2023/03/Ekran-Resmi-2019-11-18-18.08.13.png'
img.style.width = '400px'
section.appendChild(img)


img.addEventListener('mouseover', alterarImagem)
img.addEventListener('mouseout', voltaImagem)


function alterarImagem(){
    img.src = 'https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_1280.jpg'
}

function voltaImagem(){
img.src = 'https://www.freecodecamp.org/portuguese/news/content/images/size/w2000/2023/03/Ekran-Resmi-2019-11-18-18.08.13.png'

}


let frutas = ['maçã', 'laranja']
console.log(frutas)

frutas.push('tomate')
console.log(frutas)

frutas.pop()
console.log(frutas)

console.log("Função tradicional" + somar1(1,2))
console.log("Função anônima" + somar2(1,2))
console.log("Função de seta" + somar3(1,2))

setTimeout(()=>{
    console.log('1 SEGUNDO')
}, 1000)

setInterval(mostraHora, 1000)

function mostraHora(){
    const data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()

    if(segundo < 10){
        segundo = "0" + segundo
    }

    minuto = minuto < 10 ? "0" + minuto : minuto
    hora = hora < 10 ? "0" + hora : hora
    
    h1.style.textAlign = 'center'
    h1.style.fontSize = '60px'

    h1.textContent = `${hora}:${minuto}:${segundo}`
}

async function buscaCep(cep){
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json()
    console.log(data)
}

buscaCep();

const pessoas = [
    {
        nome: 'Caetano',
        idade: 21
    },
    {
        nome: 'Caetano 2',
        idade: 22
    }
]

pessoas.map(
    (pessoa)=>{
        console.log(pessoa.nome)
    }
)
