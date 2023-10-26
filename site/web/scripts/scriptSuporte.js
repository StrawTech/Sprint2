
function OpenSuporte() {

    var openSup = document.getElementById("containerSuporte");

    openSup.style.display = `block`;

    var closeImg = document.getElementById("idimgOpen")

    closeImg.style.display = `none`


}

function ClosedSuporte() {

    var openSup = document.getElementById("containerSuporte");

    openSup.style.display = `none`;

    var closeImg = document.getElementById("idimgOpen")

    closeImg.style.display = `block`
}

function enviarMsgSuporte() {
    var openSup = document.getElementById("containerSuporte");
    var closeImg = document.getElementById("idimgOpen")

    var Input1Suporte = input_problema.value;
    var Input2Suporte = DescricaoDoPloblema.value;
    var Input3Suporte = EmailParaContato.value

    if (Input1Suporte == "" || Input2Suporte == "" || Input3Suporte == "") {
        alert(" Preencha todos os campos !")

    }else if (Input3Suporte.indexOf("@") == -1) {
            alert("Insira um e-mail válido")
        } else {
            alert("Mensagem Enviada")
            openSup.style.display = `none`       
            closeImg.style.display = `block`
        }
    }


