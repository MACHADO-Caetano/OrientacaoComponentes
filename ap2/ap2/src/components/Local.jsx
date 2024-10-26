import Botao from "./Botao";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

function Local({user}) {
    const [cepEvento, setCepEvento] = useState(["95560000"]);

    
    const { cep } = useFetch(`https://viacep.com.br/ws/${cepEvento}/json/`); 

    function handleButton() {
        
        const novoCep = "88990000"; 
        setCepEvento(novoCep); 
    }

    return ( 
        <>  
            {cep && (       
                <>
                    <h2>Seja bem vindo, {user}</h2>

                    <div >
                        <Botao nome={"Localização"} onClick={handleButton}/>
                        <div >
                                <p>CEP: {cep.cep}</p>
                                <p>Cidade: {cep.localidade}</p>
                                <p>Bairro: Centro</p>
                                <p>Logradouro: Rua Universitária</p>
                                <p>HORÁRIO: 21h30</p>
                        </div>
                    </div>
                </>
            )}
        </> 
    );
}

export default Local;