// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$("#boton1").on("tap", function (){
		$.ajax({
			type:"POST", 
			url:"http://192.168.1.68/gatos/buscarTodos.php",
			error: function(){
			 alert ('No se Puedo Conectar  a la Base de Datos');
			}, 
			success: function(respuesta){
				
			var datosGato = JSON.parse(respuesta);
		
			for (var x= 0; x<datosGato.gatos.length; x++)
			{
				$('#contenido').append('<div><div><div style="display:inline-block"><img src="http://192.168.1.68/gatos/recursos/imagenes/fotos/'+datosGato.gatos[x].Id_gato+'.jpg" width="90"></div><div style="display:inline-block"><h1>'+ datosGato.gatos[x].Tiempo_de_vida +' </h1><h2> '+datosGato.gatos[x].Caracter+' </h2></div></div><div><h2>'+datosGato.gatos[x].Raza+' </h2><h2>'+datosGato.gatos[x].Color+' </h2></div></div>');
			}
				$(':mobile-pagecontainer').pagecontainer('change', '#PaginaMI',{
				transition: 'pop'
			});
			}
		});
			
		});
		
		
		$("#btn_pro").on("tap", function (){
		$.ajax({
			type:"POST",
			 
			url:"http://192.168.1.68/gatos/buscarGatos.php",
			data: "gatos=" + $('#txtcaracter').val(), 
			error: function(){
			 alert ('No se Puedo Conectar  a la Base de Datos');
			}, 
			success: function(respuestapro){
				
			var datosGatos = JSON.parse(respuestapro);
			
		
			for (var x= 0; x<datosGatos.gatos.length; x++)
			{
				$('#contenidopro').append('<div><div><div style="display:inline-block"><img src="http://192.168.1.68/gatos/recursos/imagenes/fotos/'+datosGatos.gatos[x].Id_gato+'.jpg" width="90"></div><div style="display:inline-block"><h1>'+ datosGatos.gatos[x].Tiempo_de_vida +' </h1><h2> '+datosGatos.gatos[x].Caracter+' </h2></div></div><div><h2>'+datosGatos.gatos[x].Raza+' </h2><h2>'+datosGatos.gatos[x].precioMayoreo+' </h2></div></div>');
			}
				$(':mobile-pagecontainer').pagecontainer('change', '#gatos',{
				transition: 'pop'
			});
			}
		});
			
		});
		
		
		$("#btn_marca").on("tap", function (){
		$.ajax({
			type:"POST", 
			url:"http://192.168.1.68/gatos/buscarRaza.php",
			data: "raza=" + $('#txtraza').val(),
			error: function(){
			 alert ('No se Puedo Conectar  a la Base de Datos');
			}, 
			success: function(respuestamarca){
				
			var datosRaza = JSON.parse(respuestamarca);
			
		
			for (var x= 0; x<datosMarca.marcas.length; x++)
			{
				$('#contenidomar').append('<div><div><div style="display:inline-block"><img src="http://192.168.1.68/gatos/recursos/imagenes/fotos/'+datosRaza.Raza[x].Id_gato+'.jpg" width="90"></div><div style="display:inline-block"><h1>'+ datosRaza.Raza[x].Tiempo_de_vida +' </h1><h2> '+datosRaza.Raza[x].Caracter+' </h2></div></div><div><h2>'+datosRaza.Raza[x].Raza+' </h2><h2>'+datosRaza.Raza[x].Color+' </h2></div></div>');
			}
				$(':mobile-pagecontainer').pagecontainer('change', '#raza',{
				transition: 'pop'
			});
			}
		});
			
		});
}); 
});

