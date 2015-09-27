window.onload= function(){
	Carregar();

}


function Carregar(){
	var imagens=document.getElementsByTagName("img");
	for(var i=0; i< 20; i++){
		imagens[i].src="/static/Imagens/cinebaladinha1.jpg";
	}
}

function clique(){

alert ("hello world");

}