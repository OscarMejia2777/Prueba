export const BillForm = ({handleStep, data, setData}) => {

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
            <h1>Direccion de facturacion</h1>
            <div>
                <input onChange={handleChange} name="billCountry" required placeholder="Pais" type="text" />
                <input onChange={handleChange} name="billDeparment" required placeholder="Departameno" type="text" />
                <input onChange={handleChange} name="billMunicipalit" required placeholder="Municipio" type="text" />

                <select onChange={handleChange} name="billComplement" required> 
                    <option value="value1">Jucuapa</option>
                    <option value="value2">San Miguel</option>
                    <option value="value3">Usulutan</option>
                </select>
              
                
                
                <input onClick={handleStep} value={"siguiente"} type="button" />
            </div>
            </div>
    )
}