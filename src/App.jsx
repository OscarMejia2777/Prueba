import React from "react"
import {useState, useRef} from "react"
import { GeneralForm } from "./Components/GeneralForm"
import { BillForm } from "./Components/BillForm"
import { ShipForm } from "./Components/Shipform"

export const App = () =>{
    const [data, setData] = useState({
        name:"",
        lastName:"",
        email:"",
        phone:"",

        billCountry:"",
        billDeparment:"",
        billMunicipalit:"",
        billComplement:"",

        shipCountry:"",
        shipDeparment:"",
        shipMunicipalit:"",
        shipComplement:"",
    })


    const [step, setStep] = useState(1)
    const formRef = useRef()

    const handleStep = () => {
        if (formRef.current.checkValidity() == true) {
            setStep(step + 1 )
        }else{
            formRef.current.reportValidity()
        }
        
      
    }
 console.log(data);
 
    
    return (
        <form ref={formRef}>
            {step === 1 && <GeneralForm data={data} setData={setData} handleStep={handleStep} />}
            {step === 2 &&  <BillForm data={data} setData={setData} handleStep={handleStep} />}
            {step === 3 && <ShipForm  data={data} setData={setData} handleStep={handleStep} />}
        </form>
    )
}