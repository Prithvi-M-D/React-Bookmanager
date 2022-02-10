import AddbookManager from "./pages/addbookmark";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard';
import Fav from './pages/favourites';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/">
          <AddbookManager/> 
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
        <Route exact path="/favourites">
          <Fav/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
