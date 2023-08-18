import Layout from './components/Layout.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NoPage from './pages/NoPage.jsx'

function App() {

  return (
    <div>
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="*" element={<NoPage />}/>
        </Route>
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
