<!doctype html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>Panzon</title>
<script src="../../../assets/lib/jquery/jquery.min.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="css/generator-base.css?0">
<link rel="stylesheet" type="text/css" href="css/editor.dataTables.min.css?0">

<!--
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/t/dt/jszip-2.5.0,pdfmake-0.1.18,dt-1.10.11,af-2.1.1,b-1.1.2,b-colvis-1.1.2,b-flash-1.1.2,b-html5-1.1.2,b-print-1.1.2,cr-1.3.1,fh-3.1.1,kt-2.1.1,r-2.0.2,rr-1.1.1,sc-1.4.1,se-1.1.2/datatables.min.css"/>
<script type="text/javascript" src="https://cdn.datatables.net/t/dt/jszip-2.5.0,pdfmake-0.1.18,dt-1.10.11,af-2.1.1,b-1.1.2,b-colvis-1.1.2,b-flash-1.1.2,b-html5-1.1.2,b-print-1.1.2,cr-1.3.1,fh-3.1.1,kt-2.1.1,r-2.0.2,rr-1.1.1,sc-1.4.1,se-1.1.2/datatables.min.js"></script>

<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.11/css/jquery.dataTables.min.css"/>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/autofill/2.1.1/css/autoFill.dataTables.css"/>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/1.1.2/css/buttons.dataTables.min.css"/>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/fixedheader/3.1.1/css/fixedHeader.dataTables.min.css"/>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/responsive/2.0.2/css/responsive.dataTables.min.css"/>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/pdfmake.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/vfs_fonts.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/autofill/2.1.1/js/dataTables.autoFill.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.1.2/js/dataTables.buttons.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.1.2/js/buttons.colVis.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.1.2/js/buttons.flash.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.1.2/js/buttons.html5.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.1.2/js/buttons.print.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/fixedheader/3.1.1/js/dataTables.fixedHeader.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/responsive/2.0.2/js/dataTables.responsive.min.js"></script>
-->

<link rel="stylesheet" type="text/css" href="<?php echo $url_server; ?>/assets/lib/datatables/css/dataTables.bootstrap.min.css"/>
<script src="<?php echo $url_server; ?>/assets/lib/datatables/js/jquery.dataTables.min.js" type="text/javascript"></script>
<script src="<?php echo $url_server; ?>/assets/lib/datatables/js/dataTables.bootstrap.min.js" type="text/javascript"></script>
<script src="<?php echo $url_server; ?>/assets/lib/datatables/plugins/buttons/js/dataTables.buttons.js" type="text/javascript"></script>
<script charset="ISO-8859-1" type="text/javascript" language="javascript" src="//cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
<script charset="ISO-8859-1" type="text/javascript" language="javascript" src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/pdfmake.min.js"></script>
<script charset="ISO-8859-1" type="text/javascript" language="javascript" src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/vfs_fonts.js"></script>
<script src="<?php echo $url_server; ?>/assets/lib/datatables/plugins/buttons/js/buttons.html5.js" type="text/javascript"></script>
<script src="<?php echo $url_server; ?>/assets/lib/datatables/plugins/buttons/js/buttons.flash.js" type="text/javascript"></script>
<script src="<?php echo $url_server; ?>/assets/lib/datatables/plugins/buttons/js/buttons.print.js" type="text/javascript"></script>
<script src="<?php echo $url_server; ?>/assets/lib/datatables/plugins/buttons/js/buttons.colVis.js" type="text/javascript"></script>
<script src="<?php echo $url_server; ?>/assets/lib/datatables/plugins/buttons/js/buttons.bootstrap.js" type="text/javascript"></script>


<script type="text/javascript" charset="utf-8" src="js/dataTables.editor.min.js?<?php echo time(); ?>"></script>
<script type="text/javascript" charset="utf-8">
//src="js/test.js?<?php echo time(); ?>"
//(function($){
//$(document).ready(function() {
jQuery(document).ready(function($) {

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
</script>
</head>
<body class="dataTables">
<div class="container">

<table cellpadding="0" cellspacing="0" border="0" class="display" id="784cb0db-f3c7-11e5-90b3-002590dcfa5d" width="100%">
<thead>
<tr>
<th>Usuario</th>
<th>Nombre</th>
<th>Apellido Paterno</th>
<th>Apellido Materno</th>
<th>Es_Red</th>
</tr>
</thead>
</table>

</div>
</body>
</html>