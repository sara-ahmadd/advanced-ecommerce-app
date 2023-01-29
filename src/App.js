import { useState } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import * as Pages from "./pages/index";
import * as Components from "./components/index";
import User from "./pages/User/User";
import SignUpForm from "./pages/Login/SignUpForm";
import RequireAuth from "./components/GeneralComponents/RequireAuth";
import ResetPassword from "./pages/Login/ResetPassword";
import Loader from "./components/GeneralComponents/Loader";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductsList from "./pages/Home/ProductsList";
import ProductPage from "./pages/Home/ProductPage";
import ProductPageII from "./pages/Admin/ProductPage";

const { Home, Admin, Cart, Contact, Orders, LoginForm } = Pages;
const { Header, Footer, ErrorBoundary, NotFound } = Components;

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <ToastContainer />
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route
          path="admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        />
        <Route path="admin/products/:id" element={<ProductPageII />} />

        <Route
          path="user"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        />

        <Route path="login" element={<LoginForm />} />
        <Route path="reset" element={<ResetPassword />} />

        <Route path="signUp" element={<SignUpForm />} />

        <Route
          path="cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />

        <Route path="contact" element={<Contact />} />

        <Route
          path="orders"
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
