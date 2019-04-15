import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Winners } from "../pages/winners/Winners";
import Header from "../components/header/Header";

export default () => (
  <BrowserRouter>
    <Header />

    <Route path="/" exact component={Home} />
    <Route path="/winners/:year" exact component={Winners} />
  </BrowserRouter>
);
