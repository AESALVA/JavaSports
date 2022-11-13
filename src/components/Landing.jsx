import { Button } from "react-bootstrap";
import { useState } from "react";
import LoginModal from "./LoginModal";
import Sections from "./Sections";
import SectionsContainer from "./SectionsContainer";

import "../styles/landing.css";

import NewsList from "./NewsList";
import CarouselHome from "./CarouselHome";
import SearchPage from "./SearchPage";

const Landing = ({ page }) => {
  // La cascara es Landing.
  // Si se presiona buscar - el contenido de la cascara se actualiza a página de buscador

  return <>{page === 1 ? <NewsList /> : <SearchPage />}</>;
};
export default Landing;
