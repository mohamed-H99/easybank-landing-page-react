import { useState, useEffect } from "react";
import Home from "./views/Home";
import Error from "./views/Error";
import AppBar from "./components/AppBar";
import AppFooter from "./components/AppFooter";
import { Switch, Route, Redirect } from "react-router-dom";
import db from "./data.json";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState((prev) => ({ ...prev, ...db }));
    return () => {};
  }, []);

  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <Home data={state} />
        </Route>
        <Route path="/404" exact>
          <Error />
        </Route>
        <Redirect to="/404" />
      </Switch>
      <AppFooter />
    </>
  );
}

export default App;
