import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";

const API_KEY = "884d52e7234bf6b25aeaf2b7eac5ad2a";
const TOKEN =
	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODRkNTJlNzIzNGJmNmIyNWFlYWYyYjdlYWM1YWQyYSIsIm5iZiI6MTYxMTc1NjY4MC44OCwic3ViIjoiNjAxMTc0ODhhMzVjOGUwMDQwNjBkM2I0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RdxXR-5zEVdIJ3Eowxxc9dXXo4cfPpH0IV5nuPFZnK4";

const OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${TOKEN}`,
	},
};

function Home() {
	const [trendings, setTrendings] = useState(null);

	useEffect(() => {
		async function fetchDatas() {
			// const response = await fetch(
			// 	"https://api.themoviedb.org/3/trending/all/week?language=en-US",
			// 	OPTIONS
			// );
			const response = await fetch(
				`https://api.themoviedb.org/3/trending/all/week?language=en-US&api_key=${API_KEY}`
			);

			const data = await response.json();
			setTrendings(data.results);
		}

		fetchDatas();
	}, []);

	return (
		<main id="home">
            
			<h2>Trendings movies of the week !</h2>

			{!trendings ? (
				<p>Loading ...</p>
			) : (
				trendings.map((trending) => (
					<Fragment key={trending.id}>
						<Link to={"media/" + trending.id + "/" + trending.media_type}>
							<article>
								<h3>
									{trending.original_name || trending.title}
								</h3>
								<img
									src={`https://image.tmdb.org/t/p/original/${trending.poster_path}`}
									alt=""
								/>
							</article>
						</Link>
						<hr />
					</Fragment>
				))
			)}
		</main>
	);
}

export default Home;
