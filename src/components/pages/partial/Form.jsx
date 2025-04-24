import { useEffect, useRef, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Form({ type }) {
	const navigate = useNavigate();
	const { login } = useAuth();
	const usernameRef = useRef();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

	const handleSubmitLogin = (e) => {
		e.preventDefault();

		const users = JSON.parse(localStorage.getItem("users"));

		if (users) {
			const user = users.find((user) => user.username === username);

			if (user) {
				const match = user.password === password;
				if (match) {
					login(username);
					navigate("/");
				} else {
					setError("Invalid credential.");
				}
			} else {
				setError("User not found, create a account plz.");
			}
		} else setError("User not found, create a account plz.");
	};

	const handleSubmitRegister = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		const users = JSON.parse(localStorage.getItem("users")) || [];
		const existingUser = users.find((user) => user.username === username);

		if (existingUser) {
			setError("User with this name already exists");
		} else {
			const newUser = {
				username,
				password,
			};
			users.push(newUser);
			localStorage.setItem("users", JSON.stringify(users));
			navigate("/login");
		}
	};

    useEffect(() => {
        console.log("useEffect");
		usernameRef.current.focus();
	}, []);

    console.log("body component");

	return (
		<form
			onSubmit={
				type === "register" ? handleSubmitRegister : handleSubmitLogin
			}
			aria-labelledby="login-form"
			className="login-form">
			{error && <p className="error-form">{error}</p>}

			<div className="form-group">
				<label htmlFor="username" className="sr-only">
					Username
				</label>
				<input
					type="text"
					id="username"
					name="username"
					ref={usernameRef}
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
					aria-required="true"
					placeholder="Username"
					className="form-input"
				/>
			</div>
            {   console.log("RETURN")}
			<div className="form-group">
				<label htmlFor="password" className="sr-only">
					Mot de passe
				</label>
				<input
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					aria-required="true"
					placeholder="Password"
					className="form-input"
				/>
			</div>

			{/* REGISTER COMPONENT */}
			{type === "register" && (
				<div className="form-group">
					<input
						type="password"
						id="confirm-password"
						name="confirm-password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
						aria-required="true"
						placeholder="Confirm Password"
						className="form-input"
					/>
				</div>
			)}
			<button type="submit" className="submit-button">
				{type === "register" ? "Create account" : "Log in"}
			</button>
		</form>
	);
}

export default Form;
