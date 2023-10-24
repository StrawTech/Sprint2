
function cadastrar() {

    var senha = input_senha.value;
    var email = input_email.value;
    var senhainvalida = 0;
    mensagem_invalida = "Sua senha é inválida insira pelo menos:";
 
    
    // email possuiir @
    if (email.indexOf("@") > -1) {
        div_emailarroba.innerHTML = ""
    } else {
        div_emailarroba.innerHTML = "Seu email é inválido, insira um @"
    }


    // senha com 8 dígitos no mínimo
    if (senha.length >= 8) {
        div_8caracter.innerHTML = ''
    } else {
        senhainvalida += 1;
        if (senhainvalida == 1) {
            div_senha_invalida.innerHTML = `${mensagem_invalida}<br>`
        }
        div_8caracter.innerHTML = '• Sua senha não possui pelo menos 8 caracteres !'
        div_senha_invalida.innerHTML = ''
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
        senhainvalida += 1;
        if (senhainvalida == 1) {
            div_senha_invalida.innerHTML = `${mensagem_invalida}<br>`
        }
        div_numero.innerHTML = '• Não tem número'
        div_senha_invalida.innerHTML = ''

    }

    // senha possuir pelo menos uma letra maiuscula
    if (senha.toLowerCase() == senha) {
        senhainvalida += 1;
        if (senhainvalida == 1) {
            div_senha_invalida.innerHTML = `${mensagem_invalida}<br>`
        }
        div_maiuscula.innerHTML = '• Não tem letra maiúscula'
        div_senha_invalida.innerHTML = ''

    } else {
        div_maiuscula.innerHTML = ''
    }

    // senha possuir uma letra minuscula
    if (senha.toUpperCase() == senha) {
        senhainvalida += 1;
        if (senhainvalida == 1) {
            div_senha_invalida.innerHTML = `${mensagem_invalida}<br>`
        }
        div_minuscula.innerHTML = '• Não tem letra minúscula'
        div_senha_invalida.innerHTML = ''

    } else {
        div_minuscula.innerHTML = ''
    }

    // senha possuir um caractere especial
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
        // senha.indexOf("\") > -1 ||
        senha.indexOf("<") > -1 ||
        senha.indexOf(">") > -1 ||
        senha.indexOf(",") > -1 ||
        senha.indexOf(".") > -1 ||
        senha.indexOf("~") > -1 ||
        senha.indexOf("/") > -1 ||
        senha.indexOf("-") > -1 ||
        senha.indexOf("_") > -1) {
        div_especial.innerHTML = ''
    } else {
        senhainvalida += 1;
        if (senhainvalida == 1) {
            div_senha_invalida.innerHTML = `${mensagem_invalida}<br>`
        }
        div_especial.innerHTML = '• Não tem caractere especial '
        div_senha_invalida.innerHTML = ''

    }

    senhainvalida=0; 

    if (senhainvalida >=0) {
        div_senha_invalida = "Sua senha é válida"
        div_senha_invalida.innerHTML = ''

    }

    // caracteres especias validados = !@#$ %^&* ()_ + {}[] |\\: ; \"'<>,.?/~-
}