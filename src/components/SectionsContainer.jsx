import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Sections from "./Sections";
import E404 from "./E404";


const SectionsContainer = ({auth, commentsContainer}) => {

  const [article, setArticle] = useState("");
  const params = useParams();
 
  useEffect(() => {
    fetch(`https://java-sports-back.vercel.app/articles/${params.id}`)
      .then((res) => res.json())
      .then((json) => setArticle(json))
  }, [params.id]);

  return (
    <>
    {auth.user?(<Sections
        commentsContainer={commentsContainer}
        article={article}
        auth={auth}
      />):(<E404 title={"Debes iniciar sesión para ver las noticias"} />) }
      
    </>
  );
};

export default SectionsContainer;
