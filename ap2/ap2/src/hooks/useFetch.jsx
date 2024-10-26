import { useEffect, useState } from "react";

export function useFetch(url) {
    
    const [cep, setCep] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        async function buscaCep() {
            setLoading(true);
            setError(null);
            setCep(null);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Falha na requisição");
                }
                const jsonCep = await response.json();
                setCep(jsonCep);
            } catch (error) {
                setError("Error: " + error.message);
            } finally {
                setLoading(false);
            }
        }

        buscaCep();
    }, [url]);

    return { cep, loading, error };
}