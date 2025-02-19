var nome = ""
// criar antes da função pra ser acessada globalmente

function Formulário(){
    nome = document.getElementById("nome").value;
    if(nome.trim() !== "" && nome.trim().length > 1 ){
        document.getElementById("formulario-nome").style.display = "none";
        document.getElementById("formulario-idade").style.display = "block";
    } else {
        alert("Insira um nome válido");
    }

}

function Mostrar(){
    var idade = document.getElementById("idade").value;
    if(Number(idade) > 0 && Number(idade) < 120){
        alert("seu nome é: " + nome + ", e a sua idade é: " + idade + " anos.");
    }else{
        alert("Insira uma idade válida");
    }
}
//asdsadsa