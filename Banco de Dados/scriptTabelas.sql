create database strawTech;
use strawTech;

create table empresa(
	idEmpresa int primary key auto_increment,
    nome varchar(40),
    representante varchar(50),
    cnpj char(14),
    email varchar(45),
	senha varchar(30)
);


create table endereco (
	idEndereco int primary key auto_increment,
	fkEmpresa int,
    foreign key (fkEmpresa) references empresa(idEmpresa),
    cep char(8),
    uf varchar(30),
    cidade varchar(30),
    bairro varchar(30),
    rua varchar(40),
    numero int
);
 


create table plantacao (
	idPlantacao int primary key auto_increment,
	fkEmpresa int,
    nome varchar(20),
    qtdArduino int,
    foreign key (fkEmpresa) references empresa(idEmpresa)
    );

create table arduino (
	idArduino int primary key auto_increment,
	fkPlantacao int,
	foreign key (fkPlantacao) references plantacao(idPlantacao),
	dtInstalacao date
    );


create table registro (
	idRegistro int primary key auto_increment,
	fkArduino int,
	foreign key (fkArduino) references arduino(idArduino),
    lm35_temperatura decimal(4,2),
    dht11_umidade decimal(4,2),
    dataHora timestamp
);




/*
create table suporte (
	idSuporte int primary key,
    assunto varchar(45),
    descricao varchar(300),
    email varchar(45)
);
*/
