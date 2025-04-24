import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Media from "./components/pages/Media";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="media/:id/:mediaType" element={<Media />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
