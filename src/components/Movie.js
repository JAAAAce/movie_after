import PropTypes from "prop-types";
import {Link} from 'react-router-dom'; //Link는 페이지 전체를 재실행(api call)하지 않고 이동할 수 있다

function Movie({id, coverImg, title, summary, genres}){
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2> {/* 제목 클릭하면 /id로 넘어가고 더 자세한 디테일이 나옴 */}
            <p>{summary}</p>
            <ul>
                {genres == null? ("") : (genres.map(g => <li key={g}>{g}</li>))}
            </ul>
        </div>
    );

}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;