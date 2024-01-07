import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../View/pages/Home/Home";
import Agents from "../View/pages/Agents/Agents";
import Weapons from "../View/pages/Weapons/Weapons";
import Maps from "../View/pages/Maps/Maps";
import PageNotFound from "../View/pages/PageNotFound/PageNotFound";
import Layout from "../View/Layouts/Layout";
import PlayerCards from "../View/pages/PlayerCards/PlayerCards";
import Sprays from "../View/pages/Sprays/Sprays";
import Buddies from "../View/pages/Buddies/Buddies";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          {/* <Route path="/agents/:id" element={} /> */}
          <Route path="/weapons" element={<Weapons />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/cards" element={<PlayerCards />} />
          <Route path="/sprays" element={<Sprays />} />
          <Route path="/Buddies" element={<Buddies />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
