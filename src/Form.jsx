import { useState } from "react";

function Form({onAddUsuario}) {

    const[nombre, setNombre] = useState("");
    const[apellido, setApellido] = useState("");
    const[messi, setMessi] = useState("");

const handleSubmit = (e)=>{
    e.preventDefault();

    if(nombre.length < 3  || nombre.charAt(0) == ""){
        return(alert("“Por favor chequea que la información sea correcta”"))
    }

    if(apellido.length < 6){
        return(alert("“Por favor chequea que la información sea correcta”"))
    }

    if (nombre && apellido && messi) {
        onAddUsuario({nombre,apellido,messi})
        setNombre("");
        setApellido("");
        setMessi("");
    }
};

return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="Nombre">Nombre :</label>
        <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
        <label htmlFor="Apellido">Apellido: </label>
        <input type="text" placeholder="Ingrese su apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)} />
        <label htmlFor="Mejor jugador de la historia">Mejor jugador de futbol de la historia: </label>
        <input type="text" placeholder="ayudita: messi" value={messi} onChange={(e)=>setMessi(e.target.value)} />
        <button type="submit">Enviar Respuesta</button>
    </form>
)
}

export default Form;