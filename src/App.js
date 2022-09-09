import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route> {/* path="/" means going to Home */}
      <Route path="/movie/:id" element={<Detail />}></Route> {/* /movie/:id 아이디를 입력하면 Detail로 이동 */}
      <Route path="/hello" element={<h1>Hello</h1>}></Route>
      <Route></Route>
    </Routes> {/* Routes는 Route(URL)를 찾고, 컴포넌트를 렌더링 */}
  </Router>;
}

export default App;
