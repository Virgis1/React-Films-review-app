
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import NavBar from "./components/NavBar";
import { Anime } from "./Pages/Anime";
import { Movies } from "./Pages/Movies";
import { TvSeries } from "./Pages/TvSeries";
import { Trending } from './Pages/Trending';
import { Comedy } from './Pages/Comedy';
import { Horror } from "./Pages/Horror";
import { Romance } from "./Pages/Romance";
import { Crime } from "./Pages/Crime";
import { Search } from "./Pages/Search";

function App() {
  return (
        <>
          <Header />
        <Router>
          <NavBar />
          <div className="pages">
            <Switch>
              <Route exact path="/" component={Trending}/>
              <Route path="/movies" component={Movies}/>
              <Route path="/TvSeries" component={TvSeries}/>
              <Route path="/animation" component={Anime}/>
              <Route path="/comedy" component={Comedy}/>
              <Route path="/horror" component={Horror}/>
              <Route path="/romance" component={Romance}/>
              <Route path="/crime" component={Crime}/>
              <Route path="/search" component={Search}/>
            </Switch>
          </div>
          
        </Router>  
        </>

  );
}

export default App;
