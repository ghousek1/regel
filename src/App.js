import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeSection from "./components/HomeSection";
import Guide from "./components/Guide";
import NavBar from "./components/Navbar";
import References from "./components/References";
import CheatSheet from "./components/CheatSheet";

import ThemeContextDefaultProvider from "./context/ThemeContextProvider";

function App() {
  return (
    <div className="App">
      <ThemeContextDefaultProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomeSection/>}/>
          <Route path="/guide" element={<Guide/>}/>
          <Route path="/references" element={<References/>}/>
          <Route path="/cheatsheet" element={<CheatSheet/>}/>
          <Route path="/github" element={<Guide/>}/>
        </Routes>
      </ThemeContextDefaultProvider>
    </div>
  );
}

export default App;
