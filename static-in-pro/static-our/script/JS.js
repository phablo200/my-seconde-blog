poltronas=[false,false,false,true,true,true,true,false,false];

window.onload= function(){
	CarregarImagens();

	var img=document.getElementsByTagName("img");
	for(var i=0; i<10; i++){
		img[i].on

	}
}


function CarregarImagens(){


	var img=document.getElementsByTagName("img");

	for(var i=0;i<=img.length;i++){
		if(poltronas[i]){
		img[i].src='static/Imagens/cinebaladinha1.jpg';
	}else if(poltronas[i]==false){
		img[i].src='static/Imagens/cinebaladinha2.jpg';
	}

}

}
function SelecionarPoltrona(){
	var img=document.getElementsByTagName("img");
	for (var i = 0; i < poltronas.length; i++) {
		if(poltronas[i]){
			
			var quer= confirm("quer poltrona?");
			if(quer){
				img[i].src='static/Imagens/cinebaladinha3.jpg';
			break;
			}else{
				img[i].src='static/Imagens/cinebaladinha1.jpg';
			}
		}
	};
}

