import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Main from "./views/main";

function App() {
  //Indicador de categoria id
  const [sectionByCategory, setSectionByCategory] = useState("");

  // Buscador para la página
  const [search, setSearch] = useState("");

  // LOGIN

  const [usersA, setUsersA] = useState();

  const [auth, setAuth] = useState({ user: "", pass: "", role: "" });

  const addUser = (u) => {
    fetch("https://java-sports-back.vercel.app/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(u),
    });
  };

  const validate = (u, p) => {
    const userFound = usersA.find((user) => user.name === u);
    return userFound;
  };

  const login = (u) => {
    const userFound = usersA.find((user) => user.name === u);

    setAuth({ user: userFound.name, role: userFound.role });
  };
  const logout = () => {
    setAuth({ user: "", role: "" });
  };

  // Comments Container

  const [commentsContainer, setCommentsContainer] = useState([]);

  const [articles, setArticles] = useState([{}]);

  // Acà consultara a la api y traerà todas las noticias.

  // OBTENER DATA DE LA API

  // ARTICULOS

  useEffect(() => {
    fetch("https://java-sports-back.vercel.app/articles/all")
      .then((res) => res.json())
      .then((json) => setArticles(json));
  }, [articles]);

  //COMENTARIOS

  useEffect(() => {
    fetch("https://java-sports-back.vercel.app/comments/all")
      .then((res) => res.json())
      .then((json) => setCommentsContainer(json));
  }, []);

  // USUARIOS

  useEffect(() => {
    fetch("https://java-sports-back.vercel.app/users/all")
      .then((res) => res.json())
      .then((json) => setUsersA(json));
  }, []);

  return (
    <BrowserRouter>
      <Main
        login={login}
        logout={logout}
        setAuth={setAuth}
        validate={validate}
        auth={auth}
        addUser={addUser}
        commentsContainer={commentsContainer}
        search={search}
        setSearch={setSearch}
        articles={articles}
        setArticles={setArticles}
        users={usersA}
        setUsers={setUsersA}
        sectionByCategory={sectionByCategory}
        setSectionByCategory={setSectionByCategory}
      />
    </BrowserRouter>
  );
}

export default App;
