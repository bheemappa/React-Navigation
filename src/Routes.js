import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/Dashboard" component={Dashboard} />
                </Switch>
            </Router>
        )
    }
}
