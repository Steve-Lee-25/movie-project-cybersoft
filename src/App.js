import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Signin from "./components/Auth/Signin/Index";
import Signup from "./components/Auth/Signup/Index";
import Booking from "./components/Booking/Index";
import Detail from "./components/Detail/Index";
import Home from "./components/Home/Index";
import News from "./components/News/Index";
import PageNotFound from "./components/PageNotFound/Index";

function App() {
  useEffect(() => {
    localStorage.setItem(
      "t",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjQiLCJIZXRIYW5TdHJpbmciOiIyMS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDI3MjMyMDAwMDAiLCJuYmYiOjE2MTYxNzMyMDAsImV4cCI6MTY0Mjg3MDgwMH0.2sSWVGy-3Ce9iJ8bIYmYOJ9aE1eu3fz07DtA2ECfiyk"
    );
  });
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* HOME */}
          <Route path="/" exact>
            <Home />
          </Route>
          {/* DETAIL */}
          <Route path="/detail">
            <Detail />
          </Route>
          {/* BOOKING */}
          <Route path="/booking">
            <Booking />
          </Route>
          {/* SIGN IN */}
          <Route path="/signin">
            <Signin />
          </Route>
          {/* SIGN UP */}
          <Route path="/signup">
            <Signup />
          </Route>
          {/* NEWS */}
          <Route path="/news">
            <News />
          </Route>
          {/* PAGE NOT FOUND */}
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
