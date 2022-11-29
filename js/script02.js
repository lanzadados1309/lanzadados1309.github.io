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


/*document.addEventListener("DOMContentLoaded",function(envet){



    
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
        resultado.classList.toggle("alert-warning");

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
   
    
});*/
/*let datos = [];
$("#contenido");

function cargar(){
    if(window.fetch != undefined){
        axios({
            method: "GET",
            url: "https://randomuser.me/api/?results=50"

            .then((resp) => {
                console.log(resp)
                
            })

            .catch((err) => console.log(err));
        })
        
        cargar.data.datos = resp.results;    
           
    }
}
*/





function cargar(){
    if(window.fetch != undefined){
        fetch("https://randomuser.me/api/?results=50")
            .then((resp) => {
                 return resp.ok == true 
                            ? Promise.resolve(resp)
                            : Promise.reject(resp);
            })
            .then((resp) => resp.json())
            .then((resp) => {
                datos = resp.results;
                mostrarDatos();
            })
            .catch((resp) => {
                console.log('Se produjo un error durante el proceso');
            });
    }else{
        console.log('Tu navegador no soporta fetch.');
    }
}

cargar();

let inicio = 0;
let final = 10;
let total = 50;

const mostrarDatos = () => {
    const fragment = document.createDocumentFragment();
    if(final >= total){
        console.log('Completo');
    }else{
        for (let i = inicio; i < final; i++) {
            const card = document.createElement("contenido");
            var div = $("div")
            div.animate({width: "600px"}, 1000);
            div.animate({height: "800px"}, 1000);
            div.animate({width: "600px"}, 1000);
            div.animate({height: "800px"}, 1000);
           
            
            const nombre = document.createElement("h2");
            const apellido = document.createElement("h3");
            const foto = document.createElement("img");
           /* $(document).on("ready" , function (){
                $(document).on("click" ,function(){
                    $(".contenido").toggleClass("contenido");
                    if($(".contenido").hasClass("contenido")){
                        $(".contenido").tex("rojo");
                    }else{
                        $(".contenido").tex("rojo:(");
                    }
                })
            })*/
           $("#datos").click(function(){
                $(".cards").slideDown(3000);
            
            })
            $("#datos").click(function(){
                $(".cards").slideUp(3000);
            
            })
        
            card.classList.add("cards");

          
            nombre.textContent = datos[i].name.first;
            apellido.textContent = datos[i].name.last;
            
            foto.src = datos[i].picture.thumbnail;
            card.appendChild(foto);
            card.appendChild(apellido);
            card.appendChild(nombre);
            fragment.appendChild(card);
           
            
        
        }
        inicio += 10;
        final += 10;    
        contenido.append(fragment);
       
    setObserver();
};

const setObserver = () => {
    const options = { threshold: 0.5}
    const observer = new IntersectionObserver(observar, options);
    observer.observe(contenido.lastElementChild);
}

const observar = (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            mostrarDatos();
        }
    })
    
}


};
