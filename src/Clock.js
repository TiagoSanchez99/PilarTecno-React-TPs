import React, {useState, useEffect} from "react";

export const Clock = ({user}) => {

    const [date,setDate] = useState(new Date())

    const ejecutar = async () => {
        const operation = new Promise((resolve, reject)=>{
            const result = true
            setTimeout(()=>{
                if(result){
                    resolve("Operación exitosa")
                }else{
                    reject("Operación fracasó")
                }
            },2000)
        })
        
        console.log("Procesando operación...")
        
        operation.then(m=>console.log(m)).catch(e=>console.log(e))
        
    }


    useEffect(()=>{

        ejecutar()
        
        const timerID = setInterval(
            ()=> tick(),
            1000
        );

        return ()=>{
            clearInterval(timerID);
        }
    },[])

    const tick = () => {
        setDate(new Date())
    }

    return(
        <div>
            <h1>Hola MUNDO!</h1>
            <h2>Son las: {date.toLocaleTimeString()}.</h2>
        </div>
    )
} 

export default Clock