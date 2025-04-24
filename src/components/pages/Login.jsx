import { Link } from "react-router-dom";

import Form from "./partial/Form.jsx";
import useTitle from "../../hooks/useTitle.js";

function Login() {
    useTitle("Login");
    
	return (
		<main>
			<Form />

			<p className="cta register">
				<Link to={"/register"}>👉 Create account 👈</Link>
			</p>
		</main>
	);
}

export default Login;
