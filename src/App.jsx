import { Route, Routes, useLocation, HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
      </HashRouter>
    </>
  )
}

export default App
