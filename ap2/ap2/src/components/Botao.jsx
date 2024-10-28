function Botao({ nome , click}) {
    return (
        <button style={{ display: "flex", padding: "auto" }} type="submit" onClick={click}> {nome}</button>
    );
}

export default Botao;