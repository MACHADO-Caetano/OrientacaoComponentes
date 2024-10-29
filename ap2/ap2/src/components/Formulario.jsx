import Botao from "./Botao";
import FormularioInput from "./FormularioInput";

function Formulario({ addCard }) {

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = new FormData(event.target)


        if (!form.get("nome") || !form.get("fone") || !form.get("imagemUsuario") || !form.get("participante") || !form.get("pagamento")) {
            alert('Campos incompletos');
            return;
        }

        const dados = {
            nome: form.get("nome"),
            telefone: form.get("fone"),
            imagemUsuario: form.get("imagemUsuario"),
            participante: form.get("participante"),
            pagamento: form.get("pagamento")
        }

        clearForms(event.target)
        addCard(dados);
    };

    function clearForms(form) {
        form.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset >
                <h6>Dados do Ingresso:</h6>

                <FormularioInput label={"Nome"} placeholder={"Digite seu nome"} name="nome" />
                <br />

                <FormularioInput label={"Telefone"} placeholder={"Digite seu telefone"} name="fone" />

                <div >
                    <p>Egresso/Convidado</p>
                    <input type="radio" id="sim" name="participante" value="true" />
                    <label htmlFor="sim">Sim</label>
                    <input type="radio" id="nao" name="participante" value="false" />
                    <label htmlFor="nao">Não</label>
                </div>

                <div >
                    <p>Pago</p>
                    <input type="radio" id="pago-sim" name="pagamento" value="true" />
                    <label htmlFor="pago-sim">Sim</label>
                    <input type="radio" id="pago-nao" name="pagamento" value="false" />
                    <label htmlFor="pago-nao">Não</label>
                </div>
                <br />
                <label>Foto</label>
                <br />
                <input
                    type="text"
                    id="imagemUsuario"
                    name="imagemUsuario"
                    placeholder="URL da imagem"
                />
                <br />

                <button type="submit">teste</button>
                <Botao nome={"Salvar"} colorButton="black" />

            </fieldset>
        </form>
    );
}

export default Formulario;