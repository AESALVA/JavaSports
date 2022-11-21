import { Button } from "react-bootstrap";
import LoginModal from "./LoginModal";
import Sections from "./Sections";
import SectionsContainer from "./SectionsContainer";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/landing.css";

import NewsList from "./NewsList";
import CarouselHome from "./CarouselHome";
import SearchContainer from "./SearchContainer";

const Landing = ({ articles, auth }) => {
  return (
    <>
      <NewsList MockArticle={articles} auth={auth} />
    </>
  );
};
export default Landing;
