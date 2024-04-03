import "./styles/main.css";
// import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Privacy from "./pages/Privacy";
import ChangePassword from "./pages/ChangePassword";
import BrandList from "./pages/BrandList";
import ProductDetail from "./pages/ProductDetail";
import CategoryProducts from "./pages/CategoryProducts";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/brand/:brandId" element={<BrandList />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/category/:categoryId" element={<CategoryProducts />} />
        <Route path="/orders" element={<OrderHistory />} />

        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
