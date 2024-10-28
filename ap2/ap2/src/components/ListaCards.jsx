import React from 'react';
import Card from './Card';

function ListaCards({cardsData}) {
  return (
    <div>
      
      <div >
        {cardsData.map((card) => (
          <div> 
            <Card
              imagemUsuario={card.imagemUsuario}
              alt="Foto Usuário"
              nome={card.nome}
              fone={card.fone}
              participante={card.participante ? "Egresso/Convidado" : "Estudante"}
              pagamento={card.pagamento ? "Confirmado" : "Não confirmado"}
            />
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default ListaCards;