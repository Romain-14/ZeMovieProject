import { Link, NavLink, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

function Header() {
	const navigate = useNavigate();
	const { userState, logout } = useAuth();

	const handleLogout = () => {
		logout();
		navigate("login");
	};
	return (
		<header>
			<h1><Link to="/">Welcome to my app'</Link></h1>
			<nav>

				{!userState.isLogged ? (
					<NavLink to="login">log in</NavLink>
				) : (
                    <>
					<NavLink to="dashboard">{userState.username}</NavLink>
					<button onClick={handleLogout}>log out</button>
                    </>
				)}
			</nav>
		</header>
	);
}

export default Header;
