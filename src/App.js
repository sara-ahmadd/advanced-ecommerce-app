// import { useState } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import * as Pages from "./pages/index";
import * as Components from "./components/index";
import User from "./pages/User/User";
import SignUpForm from "./pages/Login/SignUpForm";
import RequireAuth from "./components/GeneralComponents/RequireAuth";

const { Home, Admin, Cart, Contact, Orders, LoginForm } = Pages;
const { Header, Footer, ErrorBoundary, NotFound } = Components;

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        />

        <Route
          path="user"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        />

        <Route path="login" element={<LoginForm />} />

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
