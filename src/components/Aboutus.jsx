import React from "react";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <div className="col mb-5">
      <div className="d-flex justify-content-center mt-4">
        <h1 className="titulo-aboutus my-5 ">Sobre Nosotros</h1>
      </div>

      <div className="integrante row p-2">
        <div className="d-flex justify-content-center align-items-center my-3">
          <h2>Eduardo</h2>
        </div>
        <div className="d-flex justify-content-center flex-column">
          <div className="d-flex justify-content-center">
            <img
              src="../img/eduardo.jpeg"
              width={250}
              height={250}
              className="rounded-circle my-3 "
              alt=""
            />
          </div>
          <p className="textaboutus pb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            quasi obcaecati asperiores, ad eveniet libero voluptate, omnis eum,
            iste laboriosam sapiente a! Neque, dolore. Rerum non laborum in
            explicabo ipsa?
          </p>
        </div>
      </div>

      <div className="integrante row p-2">
        <div className="d-flex justify-content-center my-3">
          <h2>Valentina</h2>
        </div>
        <div className="d-flex justify-content-center flex-column">
          <div className="d-flex justify-content-center">
            <img
              src="../img/valentina.jpeg"
              width={250}
              height={250}
              className="rounded-circle my-3 d-flex justify-content-center"
              alt=""
            />
          </div>

          <p className="textaboutus pb-3">
            Tengo 21 años, soy de Buenos Aires. Actualmente me encuentro
            estudiando la Licenciatura de Informática en la Universidad Nacional
            de Quilmes.
          </p>
        </div>
      </div>

      <div className="integranteu row p-2">
        <div className="d-flex justify-content-center my-3">
          <h2>Joaquin</h2>
        </div>
        <div className="d-flex justify-content-center px-0 flex-column">
          <div className="d-flex justify-content-center">
            <img
              src="../img/joaquin.jpeg"
              width={250}
              height={250}
              className="rounded-circle my-3 d-flex justify-content-center"
              alt=""
            />
          </div>

          <p className="textaboutus pb-3">
            Soy un rosarino de 20 años, técnico electrónico y estoy interesado
            en la programación y la tecnología. Soy hincha de rosario central y
            actualmente me encuentro trabajando como técnico.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
