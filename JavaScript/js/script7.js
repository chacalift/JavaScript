// JavaScript Document
function respcalc(){
    //recebendo os dados do formulário
    var recv1=Number(document.formcalc.v1.value)//Number(), declaração da variável como número
    var recv2=Number(document.formcalc.v2.value)
    var recconta=document.formcalc.conta.value
    
if(recconta == "mais"){
    var resposta=recv1+recv2
}else if(recconta == "menos"){
    var resposta=recv1-recv2
}else if(recconta == "vezes"){
    var resposta=recv1*recv2
}else if(recconta == "divide"){
    var resposta=recv1/recv2
}else{
    var resposta="cálculo Inválido, favor verificar se foi inseridos os valores e a conta a ser realizada."
}
    alert("Resposta: " + resposta)
}
