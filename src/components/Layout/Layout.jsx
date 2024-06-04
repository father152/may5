import { Outlet } from "react-router-dom";
import { Header } from "../header/Header.jsx";
import { Footer } from "../footer/Footer.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export { Layout };
