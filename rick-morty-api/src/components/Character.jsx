import {useEffect, useState} from "react";
import"./Character.css";
import { useCharacter } from "../hooks/useCharacter";

export function Character(){
    
    const {allCharacters,getAllCharacters} = useCharacter() //desestructuracion 

    useEffect(() => {
        getAllCharacters();
     },[]);
    
  
   //el useEffect va a recibir una funcion callback, es decir el codigo a ejecutar 
   //recibe cuando se va a ejecutar

return (
    <div>
        <div className= "a">
            <div className="docs">
                <a>Docs</a>
        </div> 
        <div className="a">
            <a>About</a>
        </div>
        <a>SUPPORT US</a>
    </div>
        <div className="back">
            <h1>The Rick and Morty API</h1>
        </div> 
             <div className="back2">
             <ul className="cont">
              {
                 allCharacters.map((item,index ) => (
                <li key = {index}>
                 <div className="cont2">
                 <img className="img" src={item.image} />
                <div className="columna1">
                    <div className="inter1">    
                    <h2 className="nombres">{item.name}</h2>
                    <p className="muertoOVivo"> {item.name}</p>
                    {item.status === "Alive" ? (
                        <p className="emo">
                            {" "}
                            🟢 {item.status} - {item.species}
                        </p>
                    ) : (
                        <p className="emo">
                            {" "}
                            🔴 {item.status} - {species}
                        </p>
                    )}
                </div>
                <div className="inter2">  
                    <p className="subtitulos">Last Known Location</p>
                    <p className="UltimaLocalizacion">{item.origin.name}</p>
                </div>
                <div className="inter3"> 
                     <p className="subtitulos">First Seen in </p>
                     <p className="primera">{item.created}</p>
                 </div>
                 </div>
                 </div>
                 </li>
                 ))
               }
            </ul>
             </div>
    </div>
)
}
    