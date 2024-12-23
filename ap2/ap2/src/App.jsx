import React, { useState } from 'react';

import Local from './components/Local';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaCards from './components/ListaCards';

function App() {
  const [cardsData, setCardsData] = useState([]);

  const addCard = (Card) => {
    setCardsData([...cardsData, Card]);
  };

  return (
    <section style={{ display: "flex", width: "100%", flexDirection:"column", alignItems:"center"}}>
      <div>
        <Header evento={"Entrevero"} ulbraLogo={"https://s3-alpha-sig.figma.com/img/4e6d/9066/93eb1349338b462dfd3d37994b677eb4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vd3ef85J9Js~o78btzEAiW2X322fW0WkAUGATHX-5SSxZ1UZrh1Vd7EtNt6NwDZqFT67fEYgIHPAKevut6ILi53xhN5SgfYXqQSHdOuuetR7cLfes7ZxbS8NtStGjvFMNIVm5b7a9fJb2AmDqZoYbJCEPFFwqHkDy3esb7ar~eHvRpYX1ogmX0HwN0ubRdogxOTbJPl0tl2csWhzVbjjv1Hv7-~QRgC32Y7yfP3EXcgrr5ZuAazhs0EPO6RHd0EXlHiWVKQgHj~mPZkLuFOmwA5evy~HckaEcLhZ4Ys79ShSwIRoFM9-RYk1-0r3cVBTiaSjleyRthD7uwg2dYXfJA__"} />
      </div>

      <Local user={"Caetano"} />

      <div>
        <Formulario addCard={addCard} />

        <ListaCards cardsData={cardsData} />

      </div>

    </section>
  );
}

export default App;