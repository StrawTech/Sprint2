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
    cep char(8),
    uf varchar(30),
    cidade varchar(30),
    bairro varchar(30),
    rua varchar(40),
    numero int,
    fkEmpresa int,
    constraint fkEmpEndec foreign key (fkEmpresa) references empresa(idEmpresa)
);


create table plantacao (
	idPlantacao int primary key,
    nome varchar(20),
    qtdSensor int,
    fkEmpresa int,
    constraint fkEmpPlant foreign key (fkEmpresa) references empresa(idEmpresa)
);


create table sensor (
	idSensor int primary key,
    temp decimal(4,2),
    umi decimal(4,2),
    hora timestamp,
    fkPlantacao int,
    constraint fkPlantSen foreign key (fkPlantacao) references plantacao(idPlantacao)
);

create table suporte (
	idSuporte int primary key,
    assunto varchar(45),
    descricao varchar(300),
    email varchar(45)
);
