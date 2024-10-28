import React from 'react';
import Card from './Card';

function ListaCards({cardsData}) {
  return (
    <div>
      
      <div >
        {cardsData.map((card, index) => (
          <div key={index} > {/* Adiciona a chave ao elemento div */}
            <Card
              srcImage={card.srcImage}
              alt="Foto de perfil"
              style={{borderRadius: '50%'}}
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