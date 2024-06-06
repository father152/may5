
import { Layout } from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Golovna } from "./components/Golovna/Golovna.jsx";
import { About } from "./components/header/About.jsx"
import { Contact } from "./components/header/Contact.jsx";
import { Portfolio } from "./components/header/Portfolio.jsx";
import { History } from "./components/header/History.jsx";



function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Golovna />} />
          <Route path="about" element={<About />} />
          <Route path="history" element={<History />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
