export const GeneralForm =({handleStep, data, setData}) => {
const handleChange = (e) =>{
    console.log(e.target.name);
    console.log(e.target.value);
    
    setData({
        ...data,
        [e.target.name]:e.target.value
    })
    
}


    return (
        <div>
            <h1>Informacion General</h1>
            <div>
                <input onChange={handleChange} name="name" required placeholder="Nombre" type="text" />
                <input onChange={handleChange} name="lastName" required placeholder="Apellido" type="text" />
                <input onChange={handleChange} name="email" required placeholder="Correo" type="email" />
                <input onChange={handleChange}  name="phone" required placeholder="Telefono" type="tel" />
 
                <input onClick={handleStep} value={"Siguiente"} type="button" />
            </div>

        </div>
    )
}