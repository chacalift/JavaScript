// JavaScript Document
//criando a função que recebe os valores enviados
function mascara(dados, modelo){
    recdados=dados
    recmodelo=modelo
    setTimeout("ajustemascara()", 1)
}

function ajustemascara(){
    recdados.value=recmodelo(recdados.value)
}

function modelocpf(v){
    v=v.replace(/\D/g, "") //serve para não acceitar letras, somente números
    v=v.replace(/(\d{1})(\d{8})$/,"$1.$2")//insere o ponto depois de 8 caracteres
    v=v.replace(/(\d{1})(\d{5})$/,"$1.$2")//insere o ponto depois de 5 caracteres
    v=v.replace(/(\d{1})(\d{2})$/,"$1-$2")//insere o ponto depois de 5 caracteres
    return v
}

function modelofoneres(v){
    v=v.replace(/\D/g, "") //serve para não acceitar letras, somente números
    v=v.replace(/(\d{1})(\d{8})$/,"$1) $2")//insere o ) com espaço após depois de 8 caracteres
    v=v.replace(/(\d{1})(\d{4})$/,"$1-$2")//insere o - depois de 4 caracteres
    return "(" + v
}

function modelofonecel(v){
    v=v.replace(/\D/g, "") //serve para não acceitar letras, somente números
    v=v.replace(/(\d{1})(\d{9})$/,"$1) $2")//insere o ) com espaço após depois de 9 caracteres
    v=v.replace(/(\d{1})(\d{4})$/,"$1-$2")//insere o - depois de 4 caracteres
    return "(" + v
}

function modelocep(v){
    v=v.replace(/\D/g, "") //serve para não aceitar letras, somente números
    v=v.replace(/(\d{1})(\d{3})$/,"$1-$2")//insere o - depois de 3 caracteres
    return v
}

function buscacep(recebecep){
    recebecep=recebecep.replace(/\D/g, "")//comando para remover o hífem
    url="https://viacep.com.br/ws/" + recebecep + "/json/?callback=preenchecampos"
	criascript=document.createElement("script")
	criascript.src=url
	document.querySelector("head").appendChild(criascript)
}

function preenchecampos(respostacorreios){
	if(respostacorreios.erro){
		alert("o CEP digitado não foi encontrado, favor verificare digitar novamente um CEP válido")
			}else{
				document.formvalida.fend.value=respostacorreios.logradouro
				document.formvalida.fbairro.value=respostacorreios.bairro
				document.formvalida.fcidade.value=respostacorreios.localidade
				document.formvalida.fuf.value=respostacorreios.uf
			}
}