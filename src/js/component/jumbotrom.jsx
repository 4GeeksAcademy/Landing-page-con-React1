import React from "react";

function Jumbotron() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3" style={{ textAlign: 'left' }}>
    <h1 className="display-1">Bienvenido</h1>
    <p className="lead">
      Si estas aca es porque te hice llegar mi invitacion, osea eres alguien importante.
    </p>
   
    <p>
      Esta es la ubicacion del lugar de la reunion revisa el boton.
    </p>
    <a className="btn btn-primary btn-lg" href="https://img.freepik.com/foto-gratis/simbolo-ubicacion-hermosa-playa_23-2149764155.jpg" role="button">
      Revisalo
    </a>
  </div>
  );
}

export default Jumbotron;
