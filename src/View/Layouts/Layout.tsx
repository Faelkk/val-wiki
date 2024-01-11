import { Outlet } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1  bg-blueVariation-950 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
