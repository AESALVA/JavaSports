import Container from "react-bootstrap/Container";
import News from "./News";
import "../styles/landing.css";
// import Publicity from "./Publicity";

const NewsList = ({ articles, auth }) => {
  // console.log(articles[0].title);
  return (
    <Container className="container-grid my-5">
      <div id="one-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>
      <div id="two-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>
      <div id="three-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>
      <div id="four-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>
      <div id="five-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>
      <div id="six-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>
      <div id="seven-card" className="spaceNews">
        <News
          sizeCard="card-big"
          view="Home"
          article={articles[0]}
          auth={auth}
        />
      </div>
      <div id="eight-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>
      <div id="nine-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>
      <div id="ten-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>
      <div id="eleven-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>
      <div id="twelve-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>
      <div id="thirteen-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>
      <div id="fourteen-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>
      <div id="fifteen-card" className="spaceNews">
        <News
          sizeCard="card-big"
          view="Home"
          article={articles[0]}
          auth={auth}
        />
      </div>
      <div id="sixteen-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>
      <div id="seventeen-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>
      <div id="eighteen-card" className="spaceNews">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>

      <div id="nineteen-card" className=" ">
        <News sizeCard="" view="Home" article={articles[0]} auth={auth} />
      </div>

      <div id="twenty-card" className="">
        <News
          sizeCard="card-big"
          view="Home"
          article={articles[0]}
          auth={auth}
        />
      </div>
    </Container>
  );
};

export default NewsList;
