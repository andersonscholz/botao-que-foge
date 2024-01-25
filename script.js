function mensagemsim(){
    window.alert("Ótima escolha!")

}
function mensagemnao(){

    // tentei fazer um sistema para randomizar diferente mas ficou errado e era um código burro
    
    // var randompos = Math.floor(Math.random() *100) +1
    // if(randompos >50){
    //     var ltor = lefttoright()"nao.style.marginRight = novapos + 'px'";
    // }
    // else{
    //     var ltor = lefttoright"nao.style.marginRight = novapos + 'px'"
    // }
    var botao = document.getElementById('nao')
    var novapos = calcularnovapos1()
    var novapos2 = calcularnovapos2()
    nao.style.marginLeft = novapos + 'px'
    nao.style.marginTop = novapos2 + 'px'
    }
function calcularnovapos1(){
    var numeroaleatorio = Math.floor(Math.random() * 200) -100
    var deslocamento = numeroaleatorio
    var posatual = parseFloat(window.getComputedStyle(document.getElementById('nao')).marginLeft)
    return posatual + deslocamento
}
function calcularnovapos2(){
    var numeroaleatorio = Math.floor(Math.random() * 200) -100
    var deslocamento = numeroaleatorio
    var posatual = parseFloat(window.getComputedStyle(document.getElementById('nao')).marginLeft)
    return posatual + deslocamento
}
function sumir(){
    var suma = document.getElementById('nao') 
    suma.style.display = 'none'
    
}