import { useState } from "react";

function Cep() {
    const [cep = '95560000', setCep] = useState()

    async function buscaCep() {
        const response = await fetch("https://viacep.com.br/ws/95560000/json/");
        const json = await response.json()

        setCep(json)
    }

    buscaCep();

    return (
        
        <div>
            
        </div>

    )
}

export default Cep;