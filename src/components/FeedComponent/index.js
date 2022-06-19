import React, { useState } from "react";
import { Cards } from "./Cards";
import "./styles/index.scss";

const cards = [
  {
    id: 0,
    title: "Нямушка",
    subtitle1: "Сказочное заморское яство",
    subtitle2: "с фуа-гра",
    description: "10 порций мышь в подарок",
    weigth: 0.5,
    text_selected: "Печень утки разварная с артишоками.",
    disabled: false,
  },
  {
    id: 1,
    title: "Нямушка",
    subtitle1: "Сказочное заморское яство",
    subtitle2: "с рыбой",
    description: "40 порций 2 мыши в подарок",
    weigth: 2,
    text_selected: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    disabled: false,
  },
  {
    id: 2,
    title: "Нямушка",
    subtitle1: "Сказочное заморское яство",
    subtitle2: "с курой",
    description: "100 порций 5 мышей в подарок заказчик доволен",
    weigth: 5,
    text_selected: "Филе из цыплят с трюфелями в бульоне.",
    disabled: true,
  },
];

export const FeedComponent = () => {
  const [arrSelected, setArrSelected] = useState([]);

  const handleSelected = (id) => {
    if (arrSelected.includes(id)) {
      setArrSelected((prevState) => {
        return prevState.filter((cardId) => cardId !== id)
    });
    } else {
      setArrSelected((prevState) => ([...prevState, id]) );
    }
  };

  return (
    <main>
      <div className="feed">
        <h1 className="feed__title">Ты сегодня покормил кота?</h1>
        <Cards
          cards={cards}
          arrSelected={arrSelected}
          onSelected={handleSelected}
        />
      </div>
    </main>
  );
};
