import { useState } from "react";
import { useHistory } from 'react-router-dom';
import PropTypes from "prop-types";
import styles from "./Movie.module.css";
import noImage from "../assets/noimage.png";

function Movie({ id, coverImg, title, year, summary, genres }) {
    const [currentImg, setCurrentImg] = useState(coverImg);
    const history = useHistory();

    const navigateToMovie = () => {
        history.push(`${process.env.PUBLIC_URL}/movie/${id}`);
    };

    function renderGenres(genres) {
        return genres.map((g, index) => (
            <span key={g}>
                {g}{index !== genres.length - 1 && ' | '}
            </span>
        ));
    }

    return (
        <div className={styles.movie}>
            <img 
                src={currentImg} 
                alt={title} 
                className={styles.movie__img} 
                onError={() => setCurrentImg(noImage)}
                onClick={navigateToMovie}
            />
            <h2 className={styles.movie__title}>
                <div className={styles.movie__title__content} onClick={navigateToMovie}>{title}</div>
            </h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p>
                {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
            </p>
            <ul className={styles.movie__genres}>
                <div>{renderGenres(genres)}</div>
                {/* {genres.map((g, index) => (
                    <span key={g}>
                        {g}
                        {index !== genres.length - 1 && ' | '}
                    </span>
                ))} */}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
