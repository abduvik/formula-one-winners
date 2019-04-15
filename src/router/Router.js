import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Winners } from "../pages/winners/Winners";


export default () => (
    <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/winners/:year" exact component={Winners} />
    </BrowserRouter>
)