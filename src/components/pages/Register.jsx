import Form from "./partial/Form";
import useTitle from "../../hooks/useTitle";

function Register() {
	useTitle("Register");
    
	return (
		<main>
			<Form type={"register"} />
		</main>
	);
}

export default Register;
