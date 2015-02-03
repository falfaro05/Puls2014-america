$(document).on("ready", inicio);

function inicio(){


	$("#publicar").on("click", mostrarOcultar);
	$("#formulario").on("submit", agregarPost);
	$(".icon-arriba").on("click", likeUp);
	$(".icon-abajo").on("click", likeDown);
}

function mostrarOcultar(){

	var formulario = $("#formulario");
	formulario.slideToggle();
	$("nav").slideToggle();

}

function agregarPost(event){

	event.preventDefault();

	var titulo = $("#titulo").val();
	var clon = $(".item:first").clone();
	var link = $("#link").val();
	var contenedor = $("#contenido");
	
	clon.find("h2 a").text(titulo);
	clon.find("h2 a").attr("href", link);

	clon.hide();

	contenedor.prepend(clon);
	mostrarOcultar();

	clon.fadeIn();
}

function likeUp(event){
	event.preventDefault();


}

function likeDown(event){
	event.preventDefault();
}
