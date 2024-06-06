import { Outlet } from "react-router-dom";
import { Header } from "../header/Header.jsx";
import { Footer } from "../footer/Footer.jsx";



function Layout() {
  return (
    <div className='layout'>
      <Header />
      <div className='outlet'>
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export { Layout };
