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
	idPlantacao int primary key,
    nome varchar(20),
    qtdSensor int,
    fkEmpresa int,
    constraint fkEmpPlant foreign key (fkEmpresa) references empresa(idEmpresa)
);

 create table identificacao_sens(
 idSensor int primary key auto_increment,
 fkEmpresa int,
 constraint fkEmpresa foreign key (fkEmpresa) references empresa (idEmpresa)
 );

create table sensor (
	idSensor int primary key,
	fkPlantacao int,
    constraint fkPlantSen foreign key (fkPlantacao) 
		references plantacao(idPlantacao)
     idCapturaDados int primary key auto_increment,
     fkSensor int,
    temp decimal(4,2),
    umi decimal(4,2),
    hora timestamp,
    fkPlantacao int,
    constraint fkPlantSen foreign key (fkPlantacao) references plantacao(idPlantacao) ,
    constraint fkSensor foreign key (fkSensor) references identificacao_sens (idSensor)
);


create table registro (
   idRegistro int,
   fkSensor int,
   constraint fkSenReg foreign key (fkSensor)
   references sensor(idSensor),
   temp decimal(4,2),
   umi decimal(4,2),
   hora timestamp
);

/*
create table suporte (
	idSuporte int primary key,
    assunto varchar(45),
    descricao varchar(300),
    email varchar(45)
);
*/
