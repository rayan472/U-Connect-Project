
import {
  BrowserRouter,

  Route,
  Routes,
} from "react-router-dom";
import "./App.css"

import HomePage from "./container/homePage/index"
import Profile from "./container/profile/index";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />}/>
        
      </Routes>
    </BrowserRouter>
  );

}

export default App;
