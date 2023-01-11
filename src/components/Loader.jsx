import Container from "react-bootstrap/Container";
import "../styles/loader.css";

const Loader = () => {
  return (
    <Container>
        <div className="loader_container">
            <img src="../img/LogoJS.jpg" alt="loader" />
        </div>
    </Container>
  )
}

export default Loader