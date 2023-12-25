import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
// import UsersCabinet from "./pages/UsersCabinet/UsersCabinet";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import SmartWatches from "./pages/SmartWathes/SmartWatches";
import Headphones from "./pages/Headphones/Headphones";
import Keyboards from "./pages/Keyboards/Keyboards";
import Mouses from "./pages/Mouses/Mouses";
import Search from "./pages/Search/Search";
import CheckOut from "./pages/CheckOut/CheckOut";
import ThankYou from "./pages/ThankYou/ThankYou";
import Favorites from "./pages/Favorites/Favorites";
import Compare from "./pages/Compare/Compare";
import UserAccount from "./pages/UserAccount/UserAccount";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:itemNo" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/wishlist" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/thankyou" element={<ThankYou />} />
          {/* <Route element={<RequireAuth />}>
            <Route path="/cabinet" element={<UsersCabinet />} />
          </Route> */}
          <Route path="/search" element={<Search />} />
          <Route path="/watches" element={<SmartWatches />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/keyboards" element={<Keyboards />} />
          <Route path="/mouses" element={<Mouses />} />
          <Route path="/compare" element={<Compare />} />

          <Route element={<RequireAuth />}>
            <Route path="/account" element={<UserAccount />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;
