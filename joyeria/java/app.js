const menu = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion");
const imagenes = document.querySelectorAll("img");
const btnTodos = document.querySelector(".todo");
const btnEnsaladas = document.querySelector(".ensaladas");
const btnPasta = document.querySelector(".pasta");
const btnPizza = document.querySelector(".pizza");
const btnPostres = document.querySelector(".postres");
const contenedorPlatillos = document.querySelector(".platillos");

document.addEventListener("DOMContentLoaded", () => {
    eventos();
    platillos();
});


const eventos = () => {
    menu.addEventListener("click", abrirMenu);   // esta es otra forma de escribir (a)
}

const abrirMenu = () => {
    navegacion.classList.remove("ocultar");
    botonCerrar();
} //asi se ve mas limpio el cod (B) esat es  otra forma


const botonCerrar = () => {
    const btnCerrar = document.createElement("p");
    const overlay = document.createElement("div");
    overlay.classList.add("pantalla-completa");
    const body = document.querySelector("body");
    if (document.querySelectorAll(".pantalla-completa").length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = "x";
    btnCerrar.classList.add("btn-cerrar");
    // while(navegacion.children[5]){ esta es otra forma para eviatar 
    //que se vaya agregando el btn cerrar como parrafo
    //   navegacion.removeChild(navegacion.children[5]);
    //}
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);
}


/*lesysi load se muestran las imagnes de forma asincronica para evitar que se  lentegee al cargar la pagina imagenes */
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    });
});

/*llega hasta aqui*/

imagenes.forEach(imagen => {
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) => {
    boton.addEventListener("click", () => {
        navegacion.classList.add("ocultar");
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function () {
        overlay.remove();
        navegacion.classList.add("ocultar");
        boton.remove();
    }
}



const platillos = () => {
    const platillosArreglo = [];
    const platillos = document.querySelectorAll(".platillo");
  //  platillos.forEach(platillo => platillosArreglo = [...platillosArreglo, platillo]);
    platillos.forEach(platillo => platillosArreglo.push(platillo));


    const ensaladas = platillosArreglo.filter(ensalada => ensalada.getAttribute("data-platillo") === "ensalada");
    const pastas = platillosArreglo.filter(pasta => pasta.getAttribute("data-platillo") === "pasta");
    const pizzas = platillosArreglo.filter(pizza => pizza.getAttribute("data-platillo") === "pizza");
    const postres = platillosArreglo.filter(postre => postre.getAttribute("data-platillo") === "postre");

    mostrarPlatillos(ensaladas, pastas, pizzas, postres, platillosArreglo);

}


// esta funcion va recibirel nuevo arreglo de" platillosArreglo" 

const mostrarPlatillos = (ensaladas, pastas, pizzas, postres, todos) => {
    btnEnsaladas.addEventListener("click", ()=>{
        limpiarHtml(contenedorPlatillos);
        ensaladas.forEach(ensalada => contenedorPlatillos.appendChild(ensalada));
    });

    btnPasta.addEventListener("click", ()=>{
        limpiarHtml(contenedorPlatillos);
        pastas.forEach(pasta => contenedorPlatillos.appendChild(pasta));
    });

    btnPizza.addEventListener("click", ()=>{
        limpiarHtml(contenedorPlatillos);
        pizzas.forEach(pizza => contenedorPlatillos.appendChild(pizza));
    });

    btnPostres.addEventListener("click", ()=>{
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre => contenedorPlatillos.appendChild(postre));
    });

    btnTodos.addEventListener("click",()=>{
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo=> contenedorPlatillos.appendChild(todo));
    });
}


const limpiarHtml = (contenedor)=>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}






/* Notas de explicacion de las funciones  - refresh 


funcion flecha  ya no es necesario poner el return
en funcion declaration no se pude hacer
//hoisting -- la forma en la que se ejecuta el codigo


//function declaration

function sumar(){
    console.log("function declaration", 2+2);

}

//arrow function o function expresion

const sumar2 = () =>{
    console.log("funcion de felcha", 3+3);    
}*/