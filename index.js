
const tarea = document.getElementById("tarea");
const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");
const eliminar = document.getElementById("eliminar");


const arrayLista = []

const agregarTarea = (e)=>{
    e.preventDefault()
    arrayLista.push({nombre:tarea.value,estado:true}); // ingreso el nombre de la tarea e ingreso el estado inicial en false
    localStorage.setItem("listaTareas", JSON.stringify(arrayLista));
    mostrarTarea(); 
}


const eliminarTarea = (e)=>{
    let indice = e.target.attributes.class.value
    let arreglo = arrayLista.splice(indice,1)
    console.log(arreglo)
    //mostrarTarea(); 
}

lista.addEventListener("click", eliminarTarea)


const mostrarTarea =()=>{
    const div = document.createElement("div");
    div.classList.add("tarea")

    arrayLista.forEach((el, id)=> {

        if (el.estado === false ){
            div.innerHTML =`  <p> ${el.nombre}  </p>  <button id ="sinCompletar"> Sin Completado </button> <button id="eliminar" class="${id}"> Eliminar </button>`
        }else{
            div.classList.add("completado")
            div.innerHTML =`  <p> ${el.nombre}  </p>  <button id = "completado"> Completado </button> <button id="eliminar" class="${id}"> Eliminar </button>`
        }
    
        lista.appendChild(div)
    })



}











formulario.addEventListener("submit",agregarTarea);














