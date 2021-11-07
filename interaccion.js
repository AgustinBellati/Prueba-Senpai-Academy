//esta pagina la habia empezado hace unos meses 
//la idea es que cada tarjetita representa un un device y el usuario que lo ocupe se registre 
//


var pda =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,"panel1","panel2"]
//console.log(pda);
//
//

function repartetarjetas(){
    var mesa=document.querySelector("#container");
    mesa.innerHTML="";
   
    pda.forEach(function(elemento){
        var tarjeta=document.createElement("div");
        
        tarjeta.innerHTML=(
            '<div class="item">'+
        '<img src="build/img/carga-del-telefono.svg" alt="">'+elemento+
      
    "</div>"
        );
        mesa.appendChild(tarjeta);
        });
}

repartetarjetas();

function enUso(){
    
  this.classList.add("noDisponible") 
    this.innerHTML= '<div class="formulario" >'+
    '<form >'+
        '<input type="text"'+ 
        'placeholder="nombre">'+
        '<input type=time>'+
    '</form>'+
'</div>;'

}



document.querySelectorAll(".item").forEach(function(elemento){
    elemento.addEventListener("click",enUso);
}
);
 


