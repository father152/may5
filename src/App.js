
import { Layout } from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Golovna } from "./components/Golovna/Golovna.jsx";
import { About } from "./components/header/About.jsx"
import { Contact } from "./components/header/Contact.jsx";


function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Golovna />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
