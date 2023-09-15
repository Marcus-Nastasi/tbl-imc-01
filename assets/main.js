
(function() {

const formulario = document.querySelector('#formulario');

function setaEventos(e) {
    e.preventDefault();

    const inputPeso = document.getElementById('peso');
    const inputAltura = document.getElementById('altura');

    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);

    if (!peso) {
        imprimeResult('Peso inválido! Por favor, insira um peso válido.', false);
        return
    }
    if (!altura) {
        imprimeResult('Altura inválida! Por favor, insira uma altura válida.', false);
        return
    }

    const imc = getIMC(peso, altura);
    const nivelIMC = getNivel(imc);

    const mensagem = `Seu IMC é ${imc} (${nivelIMC}).`;

    imprimeResult(mensagem, true);
}

formulario.addEventListener('submit', setaEventos);


let criaParagrafo = () => paragrafo = document.createElement('p');

formulario.addEventListener('submit', criaParagrafo);


function imprimeResult(mensagem, ehValida) {
    const resultado = document.querySelector('#result');
    resultado.innerHTML = '';
    let p = criaParagrafo();

    if (ehValida) {
        p.classList.add('valid');
    } else {
        p.classList.add('invalid');
    }

    p.innerHTML = mensagem;
    resultado.appendChild(p);
}

})();


let getIMC = (p, a) => {
    let imc = p / a ** 2;
    return imc.toFixed(2);
}


function getNivel(imc) {
    const nivel = ['Abaixo do peso', 'Peso ideal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    
    if (imc >= 39.9) {
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc > 18.5) {
        return nivel[1];
    } 
    if (imc <= 18.5) {
        return nivel[0];
    }
}


