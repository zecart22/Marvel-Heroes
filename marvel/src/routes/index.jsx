import { Route, Switch } from "react-router";
import { Dashboard } from "../pages/Dashboard";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { OficialApi } from "../pages/Contact";

import { useEffect, useState } from "react";

const Routes = () => {
  const [autenticador, setAutenticador] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:?token"));
    if (token) {
      return setAutenticador(true);
    }
  }, [autenticador]);

  return (
    <Switch>
      <Route exact path="/">
        <Home autenticador={autenticador} />
      </Route>

      <Route exact path="/login">
        <Login autenticador={autenticador} setAutenticador={setAutenticador} />
      </Route>

      <Route path="/oficialapi">
        <OficialApi />
      </Route>

      <Route path="/Dashboard">
        <Dashboard
          autenticador={autenticador}
          setAutenticador={setAutenticador}
        />
      </Route>
    </Switch>
  );
};

export default Routes;
