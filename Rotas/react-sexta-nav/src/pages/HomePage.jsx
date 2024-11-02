import { useState } from "react";
import { data } from "../mock/data";

function HomePage(){
    const [pessoas, setPessoas] = useState([]);

    function handleSubmit(){
        const objPessoa = {nome:"oi"}
        data.push(objPessoa);
        setPessoas(...pessoas, data)
    }


    return <>
        <button onClick={handleSubmit}>Salvar Dados</button>
        {pessoas.map(item => <h1>{item.nome}</h1>)}
    </>
}

export default HomePage;