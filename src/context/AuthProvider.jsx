import { createContext, useReducer } from "react";
import authReducer from "./authReducer.js";

const AuthContext = createContext();

const initialState = {
	isLogged: false,
	username: "",
};

const Provider = ({ children }) => {
	const [userState, dispatch] = useReducer(authReducer, initialState);

	const login = (username) => {
		dispatch({
			type: "LOGIN",
			payload: { username },
		});
	};

	const logout = () => {
		dispatch({
			type: "LOGOUT",
		});
	};

	return (
		<AuthContext.Provider value={{ userState, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext };

export default Provider;
