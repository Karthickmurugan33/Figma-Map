import "./App.css";
import Nav from "../src/components/Nav";
import UserDetail from "./components/UserDetail";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Page3 from "./components/Page3";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact>
            <Nav />
            <UserDetail />
            <Map />
            <Footer />
          </Route>

          <Route path={"/page3"} exact>
            <Page3 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
