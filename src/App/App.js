import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import router from '../routers'

function App() {
  return (
    <Router>
    <div className="App">

    <Switch>
              {router.map((value, key) => {
                return (
                  <Route
                    path={value.path}
                    exact = {(value.exact)}
                    component={value.component}
                    key={key}
                  />
                );
              })}
            </Switch>
    </div>
    </Router>
  );
}

export default App;
