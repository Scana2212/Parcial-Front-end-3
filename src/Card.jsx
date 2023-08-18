function Card({usuarios}){
    return (
        <div>
            <h2>Datos Ingresados</h2>
            {usuarios.map((usuario,index)=>(
                <div key={index} className="card">
                    <h3>Nombre: {usuario.nombre},</h3>
                    <h3>Apellido: {usuario.apellido},</h3>
                    <h3>The Goat: {usuario.messi}</h3> 
                </div>
            ))}
        </div>
    )
}

export default Card;