import Container from "react-bootstrap/Container";
import News from "./News";
import "../styles/landing.css";
import { Row } from "react-bootstrap";
// import Publicity from "./Publicity";

const NewsList = ({ articles, auth }) => {
  return (
    <Container className="my-5">
      <Row className="m-0" md={3} xs={12}>
        {articles.map((item, i) => (
          <div className="spaceNews" key={i}>
            <News sizeCard="card-big" view="Home" article={item} auth={auth} />
          </div>
        ))}
      </Row>
    </Container>
    // <Container className="container-grid my-5">
    //   <div id="one-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[0]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="two-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[1]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="three-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[2]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="four-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[3]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="five-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[4]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="six-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[5]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="seven-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={newsImportant[0]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="eight-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[6]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="nine-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[7]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="ten-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[8]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="eleven-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[9]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="twelve-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[10]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="thirteen-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[11]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="fourteen-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[12]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="fifteen-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={newsImportant[1]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="sixteen-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[13]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="seventeen-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[14]}
    //       auth={auth}
    //     />
    //   </div>
    //   <div id="eighteen-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[15]}
    //       auth={auth}
    //     />
    //   </div>

    //   <div id="nineteen-card" className=" spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={articles[16]}
    //       auth={auth}
    //     />
    //   </div>

    //   <div id="twenty-card" className="spaceNews">
    //     <News
    //       sizeCard="card-big"
    //       view="Home"
    //       article={newsImportant[3]}
    //       auth={auth}
    //     />
    //   </div>
    // </Container>
  );
};

export default NewsList;
