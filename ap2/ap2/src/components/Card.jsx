function Card({nome, fone, participante, pagamento, imagemUsuario}) {
    return (
        <div>
            <div >
                {imagemUsuario && (
                    <img src={imagemUsuario} alt="User" style={{ width: "150px", height: "150px", borderRadius: "50%", border: "solid 1px" }} />
                )}
                <p>{nome}</p>
                <p>{fone}</p>
                <p>{participante}</p>
                <p>{pagamento}</p>
            </div>
        </div>
    );
}

export default Card;