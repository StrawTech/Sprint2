
function cadastrar() {

    var nome_empresa = input_nome_empresa.value;
    var representante = input_representante.value;
    var cnpj = input_cnpj.value;
    var endereco = input_endereco.value;
    var cidade = input_cidade.value;
    var bairro = input_bairro.value;
    var rua = input_rua.value;
    var numero_rua = input_numero_rua.value;
    var senha = input_senha.value;
    var email = input_email.value;


    //validação dos campos nao poderem ser nulos
    if (rua == "") {
        div_rua.innerHTML = "* Esse campo é obrigatório"
    } else {
        div_rua.innerHTML = ""
    }

    if (bairro == "") {
        div_bairro.innerHTML = "* Esse campo é obrigatório"
    } else {
        div_bairro.innerHTML = ""
    }

    if (cidade == "") {
        div_cidade.innerHTML = "* Esse campo é obrigatório"
    } else {
        div_cidade.innerHTML = ""
    }

    if (representante == "") {
        div_representante.innerHTML = "* Esse campo é obrigatório"
    } else {
        div_representante.innerHTML = ""
    }

    if (nome_empresa == "") {
        div_nome_empresa.innerHTML = "* Esse campo é obrigatório"
    } else {
        div_nome_empresa.innerHTML = ""
    }

    if (cnpj == "") {
        div_cnpj.innerHTML = "* Insira valores válidos para este campo"
    } else {// validação se o campo numero foi realmente preenchido por numeros
        //cpf com 14 numeros obrigatórios
        if (cnpj.length == 14 &&
            (cnpj.indexOf("0") > -1 ||
                cnpj.indexOf("1") > -1 ||
                cnpj.indexOf("2") > -1 ||
                cnpj.indexOf("3") > -1 ||
                cnpj.indexOf("4") > -1 ||
                cnpj.indexOf("5") > -1 ||
                cnpj.indexOf("6") > -1 ||
                cnpj.indexOf("7") > -1 ||
                cnpj.indexOf("8") > -1 ||
                cnpj.indexOf("9") > -1
            )) {
            div_cnpj.innerHTML = ""
        } else {
            div_cnpj.innerHTML = "* Insira um CNPJ válido"
        }
    }

    if (endereco == "") {
        div_endereco.innerHTML = "* Esse campo é obrigatório"
    } else {// validação se o campo numero foi realmente preenchido por numeros
        //cep com 8 numeros obrigatórios
        if (endereco.length == 8 &&
            (endereco.indexOf("0") > -1 ||
                endereco.indexOf("1") > -1 ||
                endereco.indexOf("2") > -1 ||
                endereco.indexOf("3") > -1 ||
                endereco.indexOf("4") > -1 ||
                endereco.indexOf("5") > -1 ||
                endereco.indexOf("6") > -1 ||
                endereco.indexOf("7") > -1 ||
                endereco.indexOf("8") > -1 ||
                endereco.indexOf("9") > -1
            )) {
            div_endereco.innerHTML = ""
        } else {
            div_endereco.innerHTML = "* Insira um CEP válido"
        }
    }

    if (numero_rua == "") {
        div_numero_rua.innerHTML = "* Esse campo é obrigatório"
    } else { // validação se o campo numero foi realmente preenchido por numeros
        if (numero_rua.indexOf("0") > -1 ||
            numero_rua.indexOf("1") > -1 ||
            numero_rua.indexOf("2") > -1 ||
            numero_rua.indexOf("3") > -1 ||
            numero_rua.indexOf("4") > -1 ||
            numero_rua.indexOf("5") > -1 ||
            numero_rua.indexOf("6") > -1 ||
            numero_rua.indexOf("7") > -1 ||
            numero_rua.indexOf("8") > -1 ||
            numero_rua.indexOf("9") > -1) {
            div_numero_rua.innerHTML = ""
        } else {
            div_numero_rua.innerHTML = "* Insira valores válidos para este campo"
        }
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

