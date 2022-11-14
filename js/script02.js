/*function lanzarDado(){
    var dado1 = document.getElementById("dado1");
    var dado2 = document.getElementById("dado2");
    var dado3 = document.getElementById("dado3");

    var puntos = document.getElementById("puntos");
    

    

    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 6) + 1;

    var dadoTotal = d1 + d2 + d3;
    dado1.innerHTML = d1;
    dado2.innerHTML = d2;
    dado3.innerHTML = d3;

    puntos.innerHTML = ""+dadoTotal+"";
   
  }*/


document.addEventListener("DOMContentLoaded",function(envet){



    
    const iPuntos = document.querySelector("#iPuntos");
    const resultado = document.querySelector("#resultado");
    const btnEvaluar = document.querySelector("#btnEvaluar");
   
 

    btnEvaluar.addEventListener("click", function(){
        let puntos = iPuntos.value;
        puntos = eval(puntos);
        let texto;
        let className;

        resultado.classList.toggle("visually-hidden");
       
        resultado.classList.toggle("alert-danger");
        resultado.classList.toggle("alert-success");
        resultado.classList.toggle("alert-warnning");

        if(puntos >= 6 && puntos < 12){
            texto = 'amarrillo.';
            className = 'alert-warning';
        }else if(puntos >= 12 && puntos < 19){
            texto = 'verde';
            className = 'alert-success';
        }else if(puntos >= 0){
            texto = 'rojo';
            className = 'alert-danger';
        }

        resultado.innerHTML = texto;
        resultado.classList.add(className);

    });
   
    
});
