import Input from "./components/Input";
import Main from "./components/Main";
import BasicModal from "./components/Modal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Input" element={<Input/>}/>
          <Route path="/Modal" element={<BasicModal/>}/>
        </Routes>
      </Router>
  );
}

export default App;
