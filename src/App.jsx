import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Movies from "./components/pages/Movies";
import Shows from "./components/pages/Shows";
import Media from "./components/pages/Media";

function App() {
	return (
		<>
			<Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="shows" element={<Shows />} />
                <Route path="media/:id/:mediaType" element={<Media />} />

            </Routes>

			<Footer />
		</>
	);
}

export default App;
