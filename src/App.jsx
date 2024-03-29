import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Main from "./views/main";
import { useLocation } from "react-router-dom";


function App() {
  //Indicador de categoria id
  const [sectionByCategory, setSectionByCategory] = useState("");

  // estado semaforo
  const [action, setAction] = useState(false);

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
    });
    usersA.push(u);
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
      .then((json) => setArticles(json))
      .finally(()=>setAction(false));
      
  }, [action]);

  //COMENTARIOS

  useEffect(() => {
    fetch("https://java-sports-back.vercel.app/comments/all")
      .then((res) => res.json())
      .then((json) => setCommentsContainer(json));
  }, [isLoaded]);

  // USUARIOS

  useEffect(() => {
    fetch("https://java-sports-back.vercel.app/users/all")
      .then((res) => res.json())
      .then((json) => setUsersA(json));
  }, [isLoaded]);


  const confirmDEL = (titleNews) => {
    const index = articles.map((article) => article.title).indexOf(titleNews);
    articles.splice(index, 1);
  };

  const confirmDELUsers = (userName) => {
    if(userName !== "Valentina" || "Eduardo"){
      const index = usersA.map((user) => user.name).indexOf(userName);
      usersA.splice(index, 1);
    }
   
  };
  const top =()=>{
    window.scrollTo(0, 0);
  }
  return (
    <BrowserRouter>
    <ScrollToTop />
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
        action={action}
        setAction={setAction}
        confirmDEL={confirmDEL}
        confirmDELUsers={confirmDELUsers}
        top={top}
      />
    </BrowserRouter>
  );
}

export default App;
