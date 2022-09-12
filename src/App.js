import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/hello" basename={process.env.PUBLIC_URL}>
                    <h1>Hello</h1>
                </Route>
                <Route path="/movie/:id" basename={process.env.PUBLIC_URL}>
                    <Detail />
                </Route>
                <Route path="/" basename={process.env.PUBLIC_URL}>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
