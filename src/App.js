import "./index.css";
import { Route, Routes } from "react-router-dom";
import * as Pages from "./pages/index";
import * as Components from "./components/index";
import User from "./pages/User/User";
import SignUpForm from "./pages/Login/SignUpForm";
import RequireAuth from "./components/GeneralComponents/RequireAuth";
import ResetPassword from "./pages/Login/ResetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductPage from "./components/products/ProductPage";
import AddNewProduct from "./pages/Admin/AddNewProduct";
import EditProduct from "./pages/Admin/EditProduct";
import GetAllProducts from "./components/products/GetAllProducts";

const { Home, Admin, Cart, Contact, Orders, LoginForm } = Pages;
const { Header, Footer, ErrorBoundary, NotFound } = Components;

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<GetAllProducts page={"home"} />} />
        <Route path="products/:id" element={<ProductPage page={"home"} />} />
        <Route
          path="admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        />
        <Route path="admin/products/:id" element={<ProductPage />} />
        <Route path="admin/addNewProduct" element={<AddNewProduct />} />
        <Route path="admin/edit/:id" element={<EditProduct />} />

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
