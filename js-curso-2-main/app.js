let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio';

function ConsoleFunction(){
    console.log('El boton fue clicado');
}

function PromptFunction(){
    let ciudadDeBrasil = prompt('¿Que ciudad de brasil quieres visitar?');
    console.log('La ciduad de Brasil que quieres visitar es: ' + ciudadDeBrasil);
    alert(`Estuve en ${ciudadDeBrasil} y me acorde de ti.`);
}

function AlertFunction(){
    alert('Yo amo JS');
}

function SumaFunction(){
    let numero1 = parseInt(prompt('Ingresa el primer numero:'));
    let numero2 = parseInt(prompt('Ingresa el segundo numero:'));
    let resultado = numero1 + numero2;
    alert(`El resultado de la suma es: ${resultado}`);
    console.log(`El resultado de la suma es: ${resultado}`);
}