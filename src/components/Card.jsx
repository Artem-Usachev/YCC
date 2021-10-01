import React from "react";

const Card = ( {data} ) => {
  console.log(data.link)
  return (
    <div className="card">
          <div className="club__backdrop"></div>
      <img className="card__illustration" src={data.link} alt={data.name} />
      <h3 className="card__title">{data.name}</h3>
    </div>
  );
};
export default Card;
