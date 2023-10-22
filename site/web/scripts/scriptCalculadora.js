function calcularGanhos() {
 	
    var idOpenPopup = document.getElementById("exibirCalculadora");

        idOpenPopup.style.display = `block`;


	// Pegando valores dos inputs.
	var NomeDaPessoaResponsável = nomeDaPessoaResponsávelCalc.value;
	var NomeDaFazenda = input_nomeDaFazendaCalc.value;
	var QuantidadeTotalProduzida = Number(input_quantidadeTotalProduzidaCalc.value);	/* 100%  -----  valor total
																						X    -----  Valor da perda */
	var ValorQuantidadePerda = Number(input_quantidadeTotalPerdidaCalc.value);
	var ValorVendaDosMorangos = Number(input_valorVendaDoMorangoCalc.value);

	// validação para se o cliente não souber o valor da perda
	if(ValorQuantidadePerda == 0){

		var CalcularQuantidadePerda = (QuantidadeTotalProduzida / 100) * 20;

		ValorQuantidadePerda = CalcularQuantidadePerda;
	}

	//Valores faturados pela empresa atualmente e totalmente(Sem a perda)
	var ValorFaturadoAtual = (QuantidadeTotalProduzida - ValorQuantidadePerda) * ValorVendaDosMorangos;
	var ValorFaturadoTotal = QuantidadeTotalProduzida * ValorVendaDosMorangos;

	//Calculando a porcentagem da perda
	var PorcPerda = (ValorQuantidadePerda * 100) / QuantidadeTotalProduzida;

	//Valor que a empresa está perdendo atualmente e com a nossa solução
	var ValorPerdido = ValorQuantidadePerda * ValorVendaDosMorangos;
	var ValorPerdidoFut = ValorPerdido * 0.75;

	//Valores faturados pela empresa futuramente
	var ValorFaturadoFut = ValorFaturadoTotal - ValorPerdidoFut;


    if( QuantidadeTotalProduzida > 0 &&
        ValorQuantidadePerda > 0     &&
        ValorVendaDosMorangos > 0       ){

    exibir.innerHTML= `Olá ${NomeDaPessoaResponsável}, a fazenda ${NomeDaFazenda} com base na quantidade produzida (${QuantidadeTotalProduzida}) menos a quantidade perdida (${ValorQuantidadePerda}), 			   você está faturando atualmente um valor total de <b style="color: blue;">R$${ValorFaturadoAtual}</b>, sendo que seu lucro vem apenas de <b style="color: red;">${100 - PorcPerda}%</b> de sua 				   safra. <br><br>

					   Multiplicando o valor do morango pelo total da perda, atualmente você está perdendo um total de <b style="color: red;">R$${ValorPerdido}</b>, sendo ${PorcPerda}% da sua safra.
					   <br><br>

					   O nosso produto propõe uma media na diminuição na sua perda de 25%, sendo que atualmente você perde <b style="color: red;">R$${ValorPerdido}</b>, com nosso sistema perderia somente <b style="color: green;">R$${ValorPerdidoFut}</b> (Aplicado a diminuição de 25%), sendo agora apenas <b style="color: green;">${PorcPerda * 0.75}%</b>.
					   <br><br>

					   Sendo assim com o nosso projeto já implantado você faturará um total de <b style="color: green;">R$${ValorFaturadoFut}</b>, sendo um total de <b style="color: green;">${100 - (PorcPerda*0.75)}%</b>
	`;
	}else{
        exibir.innerHTML= `<h1 style="color: red; text-align: center;">!!!  Informe a quatidade(Kg) que produz no total e o valor do Kg que você vende o morango antes de calcular  !!!</h1>` ;
    }
}

function closePopup(){

    var idclosedPoup = document.getElementById("exibirCalculadora");

    idclosedPoup.style.display = `none`;


    var NomeDaPessoaResponsável = nomeDaPessoaResponsávelCalc.value;
	var NomeDaFazenda = input_nomeDaFazendaCalc.value;
	var QuantidadeTotalProduzida = Number(input_quantidadeTotalProduzidaCalc.value);	
	var ValorQuantidadePerda = Number(input_quantidadeTotalPerdidaCalc.value);
	var ValorVendaDosMorangos = Number(input_valorVendaDoMorangoCalc.value);

    NomeDaPessoaResponsável = ``;
    NomeDaFazenda = ``;
    QuantidadeTotalProduzida = ``;
    ValorQuantidadePerda = ``;
    ValorVendaDosMorangos = ``;

}