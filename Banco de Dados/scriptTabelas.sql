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
	idEndereco int,
	fkEmpresa int,
    constraint fkEmpEndec foreign key (fkEmpresa) references empresa(idEmpresa),
    cep char(8),
    uf varchar(30),
    cidade varchar(30),
    bairro varchar(30),
    rua varchar(40),
    numero int,
	primary key (idEndereco, fkEmpresa)
);
 


create table plantacao (
	idPlantacao int,
	fkEmpresa int,
    nome varchar(20),
    qtdArduino int,
    foreign key (fkEmpresa) references empresa(idEmpresa),
    primary key (idPlantacao, fkEmpresa)
);

create table arduino (
	idArduino int,
	fkPlantacao int,
	foreign key (fkPlantacao) references plantacao(idPlantacao),
	dtInstalacao date,
    primary key (idArduino, fkPlantacao)
);


create table registro (
	idRegistro int,
	fkArduino int,
	foreign key (fkArduino) references arduino(idArduino),
    temperatura decimal(4,2),
    umidade decimal(4,2),
    hora timestamp,
	primary key(idRegistro, fkArduino )
);




/*
create table suporte (
	idSuporte int primary key,
    assunto varchar(45),
    descricao varchar(300),
    email varchar(45)
);
*/
