import React from "react";

function Card() {
  return (
    <div className="d-flex  align-items-center ">
      <div className="card" style={{ width: "19rem" }}>
        <img
          src="https://gtechdesign.net/images/joomlart/mejores-logos/disena-cono-2.jpg"
          className="card-img-top"
          alt="Placeholder"
        />
        <div className="card-body">
          <h5 className="card-title">HOLA</h5>
          <p className="card-text">
            Felicidades, acá tienes tu invitación al mejor evento.
          </p>
          <a href="https://www.ratingtrustcorporation.com/wp-content/uploads/2021/03/top-secret.jpg" className="btn btn-primary">
            Tu ubicación
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
