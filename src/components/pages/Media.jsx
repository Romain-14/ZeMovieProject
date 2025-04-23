import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_KEY = "884d52e7234bf6b25aeaf2b7eac5ad2a";

function Media() {
	const params = useParams();
	const [media, setMedia] = useState(null);

    function formatDate(media){
        return new Date( media.release_date).toLocaleDateString();
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

            {
                !media ? <p>Loading ...</p> : (
                    <article>
                        <h2>{media.original_name || media.title}</h2>
                        <img
                                src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
                                alt=""
                            />
                            <p>{media.overview}</p>
                            <p>Average vote : {media.vote_average.toFixed(2)} ⭐</p>
                            <p>Release Date: {formatDate(media)}</p>

                    </article>
                )
            }
		</main>
	);
}

export default Media;
