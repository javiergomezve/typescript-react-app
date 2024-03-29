import React, {Component} from 'react';
import { Switch, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';

import './App.css';
import Home from "./components/Home";
import Create from "./components/customer/Create";
import EditCustomer from "./components/customer/Edit";

class App extends Component<RouteComponentProps<any>> {

    public render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}> Home </Link>
                        </li>
                        <li>
                            <Link to={'/create'}> Create Customer </Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path={'/'} exact component={Home} />
                    <Route path={'/create'} exact component={Create} />
                    <Route path={'/edit/:id'} exact component={EditCustomer} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
