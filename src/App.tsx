import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeSection from "./components/HomeSection";
import Guide from "./components/Guide";
import NavBar from "./components/Navbar";
import CheatSheet from "./components/CheatSheet";

import ThemeContextDefaultProvider from "./context/ThemeContextProvider";
import { ReactElement } from "react";

const App = (): ReactElement => {
  return (
    <div className="App">
      <ThemeContextDefaultProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/cheatsheet" element={<CheatSheet />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </ThemeContextDefaultProvider>
    </div>
  );
};

export default App;
