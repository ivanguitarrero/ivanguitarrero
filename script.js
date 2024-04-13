
//alert("sistema en linea");



const titulo= document.querySelector("body > header > div >h1")

function definirTitulo(seccion,frase){
	seccion.innerHTML=frase;
}

const video=document.querySelector("body > div > div.video");
let simphonyOfDestruccion='<iframe width="560" height="315" src="https://www.youtube.com/embed/9d4ui9q7eDM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
let peaceSeals='<iframe width="560" height="315" src="https://www.youtube.com/embed/hGg8T1B_HMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
let pensarenNada='<iframe width="560" height="315" src="https://www.youtube.com/embed/cSieHQqu4Vc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

function entrarVideo(seccion,url){
seccion.innerHTML=url;
}

entrarVideo(video,pensarenNada);
//entrarVideo(video,simphonyOfDestruccion);

definirTitulo(titulo,"Ivan Guitarrero");


const cafecito = document.querySelector("body > div > div.cuadro");
const imagenCafe={
	src : './src/cafecitoBajo_2.jpg',
	url : 'https://cafecito.app/ivan8g2deloeste',
	alt : 'cafecito'
}

function insertarImagenCafe(seccion,img){
	seccion.innerHTML = `<a href="${img.url}"><img src="${img.src}" alt="${img.alt}"></a>`
}


insertarImagenCafe(cafecito,imagenCafe);

