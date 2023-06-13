// JavaScript Document

//Array serve para armazenar mais de 1 item dentro de uma variável
var allbanners=Array("imagens/banner1.jpg", "imagens/banner2.jpg", "imagens/banner3.jpg", "imagens/banner4.png", "imagens/banner5.jpg", "imagens/banner6.jpg")

var alldescri=Array("Texto Banner 01", "Texto Banner 02", "Texto Banner 03", "Texto Banner 04", "Texto Banner 05", "Texto Banner 06")

var allLinks=Array("https://cd6.com.br", "https://facebook.com", "https://globo.com", "https://instagram.com", "https://twitter.com", "https://linkedin.com.br")


//o comando length conta a quantidade de itenss de um array ou a quantidade de lettras de um string
var ultimapos=allbanners.length-1

//variável para dar o start da rotação
var posatual=-1

function trocabanner(){
    posatual=posatual+1
    if(posatual > ultimapos){
        posatual=0
    }
    document.bannerprincipal.src=allbanners[posatual]
    document.formbanner.campotexto.value=alldescri[posatual]
    setTimeout("trocabanner()", 3000)
}

function clica(){
    window.location=allLinks[posatual]
}


