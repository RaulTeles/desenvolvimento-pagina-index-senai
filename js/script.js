//efeito do botão voltar ao Topo
// criando uma função para o botão voltar
function topo(){
    // metodo que cuida da barra de rolagem do navegador
    window.scrollTo(
        // matriz
        {
            top:0,
            left:0,
            behavior:'smooth' //efeito para descer
        }
    )
}
//Validação de Login

function login(){
    // criando variavel
    var logado = 0;
    // Vai selecionar o elemento atraves do id
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    // fazendo uma validação

    if(usuario == 'admin' && senha == '123456'){
        // vai ser redirecionado para o local definido
        window.location = "index.html";
        logado = 1;
    }

    if (logado == 0 ){
        alert("Acesso Negado. Dados Incorretos")
    }

}

//Ativar alert no botão cadastrar

function cadastro(){
    alert("Cadastrado com Sucesso!");
    window.location.href = "index.html"

}