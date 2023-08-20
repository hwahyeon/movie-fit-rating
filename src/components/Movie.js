import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import noImage from "../assets/noimage.png";

function Movie({ id, coverImg, title, year, summary, genres }) {
    const [currentImg, setCurrentImg] = useState(coverImg);

    return (
        <div className={styles.movie}>
            <img 
                src={currentImg} 
                alt={title} 
                className={styles.movie__img} 
                onError={() => setCurrentImg(noImage)}
            />
            <h2 className={styles.movie__title}>
                <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>
                    {title}
                </Link>
            </h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p>
                {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
            </p>
            <ul className={styles.movie__genres}>
                {genres.map((g, index) => (
                    <span key={g}>
                        {g}
                        {index !== genres.length - 1 && ' | '}
                    </span>
                ))}
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
