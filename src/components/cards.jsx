import React from "react";
import { Link } from "react-router-dom";
const Cards = (props) => {
  const { cards: data } = props;
  const cards = [...data];

  return (
    <div className="row">
      {cards.map((card) => (
        <div className="col-m-4">
          <div className="card">
            <div className="card-body">
              <h4
                className="card-title m-2"
                key={card.Name}>
                {card.Name}
              </h4>
              <p className="card-text" key={card.id}>
                {card.Details}
              </p>
              <Link
                to={card.api}
                className="btn btn-outline-dark">
                Visit {card.Name}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
