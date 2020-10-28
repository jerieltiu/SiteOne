import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import '../admin_css/01-Navbar.css'

function Navbar() {
    return (
        <div id="admin_navbar">
            <div class="admin_sidebar">
                <p>Tempus Admin</p>
                <ul>
                    <li>
                        <Link to="/yultnbimscsXzBUKKhwaq@@@@4t4t4E9L4Xrr7;fadjsjfdsajfpjwa543666433lkjfU8Dq3q@534fgdgjtsryh8836jggjdid;;3flsZ">
                            <i class="fa fa-users" />Events
                        </Link>
                    </li>
                    <li>
                        <Link to="/yultnbimscsXzBUKKhwaq@@@@4t4t4E9L4Xrr7;fadjsjfdsajfpjwa543666433lkjfU8Dq3q@534fgdgjtsryh8836jggjdid;;3flsZ/deadlines">
                            <i class="fa fa-calendar" />Deadlines
                        </Link>
                    </li>
                    <li>
                        <Link to="/yultnbimscsXzBUKKhwaq@@@@4t4t4E9L4Xrr7;fadjsjfdsajfpjwa543666433lkjfU8Dq3q@534fgdgjtsryh8836jggjdid;;3flsZ/questions">
                            <i class="fa fa-question-circle" />FAQs
                        </Link>
                    </li>
                    <li>
                        <Link to="/yultnbimscsXzBUKKhwaq@@@@4t4t4E9L4Xrr7;fadjsjfdsajfpjwa543666433lkjfU8Dq3q@534fgdgjtsryh8836jggjdid;;3flsZ/colleges">
                            <i class="fa fa-university" />Colleges
                        </Link>
                    </li>
                    <li>
                        <Link to="/yultnbimscsXzBUKKhwaq@@@@4t4t4E9L4Xrr7;fadjsjfdsajfpjwa543666433lkjfU8Dq3q@534fgdgjtsryh8836jggjdid;;3flsZ/footer">
                            <i class="fa fa-photo" />Footer
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar