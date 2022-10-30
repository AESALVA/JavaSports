import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./views/Main";


function App() {
// LOGIN
const USERS = [
  {user: "admin", pass: "admin", role: "admin"},
  {user: "user", pass: "user", role: "user"},
];

const [auth, setAuth] = useState({user: "", role: ""});

const validate = (u, p) => {
  const userFound = USERS.find((user) => user.user === u);
  const passOk = p === userFound.pass;

  return userFound && passOk;
  
};
const login = (u) => {
  const userFound = USERS.find((user) => user.user === u);

  setAuth({user: userFound.user, role: userFound.role});
};
const logout = () => {
  setAuth({user: "", role: ""});
};


  return (
    <BrowserRouter>

      <Main login={login}
        logout={logout}
        setAuth={setAuth}
        validate={validate}
        auth={auth}
        />
      </BrowserRouter>
    
  );
}

export default App;
