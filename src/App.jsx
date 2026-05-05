import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home     from './pages/Home'
import About    from './pages/About'
import Skills   from './pages/Skills'
// import Projects from './pages/Projects'
// import Contact  from './pages/Contact'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16"> {/* pt-16 offsets fixed navbar */}
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/skills"   element={<Skills />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App