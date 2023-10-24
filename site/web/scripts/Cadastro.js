
function cadastrar() {

    var representante = input_representante.value;
    var nome_empresa = input_nome_empresa.value;
    var senha = input_senha.value;
    var email = input_email.value;
    var cnpj = input_cnpj.value;

    if (representante == "") {
        div_representante.innerHTML = "* Esse campo é obrigatório"
    }else{
        div_representante.innerHTML = ""
    }

    if (nome_empresa == "") {
        div_nome_empresa.innerHTML = "* Esse campo é obrigatório"
    }else{
        div_nome_empresa.innerHTML = ""
    }

    if (cnpj == "") {
        div_cnpj.innerHTML = "* Esse campo é obrigatório"
    }else{
        div_cnpj.innerHTML = ""
    }



    // cnpj com 14 digitos
    if (cnpj.length == 14) {
        div_cnpj.innerHTML = ""
    } else {
        div_cnpj.innerHTML = "* Insira um CNPJ válido"
    }

    // email possuiir @
    if (email.indexOf("@") == -1) {
        div_email.innerHTML = "* Insira um e-mail válido"
    } else {
        div_email.innerHTML = ''
    }


    // senha com 8 dígitos no mínimo
    if (senha.length < 8) {
        div_8caracter.innerHTML = '• Sua senha não possui pelo menos 8 caracteres !'
    } else {
        div_8caracter.innerHTML = ''
    }

    // senha possuir pelo menos um numero
    if (senha.indexOf("0") > -1 ||
        senha.indexOf("1") > -1 ||
        senha.indexOf("2") > -1 ||
        senha.indexOf("3") > -1 ||
        senha.indexOf("4") > -1 ||
        senha.indexOf("5") > -1 ||
        senha.indexOf("6") > -1 ||
        senha.indexOf("7") > -1 ||
        senha.indexOf("8") > -1 ||
        senha.indexOf("9") > -1) {
        div_numero.innerHTML = ''
    } else {
        div_numero.innerHTML = '• Não possui número'
    }

    // senha possuir pelo menos uma letra maiuscula
    if (senha.toLowerCase() == senha) {
        div_maiuscula.innerHTML = '• Não possui letra maiúscula'
    } else {
        div_maiuscula.innerHTML = ''
    }

    // senha possuir uma letra minuscula
    if (senha.toUpperCase() == senha) {
        div_minuscula.innerHTML = '• Não possui letra minúscula'
    } else {
        div_minuscula.innerHTML = ''
    }

    // senha possuir um caractere especial
    // caracteres especias validados = !@#$ %^&* ()_ + {}[] |\\: ; \"'<>,.?/~-
    if (senha.indexOf("!") > -1 ||
        senha.indexOf("@") > -1 ||
        senha.indexOf("#") > -1 ||
        senha.indexOf("$") > -1 ||
        senha.indexOf("%") > -1 ||
        senha.indexOf("^") > -1 ||
        senha.indexOf("&") > -1 ||
        senha.indexOf("(") > -1 ||
        senha.indexOf(")") > -1 ||
        senha.indexOf(")") > -1 ||
        senha.indexOf(")") > -1 ||
        senha.indexOf("+") > -1 ||
        senha.indexOf("{") > -1 ||
        senha.indexOf("}") > -1 ||
        senha.indexOf("]") > -1 ||
        senha.indexOf("[") > -1 ||
        senha.indexOf("|") > -1 ||
        senha.indexOf(";") > -1 ||
        senha.indexOf(":") > -1 ||
        senha.indexOf("?") > -1 ||
        senha.indexOf("'") > -1 ||
        senha.indexOf(`"`) > -1 ||
        // senha.indexOf("\")> -1 ||
        senha.indexOf("<") > -1 ||
        senha.indexOf(">") > -1 ||
        senha.indexOf(",") > -1 ||
        senha.indexOf(".") > -1 ||
        senha.indexOf("~") > -1 ||
        senha.indexOf("/") > -1 ||
        senha.indexOf("-") > -1 ||
        senha.indexOf("_") > -1) {
        div_especial.innerHTML = ' '
    } else {
        div_especial.innerHTML = '• Não possui caractere especial'
    }
}

