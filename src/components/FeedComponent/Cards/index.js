import React from "react";
import { Card } from "../Card";
import "./styles/index.scss";

export const Cards = ({ cards, arrSelected, onSelected }) => {
  return (
    <div className="cards">
      <ul className="cards__list">
        {cards.map((card) => (
          <li key={card.id}>
            <Card
              card={card}
              isSelected={arrSelected.includes(card.id)}
              onSelected={onSelected}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
