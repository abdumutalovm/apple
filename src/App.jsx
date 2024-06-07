import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Product_Detail from "./pages/Product_Detail";
import HeaderLayout from "./layouts/HeaderLayout";
import Iphones from "./pages/Iphones";
import Macs from "./pages/Macs";
import Watch from "./pages/Watch";
import Vision from "./pages/Vision";
import AirPods from "./pages/AirPods";
import Ipads from "./pages/Ipads";
import Badges from "./pages/Badges";
import Product_Detail2 from "./pages/Product_Detail2";
import Product_Detail3 from "./pages/Product-Detail3";
import Product_Detail4 from "./pages/Product_Detail4";
import Product_Detail5 from "./pages/Product_Detail5";
import Product_Detail6 from "./pages/Product_Detail6";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="detail/:id" element={<Product_Detail />} />
        <Route path="detail2/:id" element={<Product_Detail2 />} />
        <Route path="detail3/:id" element={<Product_Detail3 />} />
        <Route path="detail4/:id" element={<Product_Detail4 />} />
        <Route path="detail5/:id" element={<Product_Detail5 />} />
        <Route path="detail6/:id" element={<Product_Detail6 />} />
        <Route path="iphones" element={<Iphones />} />
        <Route path="ipads" element={<Ipads />} />
        <Route path="vision" element={<Vision />} />
        <Route path="watches" element={<Watch />} />
        <Route path="airpods" element={<AirPods />} />
        <Route path="macs" element={<Macs />} />
        <Route path="badge" element={<Badges />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
