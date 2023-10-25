function Fazerlogin() {

    var InputEmail = input_TelaLogin_Email.value;
    var InputSenha = input_TelaLogin_Senha.value;

    if (InputEmail == 0 || InputEmail.indexOf("@") == -1) {
        msgInputEmail.innerHTML = "Insira seu email!"; 
    }

    if(InputSenha == 0 ){
        msgInputSenha.innerHTML = "Insira a sua Senha!"; 
    }
};