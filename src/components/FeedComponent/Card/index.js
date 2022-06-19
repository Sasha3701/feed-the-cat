import React, { useState } from "react";
import { formatWight } from "../../../utils";
import catIcon from "../../../images/cat.png";
import classNames from "classnames";
import "./styles/index.scss";

export const Card = ({ card, isSelected, onSelected }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    weigth,
    id,
    disabled,
    text_selected,
    subtitle2,
    subtitle1,
    title,
    values,
  } = card;

  const handleClick = () => {
    onSelected(id);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={classNames("card", {
          card_selected: isSelected,
          card_hovered: isHovered,
          card_disabled: disabled,
          card_full: isSelected && isHovered,
        })}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card__triangle" />
        <div className="card__rectangle" />
        <div className="card__square">
          <img className="card__img" src={catIcon} alt="cat-funbox" />
        </div>
        <div className="card__border" />
        <div className="card__content">
          <p
            className={classNames("card__manufacturer", {
              card__manufacturer_hovered: isHovered && isSelected,
            })}
          >
            {isHovered && isSelected ? "Котэ не одобряет?" : subtitle1}
          </p>
          <h2 className="card__title">{title}</h2>
          <p className="card__subtitle">{subtitle2}</p>
          <ul className="card__values">
            {values.map(({ id, count, name }) => (
              <li key={id}>
                {count ? <span className="card__count">{count} </span> : null}
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={classNames("weight", {
            weight_selected: isSelected,
            weight_hovered: isHovered,
            weight_disabled: disabled,
            weight_full: isSelected && isHovered,
          })}
        >
          <span className="weight__value">{formatWight(weigth)}</span>
          <span className="weight__dimension">кг</span>
        </div>
      </div>
      <div
        className={classNames("buy", {
          buy_disabled: disabled,
        })}
      >
        {disabled ? (
          <p>Печалька, {subtitle2} закончился.</p>
        ) : isSelected ? (
          <p>{text_selected}</p>
        ) : (
          <p>
            Чего сидишь? Порадуй котэ,{" "}
            <span
              onClick={handleClick}
              className={classNames("buy__action", {
                buy__action_hovered: isHovered,
              })}
            >
              купи.
            </span>
          </p>
        )}
      </div>
    </>
  );
};
