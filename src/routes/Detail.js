import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div className={styles.wrap}>
            <header className={styles.header}>
                <h1>{movie.title}</h1>
            </header>
            <aside className={styles.aside}>
                <div>
                    <img src={movie.medium_cover_image} alt={movie.title}></img>
                </div>
            </aside>
            <section className={styles.article1}>
                <div>Year : {movie.year}</div>
            </section>
            <section className={styles.article2}>
                <div>{movie.description_full}</div>
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
            <footer className={styles.footer}>
                <div className={styles.center}>
                    <Link to={`/movie`}>
                        {" "}
                        <button className={styles.btn}>Home</button>
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default Detail;
