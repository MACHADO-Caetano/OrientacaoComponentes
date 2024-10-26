import { useEffect } from "react";

function useFetch(value){
    const [cep = '95560000', setCep] = useState();
    useEffect(() => {
        async function buscaCep() {
            const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
            const json = await response.json()

            setCep(json)
        }

        buscaCep();
        
    })
}

export default useFetch;