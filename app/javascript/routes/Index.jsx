import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import FeedbackCategories from "../components/FeedbackCategories";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/feedback_categories" exact component={FeedbackCategories} />
        </Switch>
    </Router>
);