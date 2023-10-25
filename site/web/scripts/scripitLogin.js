function Fazerlogin() {

    var InputEmail = input_TelaLogin_Email.value;
    var InputSenha = input_TelaLogin_Senha.value;

    if (InputEmail == 0 
        // || InputEmail.indexOf("@") == -1
        ) {
        msgInputEmail.innerHTML = "* Insira seu e-mail "; 
    }else{
        msgInputEmail.innerHTML = ""
    }

    if(InputSenha == 0 ){
        msgInputSenha.innerHTML = "* Insira sua senha"; 
    }else{
        msgInputSenha.innerHTML = ""
    }
};