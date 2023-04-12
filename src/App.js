import React from "react";
import { useEffect} from "react";
import Header from "./components/Header";
import Home from "./components/Home";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseDetais from "./components/Course-details";
import Order from "./components/Order";
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App" >
    
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/course-details">
            <CourseDetais/>
          </Route>
          <Route exact path="/order">
            <Order/>
          </Route>
        </Switch>
      </Router>
 
    </div>
  );
}

export default App;
