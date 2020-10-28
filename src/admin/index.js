import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './01-Navbar'
import Coming_Soon from './02-Coming_Soon'
import Deadlines from './03-Deadlines'
import Questions from './04-Questions'
import Colleges from './05-Colleges'
import Add_College from './05-Colleges_Add'
import Colleges_Individual from './05-Colleges_Individual'
import Footer from './06-Footer'

// Admin Routes
export const AdminRoute = ({ component: Component , ...rest }) => {
    return (
        <Route {...rest} component={(props) => (
            <div>
                <Component {...props} />
            </div>
        )} />
    )
}

function Admin() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <AdminRoute exact path="/yultnbimscsXzBUKKhwaq@@@@4t4t4E9L4Xrr7;fadjsjfdsajfpjwa543666433lkjfU8Dq3q@534fgdgjtsryh8836jggjdid;;3flsZ" component={Coming_Soon} />
                <AdminRoute exact path="/yultnbimscsXzBUKKhwaq@@@@4t4t4E9L4Xrr7;fadjsjfdsajfpjwa543666433lkjfU8Dq3q@534fgdgjtsryh8836jggjdid;;3flsZ/deadlines" component={Deadlines} />
                <AdminRoute exact path="/yultnbimscsXzBUKKhwaq@@@@4t4t4E9L4Xrr7;fadjsjfdsajfpjwa543666433lkjfU8Dq3q@534fgdgjtsryh8836jggjdid;;3flsZ/questions" component={Questions} />
                <AdminRoute exact path="/yultnbimscsXzBUKKhwaq@@@@4t4t4E9L4Xrr7;fadjsjfdsajfpjwa543666433lkjfU8Dq3q@534fgdgjtsryh8836jggjdid;;3flsZ/colleges" component={Colleges} />
                <AdminRoute exact path="/yultnbimscsXzBUKKhwaq@@@@4t4t4E9L4Xrr7;fadjsjfdsajfpjwa543666433lkjfU8Dq3q@534fgdgjtsryh8836jggjdid;;3flsZ/colleges/add" component={Add_College} />
                <AdminRoute exact path="/yultnbimscsXzBUKKhwaq@@@@4t4t4E9L4Xrr7;fadjsjfdsajfpjwa543666433lkjfU8Dq3q@534fgdgjtsryh8836jggjdid;;3flsZ/colleges/:id" component={Colleges_Individual} />
                <AdminRoute exact path="/yultnbimscsXzBUKKhwaq@@@@4t4t4E9L4Xrr7;fadjsjfdsajfpjwa543666433lkjfU8Dq3q@534fgdgjtsryh8836jggjdid;;3flsZ/footer" component={Footer} />
            </Switch>
        </Router>
    )
}

export default Admin