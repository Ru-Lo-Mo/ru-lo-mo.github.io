import { Routes, Route } from "react-router-dom"

import Home from "./Pages/Home"
import Portfolio from "./Pages/Portfolio"
import TBS from "./Pages/TBS"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/the-bitter-shot" element={<TBS />} />
    </Routes>
  )
}