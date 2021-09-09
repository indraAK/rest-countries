import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { ThemeProvider } from "./contexts/theme-context";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main className="container mx-auto px-4">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/country/:alpha2Code">
              <Detail />
            </Route>
          </Switch>
        </Router>
      </main>
    </ThemeProvider>
  );
}

export default App;
