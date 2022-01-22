import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import BulkData from "./Components/BulkData";
import LazyLoad from "./Components/LazyLoad";
import Request from "./Components/Request";


function App() {
  return (

    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    name="Home"
                    render={props => <Home />}
                />
            </Switch>
            <Switch>
                <Route
                    exact
                    path="/bulk-data"
                    name="BulkData"
                    render={props => <BulkData/>}
                />
            </Switch>
            <Switch>
                <Route
                    exact
                    path="/lazy-load"
                    name="LazyLoad"
                    render={props => <LazyLoad/>}
                />
            </Switch>
            <Switch>
                <Route
                    exact
                    path="/request"
                    name="Request"
                    render={props => <Request/>}
                />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
