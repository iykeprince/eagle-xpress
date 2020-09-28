import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./components/Default";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Track from './pages/Track';
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about-us' component={About} />
          <Route exact path='/contact-us' component={Contact} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/track' component={Track} />
        </Switch>
      </DefaultLayout>
    </Router>
  );
}

export default App;
