import React from 'react';
import Card from './Card'; // Importando o Card

function ListaCards({cardsData}) {
  return (
    <div>
      
      <div >
        {cardsData.map((card) => (
          <div> 
            <Card
              srcImage={card.srcImage}
              alt="Foto de perfil"
              style={{borderRadius: '50%'}}
              nome={card.nome}
              fone={card.telefone}
              participante={card.egresso_convidado ? "Egresso/Convidado" : "Estudante"}
              pagamento={card.pago ? "Confirmado" : "Não confirmado"}
            />
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default ListaCards;