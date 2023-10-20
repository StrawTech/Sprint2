create database metricas;

use metricas;

create table sensores (
dht11_umidade float(5),
lm35_temperatura float(5)
);

describe sensores;


select * from sensores;

drop database metricas;