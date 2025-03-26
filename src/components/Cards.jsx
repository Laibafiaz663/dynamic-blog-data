import React from "react";

const Cards = (props) => {
  console.log("***88", props);
  return (
    <>
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.data.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {props.data.subtitle}
            </h6>
            <p className="card-text">{props.data.description}</p>
            <a href="#" className="card-link">
              {props.data.link1}
            </a>
            <a href="#" className="card-link">
              {props.data.link2}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
