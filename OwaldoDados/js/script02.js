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