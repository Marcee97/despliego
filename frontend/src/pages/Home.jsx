

import { useState } from "react";
import client from "../api/axios.js";

export const Home = () => {




  const [datos, setDatos] = useState(null)

const peticion = async()=> {

    const res = await client.get("/prueba")
    setDatos(res.data) 
  
}


  return (
    <div>
        <button onClick={peticion}>PEddiree</button>

        <div>{datos && datos.map((items, index) => (
          <p key={index}>{items.nombre}</p>
        ))}</div>
    </div>
  )
}
