function confereSenha(){
const senha = document.querySelector('input[name=senha]');
const confirma = document.querySelector('input[name=confirma]');

if (confirma.value == senha.value) {
    confirma.setCustomValidity('');
}
  else{
    confirma.setCustomValidity('As senhas não coincidem');
  }
}


function confirm(){
alert("Cadastrado com Sucesso!!")

}

