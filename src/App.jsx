import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Main from "./views/main";

function App() {
  // Buscador para la página
  const [search, setSearch] = useState("");

  // LOGIN

 
  const [users, setUsers] = useState([{ user: "JavaSports", pass: "JavaSports_1", role: "admin" }]);

  const USERS = [{ user: "JavaSports", pass: "JavaSports_1", role: "admin" }];


  const [auth, setAuth] = useState({ user: "", pass: "", role: "" });

  const addUser = (u) => {
    setUsers([...users, u]);
  };

  const validate = (u, p) => {
    const userFound = users.find((user) => user.user === u);
    const passOk = p === userFound.pass;

    return userFound && passOk;
  };
  const login = (u) => {
    const userFound = users.find((user) => user.user === u);

    setAuth({ user: userFound.user, role: userFound.role });
  };
  const logout = () => {
    setAuth({ user: "", role: "" });
  };

  // MOCK
  const Mock = {
    id: "1",
    categories: "football",
    title: "Gabriel Jesus is not the perfect striker but..",
    img: "/img/imgSection.webp",
    imgTitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    description:
      "Five-nil. But then, Manchester City just look so strong at the moment. Still: five-nil. But that injury to Bukayo Saka, how much of a blow could that be? Anyway, it was five-nil. But those Nottingham Forest chances, the Jesse Lingard shot where Gabriel Magalhães basically passes it straight to him, one day those are going to cost you. And yet, check the scoreboard, girls and boys: five-nil. It is the eternal gift of Arsenal fans to be able to identify the potential anxiety in virtually any situation, however favourable or triumphant. Pleasure is simply misery deferred. Most people look for crumbs of comfort; Arsenal fans look for crumbs of concern, scan the fixture list for oncoming hazards, scan every horizon for grey clouds. And so, even a routine and rampant 5-0 victory comes with its own quantum of unease.",
    imgTwo: "/img/imgSection2.webp",
    synopsis:
      "Of course, as anyone who has seen Jesus play will be able to tell you, this is not all you get. One of the reasons it feels unfair judging Jesus by the output of a conventional striker is that his input is not that of a conventional striker. Of his 72 touches, only 16 came in the Forest penalty area. Thirteen were in his own half. The vast majority, in fact, were on the left wing, with another little cluster around the left edge of the centre circle. He attempted more tackles than any other Arsenal player. Jesus is, in effect, a ball-winning wide midfielder who does striking for a little extra cash.",
  };
  const [mockSections, setMockSections] = useState({});
  useEffect(() => {
    setMockSections(Mock);
  }, []);



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



  useEffect(() => {
    fetch('https://java-sports-back.vercel.app/comments/all')
    .then((res)=>res.json())
    .then((json)=>setCommentsContainer(json))
    
  }, [])
  


  // USUARIOS
  const [usersA, setUsersA] = useState([{}]);
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

        mockSections={mockSections}
        search={search}
        setSearch={setSearch}
        articles={articles}
        setArticles={setArticles}
        users={usersA}
        setUsers={setUsersA}
      />
    </BrowserRouter>
  );
}

export default App;
