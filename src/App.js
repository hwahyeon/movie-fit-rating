import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/reactjs_movieapp/hello">
                    <h1>Hello</h1>
                </Route>
                <Route path="/reactjs_movieapp/movie/:id">
                    <Detail />
                </Route>
                <Route path="/reactjs_movieapp/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
