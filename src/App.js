import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (<Router>
    <Routes>
<Route path="/reactTest1" element={<Home/>}></Route> 
<Route path="/reactTest1/movie/:id" element={<Detail/>}></Route> 
    </Routes>
  </Router>);
}

export default App;