<?php

/*
 * Editor server script for DB table Usuarios
 * Created by http://editor.datatables.net/generator
 */

// DataTables PHP library and database connection
include( "lib/DataTables.php" );

// Alias Editor classes so they are easy to use
use
	DataTables\Editor,
	DataTables\Editor\Field,
	DataTables\Editor\Format,
	DataTables\Editor\Mjoin,
	DataTables\Editor\Upload,
	DataTables\Editor\Validate;

// The following statement can be removed after the first run (i.e. the database
// table has been created). It is a good idea to do this to help improve
// performance.
$db->sql( "CREATE TABLE IF NOT EXISTS `Usuarios` (
	`id` int(10) NOT NULL auto_increment,
	`usuario` varchar(255),
	`nombre` varchar(255),
	`apellido_paterno` varchar(255),
	`apellido_materno` varchar(255),
	`es_red` varchar(255),
	PRIMARY KEY( `id` )
);" );

// Build our Editor instance and process the data coming from _POST
Editor::inst( $db, 'Usuarios', 'id' )
	->fields(
		Field::inst( 'usuario' ),
		Field::inst( 'nombre' ),
		Field::inst( 'apellido_paterno' ),
		Field::inst( 'apellido_materno' ),
		Field::inst( 'es_red' )
			->validator( 'Validate::notEmpty' )
	)
	->process( $_POST )
	->json();
