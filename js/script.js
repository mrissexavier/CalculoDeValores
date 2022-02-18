
//var resultado = document.querySelector('#resultado');
const btnSoma = document.querySelector('#btnSoma');
const errorMessage = document.querySelector('.msg');

function soma(){
    var primeiroValor = document.querySelector('#primeiroValor').value;
    var segundoValor = document.querySelector('#segundoValor').value;
    var resultado = parseFloat(primeiroValor) + parseFloat(segundoValor);
    document.querySelector(".resultado").innerHTML = resultado;
}

btnSoma.addEventListener('click', (e) => {
    e.preventDefault()
    
    let valor1 = document.querySelector('#primeiroValor').value;
    let valor2 = document.querySelector('#segundoValor').value;

    if(valor1 === ''  || valor2 === ''  ){
        errorMessage.textContent = 'Preencha os campos, por favor.';
        errorMessage.classList = 'error';
        return '';
    }
    
});
