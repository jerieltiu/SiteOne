import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import '../client_css/01-Navbar.css'

class Navbar extends Component {
	
	// Mobile Menu Toggle
	mobileMenu_hide = _ => document.getElementById('mobileMenuToggler').checked = false

	render() {
		return (
			<header>
				<section class="desktopNavbar">
					<ul>
						<div></div>
						<li> <Link to="/#coming-soon">Coming Soon</Link> </li>
						<li> <Link to="/#deadlines">Deadlines</Link> </li>
						<li> <img src="images/logo.png" onClick={() => window.location.href = "/#home"} /> </li>
						<li> <Link to="/explore">Explore</Link> </li>
                        <li> <Link to="/questions">FAQs</Link> </li>
						<div></div>
					</ul>
				</section>

				<section class="mobileNavbar">
					<div class="mobileMenuContainer">
						<input type="checkbox" class="mobileMenuToggler" id="mobileMenuToggler" />

						<div class="hamburger"><div></div></div>

						<div class="mobileMenu">
							<div>
								<div>
									<ul>
                                        <li> <Link to="/#home" onClick={this.mobileMenu_hide}>Home</Link> </li>
                                        <li> <Link to="/#coming-soon" onClick={this.mobileMenu_hide}>Coming Soon</Link> </li>
										<li> <Link to="/#deadlines" onClick={this.mobileMenu_hide}>Deadlines</Link> </li>
                                        <li> <Link to="/explore" onClick={this.mobileMenu_hide}>Explore</Link> </li>
                                        <li> <Link to="/questions" onClick={this.mobileMenu_hide}>FAQs</Link> </li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</header>
		)
	}
}

export default Navbar