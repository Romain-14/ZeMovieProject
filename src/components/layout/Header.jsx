import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header>
			<h1>Welcome to my app'</h1>
			<nav>
				<NavLink to="movie">movie</NavLink>
				<NavLink to="show">show</NavLink>
			</nav>
		</header>
	);
}

export default Header;
