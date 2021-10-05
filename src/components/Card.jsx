import React from "react";

const Card = ({ data, className }) => {
  return (
    <div className="card">
      <div className="backdrop"></div>
      <img className="card__illustration" src={data.link} alt={data.name} />
      <h3 className={`card__title ${className}`}>
        {data.name}
        <br />
        {data.post}
      </h3>
    </div>
  );
};
export default Card;
