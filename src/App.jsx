import { Route, Routes, useLocation, HashRouter } from "react-router-dom";

//components
import Navbar from "./components/Navbar.jsx"

//pages
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import Education from "./pages/Education.jsx"
import About from "./pages/About.jsx"

function PageRoutes(){

  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <>
    <div className="bg-gray-100 h-[2000px]">
      <HashRouter>
        <Navbar />
        <PageRoutes />
      </HashRouter>
    </div>
    </>
  )
}

export default App
