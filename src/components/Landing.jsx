import "../styles/landing.css";
import NewsList from "./NewsList";

const Landing = ({ articles, auth }) => {
  return (
    <>
      <NewsList articles={articles} auth={auth} />
    </>
  );
};
export default Landing;
