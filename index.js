const inputTarea = document.getElementById("tarea");
const btnAgregar = document.getElementById("agregar");
const formTarea = document.getElementById("formTarea");
const listaTareas = document.getElementById("listaTareas");



function  validarSiHayTareas(){
    if(localStorage.getItem("listaTareas") === null || JSON.parse(localStorage.getItem("listaTareas")).length === 0 ){
        listaTareas.textContent = "No hay tareas"
    }else{
        mostrarTareas();
    }
}


const agregarTarea=(e)=>{
    e.preventDefault();
    const tarea = {
        nombre:inputTarea.value,
        estado: false,
    }
    if(localStorage.getItem("listaTareas") === null){
        let arrayTareas = [];
        arrayTareas.push(tarea);
        localStorage.setItem("listaTareas",JSON.stringify(arrayTareas));
    }else{
        let traerTareas = JSON.parse(localStorage.getItem("listaTareas"));
        traerTareas.push(tarea);
        localStorage.setItem("listaTareas",JSON.stringify(traerTareas)) 
    }

    inputTarea.value="";
    mostrarTareas();
}

const mostrarTareas= () =>{
   
    let traerTareas = JSON.parse(localStorage.getItem("listaTareas"));
    let lista = "";
    listaTareas.textContent = ""

        for (let i = 0; i < traerTareas.length; i++) {
            lista = document.createElement("li");
            
            if(traerTareas[i].estado === true){
                lista.classList.add("cambiaColor");
            }
            lista.innerHTML = `${traerTareas[i].nombre} <button class = "estado" >  </button> <button class="eliminar" " ></button>`
           
            listaTareas.appendChild(lista)
        }
   
    
}



listaTareas.addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminar")) {
        // Obtener el índice de la tarea
        const index = Array.from(listaTareas.children).indexOf(e.target.parentElement);

        // Llamar a la función eliminar con el índice
        eliminar(index);
    }

    if (e.target.classList.contains("estado")) {
        // Obtener el índice de la tarea
        const index = Array.from(listaTareas.children).indexOf(e.target.parentElement);

        // Llamar a la función eliminar con el índice
        tareaCompletada(index);
    }

     validarSiHayTareas();
});


const tareaCompletada = (id)=>{
        let traerTareas = JSON.parse(localStorage.getItem("listaTareas"));
        console.log(traerTareas[id].estado = true);
        console.log(traerTareas)
        localStorage.setItem("listaTareas",JSON.stringify(traerTareas));
        mostrarTareas();
}



function eliminar(id){
 
        let traerTareas = JSON.parse(localStorage.getItem("listaTareas"));
         traerTareas.splice(id,1);
         localStorage.setItem("listaTareas",JSON.stringify(traerTareas));
         mostrarTareas(); // al eliminar vuelvo a mostrar la lista de tareas

}





formTarea.addEventListener("submit",agregarTarea);
validarSiHayTareas();