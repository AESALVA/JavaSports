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

  // Loader

  const [isLoaded, setIsLoaded] = useState(false);

  // LOGIN

  const [usersA, setUsersA] = useState();

  const [auth, setAuth] = useState({ user: "", pass: "", role: "" });

  const addUser = (u) => {
    fetch("https://java-sports-back.vercel.app/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: u.name,
        mail: u.mail,
        password: u.password,
        role: u.role,
      }),
    })
    .then((res)=>res.json()
    .then((json)=>console.log(json)))
  };

  const validate = async (u, p) => {
    setIsLoaded(true);
    await fetch("https://java-sports-back.vercel.app/users/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: u, password: p }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (
          json.message === "Wrong Credentials" ||
          json.message === "User not found"
        ) {
          setAuth({ user: false, role: false });
        }
      });
  };

  const login = async (u, p) => {
    await fetch("https://java-sports-back.vercel.app/users/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: u, password: p }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.message === "User and password OK") {
          setAuth({ user: u, role: json.role });
        }
      })
      .catch((error) => setAuth({ user: false, role: false }))
      .finally(() => setIsLoaded(false));
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
  }, []);

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
        isLoaded={isLoaded}
        setIsLoaded={setIsLoaded}
       />
    </BrowserRouter>
  );
}

export default App;
