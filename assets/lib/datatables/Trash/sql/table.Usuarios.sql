-- 
-- Editor SQL for DB table Usuarios
-- Created by http://editor.datatables.net/generator
-- 

CREATE TABLE IF NOT EXISTS `Usuarios` (
	`id` int(10) NOT NULL auto_increment,
	`usuario` varchar(255),
	`nombre` varchar(255),
	`apellido_paterno` varchar(255),
	`apellido_materno` varchar(255),
	`es_red` varchar(255),
	PRIMARY KEY( `id` )
);