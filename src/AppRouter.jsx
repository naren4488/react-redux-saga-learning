import { Route, Routes } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Cart from "./components/Cart";

const AppRouter = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
