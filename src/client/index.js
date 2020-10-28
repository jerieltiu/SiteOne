import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './01-Navbar'
import Footer from './02-Footer'
import Home from './03-Home'
import Explore from './04-Explore'
import Individual_College from './05-Individual_College'
import Questions from './06-Questions'

export const ClientRoute = ({ component: Component , ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            <div>
                <Navbar />
                <Component {...props} />
                <Footer />
            </div>
        )} />
    )
}

function Client() {
    return (
        <Router>
            <Switch>
                <ClientRoute exact path="/" component={Home} />
                <ClientRoute exact path="/explore" component={Explore} />
                <ClientRoute exact path="/explore/:id" component={Individual_College} />
                <ClientRoute exact path="/questions" component={Questions} />
            </Switch>
        </Router>
    )
}

export default Client