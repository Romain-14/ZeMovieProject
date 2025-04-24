import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const API_KEY = "884d52e7234bf6b25aeaf2b7eac5ad2a";

function Media() {
	const params = useParams();
	const [media, setMedia] = useState(null);

	function formatDate(media) {
		return new Date(media.release_date).toLocaleDateString();
	}

	function formatVote(vote) {
		const formattedVote = Math.round(vote / 2) / 2;
		const totalStars = 5;

		const stars = Array.from({ length: totalStars }, (_, index) => {
			if (index < formattedVote) {
                return (
                    <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        style={{ color: "#FFD43B" }} // Couleur de l'étoile pleine
                    />
                );
            } else if (index < formattedVote + 0.5) {
                return (
                    <FontAwesomeIcon
                        key={index}
                        icon={faStarHalfAlt}
                        style={{ color: "#FFD43B" }} // Couleur de la moitié d'étoile
                    />
                );
            } else {
                return (
                    <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        style={{ color: "#000" }} // Couleur de l'étoile vide
                    />
                );
            }
		});
		return <>{stars}</>;
	}

	useEffect(() => {
		async function fetchDatas() {
			const response = await fetch(
				`https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=${API_KEY}`
			);

			const data = await response.json();

			setMedia(data);
		}

		fetchDatas();
	}, []);

	return (
		<main>
			<Link to={"/"}>⬅️ Back to Home</Link>

			{!media ? (
				<p>Loading ...</p>
			) : (
				<article>
					<h2>{media.original_name || media.title}</h2>
					<img
						src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
						alt=""
					/>
					<p>{media.overview}</p>
					<p>Average vote : {formatVote(media.vote_average)}</p>
					<p>Release Date: {formatDate(media)}</p>
				</article>
			)}
		</main>
	);
}

export default Media;
