
/*
 * Editor client script for DB table Usuarios
 * Created by http://editor.datatables.net/generator
 */

(function($){

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		ajax: 'php/table.Usuarios.php',
		table: '#Usuarios',
		fields: [
			{
				"label": "Usuario",
				"name": "usuario"
			},
			{
				"label": "Nombre",
				"name": "nombre"
			},
			{
				"label": "Apellido Paterno",
				"name": "apellido_paterno"
			},
			{
				"label": "Apellido Materno",
				"name": "apellido_materno"
			},
			{
				"label": "Es_Red",
				"name": "es_red",
				"type": "select",
				"options": [
					"Si",
					"No"
				]
			}
		]
	} );

	var table = $('#Usuarios').DataTable( {
		dom: 'Bfrtip',
		ajax: 'php/table.Usuarios.php',
		columns: [
			{
				"data": "usuario"
			},
			{
				"data": "nombre"
			},
			{
				"data": "apellido_paterno"
			},
			{
				"data": "apellido_materno"
			},
			{
				"data": "es_red"
			}
		],
		select: true,
		lengthChange: false,
		buttons: [
			{ extend: 'create', editor: editor },
			{ extend: 'edit',   editor: editor },
			{ extend: 'remove', editor: editor }
		]
	} );
} );

}(jQuery));

