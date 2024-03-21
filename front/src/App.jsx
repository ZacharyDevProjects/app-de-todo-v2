import "./App.css";
import Acceuil from "./components/acceuil/form";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
