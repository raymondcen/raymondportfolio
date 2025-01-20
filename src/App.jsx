import { Route, Routes, useLocation, HashRouter } from "react-router-dom";

import Landing from "./pages/Landing.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Landing />
      </HashRouter>
    </>
  )
}

export default App
