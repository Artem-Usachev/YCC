import React from "react";
const Card = ({ img, title }) => {
  return (
    <div className="card">
      <img className="card__illustration" src={img} alt={title} />
      <h3 className="card__title">{title}</h3>
    </div>
  );
};
export default Card;
