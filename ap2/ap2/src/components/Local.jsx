import Botao from "./Botao";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

function Local({user}) {
    const [cepEvento, setCepEvento] = useState(["95560000"]); // Estado para o CEP

    // Usa o hook useFetch para buscar dados na API do ViaCEP
    const { cep } = useFetch(`https://viacep.com.br/ws/${cepEvento}/json/`); 

    function handleButton() {
        // Você pode definir um novo CEP aqui, se desejar
        const novoCep = "88990000"; // Ou qualquer outro CEP
        setCepEvento(novoCep); // Atualiza o estado com o novo CEP
    }

    return ( 
        <>  
            {cep && (       // Exibe o conteúdo apenas se o CEP foi buscado
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
        </> //Fragment --> Agrupa vários elementos JSX
    );
}

export default Local;