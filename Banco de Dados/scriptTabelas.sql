drop database strawTech;

create database strawTech;
use strawTech;

create table empresa(
	idEmpresa int primary key auto_increment,
    nome varchar(40) not null,
    representante varchar(50),
    cnpj char(14) not null,
    email varchar(60) not null,
	senha varchar(30) not null
);

insert into empresa (nome, representante, cnpj, email, senha) values
	('Frizza Estufas', 'Fernando Souza', '29410462723323', 'estufa.frizzarini@sptech.school', 'Estuf@2023' ),
    ('Moranguinhos', 'Marcelo Augusto', '20943432843483', 'marcelo.morango@sptech.school', 'Morangu3t!'),
    ('Morantech', 'Pablo Santos', '91332372972472', 'pablo.santos@moran.tech', 'T3cnologi@');
    
select * from empresa;


create table plantacao (
	idPlantacao int,
	fkEmpresa int,
	foreign key (fkEmpresa) references empresa(idEmpresa),
    nome varchar(20),
    qtdArduino int,
    primary key (idPlantacao, fkEmpresa)
    );
    
insert into plantacao values
	(1, 1, 'Estufa baixa SP', 3),
	(2, 1, 'Estufa SC', 3),
	(3, 2, 'Morango maduro', 3),
	(4, 3, 'Morago pequeno', 3);

create table endereco (
	idEndereco int primary key auto_increment,
	fkPlantacao int,
    foreign key (fkPlantacao) references plantacao(idPlantacao),
    cep char(8) not null,
    uf varchar(30) not null,
    cidade varchar(30) not null,
    bairro varchar(30),
    rua varchar(50) not null,
    numero int
);

insert into endereco values
	(null, 1, '21304932', 'SP', 'Sao Paulo', 'Cerqueira Cesar','Hadock Lobo', 595),
	(null, 2, '89320492', 'RJ', 'Rio de Janeiro', 'Madureira','Avenida Brasil', 1000),
	(null, 3, '64154647', 'SP', 'Sao Paulo', 'Cerqueira Cesar','Alameda Santos', 3445),
	(null, 4, '54646819', 'SC', 'Santa Catarina', 'Joinville', 'Pitangas', 34);


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
    dataHora timestamp default current_timestamp
);

insert into registro (lm35_temperatura, dht11_umidade) values
(20.10, 20.10);

