function authReducer(state, action) {
	switch (action.type) {
		case "LOGIN":
			return {
				isLogged: true,
				username: action.payload.username,
			};
		case "LOGOUT":
			return {
				isLogged: false,
				username: "",
			};

		default:
			throw new Error("Unknown action");
	}
}

export default authReducer;
