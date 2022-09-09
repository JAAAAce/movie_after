import { useEffect } from 'react';
import {useParams} from 'react-router-dom';

/* React Router에서 제공하는 useParams 함수
: url에 있는 값을 반환해줌(url의 변수값: 여기선 id) */

function Detail(){
    const {id} = useParams();
    console.log(id); 
    const getMovie = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json)
    };
    //받은 id의 값으로 api에 요청하기
    useEffect(() => { //await은 async 함수 내부에 있지 않으면 사용할 수 없다
        getMovie();
    }, [])
    return <h1>Detail</h1>
}
export default Detail;