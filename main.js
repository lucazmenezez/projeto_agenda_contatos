const formulario = document.getElementById('formulario');
const inputNome = document.getElementById('input-nome');
const inputTelefone = document.getElementById('input-telefone');
const botaoCadastrar = document.getElementById('botao-cadastrar');
var linhas = '';
const nomes = [];

formulario.addEventListener('keyup', function(e){
    console.log(e.target.value);

    validaNome();
})

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();
}) 

function validaNome() {
    const nomeComoArray = inputNome.value.split(' ');
    const nomeValido = nomeComoArray.length >= 2 && nomeComoArray[1] != '';

    if (nomeValido) {
        botaoCadastrar.disabled = false;
    } else {
        botaoCadastrar.disabled = true;
    }
}

function adicionaLinhas() {
    
    if (nomes.includes(inputNome.value)) {
        alert(`O nome ${inputNome.value} já foi inserido`);
    } else {
        nomes.push(inputNome.value);

        var linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;    
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}