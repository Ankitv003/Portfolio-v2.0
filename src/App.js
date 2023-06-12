import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './componenets/Layout'
import Home from './componenets/Home'
import About from './componenets/About'
import Contact from './componenets/Contact'
import Portfolio from './componenets/Portfolio'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
