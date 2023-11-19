import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    const history = useHistory();
    const goToHome = () => {
        history.push('/reactjs-movieapp', { rating: movie.rating });
    };

    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className={styles.wrap}>
            <header className={styles.header}>
                <button className={styles.btn} onClick={goToHome}>Home</button>
                <h1>{movie.title}</h1>
            </header>
            <aside className={styles.aside}>
                <div>
                    <img src={movie.medium_cover_image} alt={movie.title}></img>
                </div>
            </aside>
            <section className={styles.article1}>
                <div>
                    {movie.description_full ? movie.description_full : 'No description'}
                </div>
            </section>
            <section className={styles.article2}>
                <div>Year : {movie.year}</div>
                <div>language : {movie.language}</div>
                <div>runtime : {movie.runtime}</div>
                <div>imdb code : {movie.imdb_code}</div>
            </section>
            <section className={styles.article3}>
                <div>
                    <iframe
                        width="700"
                        height="450"
                        src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
                        title={movie.title}
                    ></iframe>
                </div>
            </section>
            {/* <footer className={styles.footer}>
                <div className={styles.center}>
                    <button className={styles.btn} onClick={goToHome}>Home</button>
                </div>
            </footer> */}
        </div>
    );
}

export default Detail;
