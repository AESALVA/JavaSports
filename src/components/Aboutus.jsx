import Container from "react-bootstrap/Container";
import "../styles/styles.css";
import "../styles/aboutus.css";
import imgEduardo from "../img/eduardo.jpeg";
import imgValentina from "../img/valentina.jpeg";

function Aboutus() {
  return (
    <Container className="main-container d-flex flex-column align-items-center">
      {/* COLUMN1 */}
      <div id="contact-title" className="my-5">
        <h4 className="">Sobre Nosotros!</h4>
      </div>
      {/* COLUMN2 */}
      <div id="contact-profiles">
        <div id="profile-valentina">
          <div className="profile-img">
            <img src={imgValentina} alt="perfil valentina" width={100} />
          </div>
          <div className="profile-title">
            <h4 className="text-center titulo-aboutus">Valentina Reigada</h4>
          </div>
          <div className="profile-content">
            <p className="text-center mt-3">
              Estudiante de Rolling Code Scholl <br /> y de la Licenciatura en
              Informática.
              <br /> Soy de la provincia de Buenos Aires, <br /> tengo 21 años.
            </p>
          </div>
        </div>
        <div id="profile-eduardo">
          <div className="profile-img">
            <img
              src="https://i.pinimg.com/736x/b3/b8/57/b3b85713a822ad3e2c5e1eb74af91554.jpg"
              alt="perfil eduardo"
              src={imgEduardo}
              alt="perfil eduardo"
              width={100}
            />
          </div>
          <div className="profile-title">
            <h4 className="text-center titulo-aboutus">Angel Eduardo Salva</h4>
          </div>
          <div className="profile-content">
            <p className="text-center mt-3">
              Estudiante de Rolling Code Scholl. <br /> Soy de la provincia de
              Tucumán, <br /> tengo 35 años.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Aboutus;
