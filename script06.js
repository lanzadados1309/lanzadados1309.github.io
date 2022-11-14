

   function lanzarDado(){
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
       
     
        }

    