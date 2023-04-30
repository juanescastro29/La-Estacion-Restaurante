import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/UserPages/Home";
import Login from "./pages/UserPages/Login";
import Menu from "./pages/UserPages/Menu";
import Booking from "./pages/UserPages/Booking";
import Domicile from "./pages/UserPages/Domicile";
import AdminProducts from "./pages/AdminPages/Products";
import AdminClients from "./pages/AdminPages/Clients";
import AdminBookings from "./pages/AdminPages/Bookings";
import AdminDomiciles from "./pages/AdminPages/Domiciles";
import Register from "./pages/UserPages/Register";
import AdminProvider from "./context/AdminContext";
import UserProvider from "./context/UserContext";
import CartProvider from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/UserPages/About";
import NotFound from "./pages/UserPages/NotFound";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import PrivateRouteUser from "./components/PrivateRouteUser";
import {
  HOME,
  LOGIN,
  MENU,
  REGISTER,
  ABOUT,
  NOT_FOUND,
} from "./routes/PublicPaths";
import {
  PRODUCTS,
  BOOKINGS,
  CLIENTS,
  DOMICILES,
  USERBOOKING,
  USERDOMICILE,
  USERCART,
} from "./routes/PrivatePaths";
import Cart from "./pages/UserPages/Cart";

function App() {
  return (
    <AdminProvider>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path={HOME} element={<Home />} />
              <Route path={LOGIN} element={<Login />} />
              <Route path={MENU} element={<Menu />} />
              <Route
                path={USERBOOKING}
                element={
                  <PrivateRouteUser>
                    <Booking />
                  </PrivateRouteUser>
                }
              />
              <Route
                path={USERDOMICILE}
                element={
                  <PrivateRouteUser>
                    <Domicile />
                  </PrivateRouteUser>
                }
              />
              <Route
                path={USERCART}
                element={
                  <PrivateRouteUser>
                    <Cart />
                  </PrivateRouteUser>
                }
              />
              <Route path={REGISTER} element={<Register />} />
              <Route
                path={PRODUCTS}
                element={
                  <PrivateRouteAdmin>
                    <AdminProducts />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path={CLIENTS}
                element={
                  <PrivateRouteAdmin>
                    <AdminClients />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path={BOOKINGS}
                element={
                  <PrivateRouteAdmin>
                    <AdminBookings />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path={DOMICILES}
                element={
                  <PrivateRouteAdmin>
                    <AdminDomiciles />
                  </PrivateRouteAdmin>
                }
              />
              <Route path={ABOUT} element={<About />} />
              <Route path={NOT_FOUND} element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </AdminProvider>
  );
}

export default App;
