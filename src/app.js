import "./App.scss";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";
import {Switch, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import FilmAdd from "./pages/FilmAdd/FilmAdd";
import FilmView from "./pages/FilmView/FilmView";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/add" component={FilmAdd}/>
        <Route path="/view" component={FilmView}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
