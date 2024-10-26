

function Formulario({setPessoas, data}) {
    function handleSubmit(event){
        event.preventDefault()
        const form = new FormData(event.target)
        const pessoa = {
            name:form.get("nome"),
            fone:form.get("fone"),
            participant:form.get("participant"),
            paid:form.get("paid")
        }
        setPessoas([...data,pessoa])

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nome" placeholder="Nome Completo:" /><br />
                <input type="number" name="fone" placeholder="Telefone:" /><br />
                <div>
                    Egresso/Convidado <br />
                    <input type="radio" name="participant" value="true" />
                    <label htmlFor="sim">Sim</label>
                    <input type="radio" name="participant" value="false" />
                    <label htmlFor="nao">Não</label><br />
                </div>
                <div>
                    Pago <br />
                    <input type="radio" name="paid" value="true" />
                    <label htmlFor="sim">Sim</label>
                    <input type="radio" name="paid" value="false" />
                    <label htmlFor="nao">Não</label><br />
                </div>
                <div>
                    Comprovante <br />
                    <input type="text" placeholder="link comprovante" />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}

export default Formulario;