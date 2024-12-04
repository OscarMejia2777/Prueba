export const ShipForm = ({data, setData}) => {

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
            <h1>Direccion de Envio</h1>
            <div>
                <input onChange={handleChange}  name="shipCountry" required placeholder="Pais" type="text" />
                <input onChange={handleChange} name="shipDeparment" required placeholder="Departameno" type="text" />
                <input onChange={handleChange} name="shipMunicipalit" required placeholder="Municipio" type="text" />
                <select name="shipComplement" required> 
                    <option  value="value1">Jucuapa</option>
                    <option value="value2">San Miguel</option>
                    <option value="value3">Usulutan</option>
                </select>

                <input type="submit" />
            </div>
            </div>
    )
}