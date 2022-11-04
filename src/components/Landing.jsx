import { Button } from "react-bootstrap";
import { useState } from "react";
import LoginModal from "./LoginModal";
import "../styles/landing.css";

import NewsList from "./NewsList";
import CarouselHome from "./CarouselHome";

const Landing = () => {
  return (
    <>
      <CarouselHome />
      <NewsList />
    </>
  );
};

export default Landing;
