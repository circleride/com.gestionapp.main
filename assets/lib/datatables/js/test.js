//(function($){
$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		ajax: 'table.784cb0db-f3c7-11e5-90b3-002590dcfa5d.ajax',
		table: '#784cb0db-f3c7-11e5-90b3-002590dcfa5d',
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
	var table = $('#784cb0db-f3c7-11e5-90b3-002590dcfa5d').DataTable( {
		dom: 'Bfrtip',
		ajax: 'table.784cb0db-f3c7-11e5-90b3-002590dcfa5d.ajax',
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
});
//}(jQuery));
