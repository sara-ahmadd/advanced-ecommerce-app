// import { useState } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import * as Pages from "./pages/index";
import * as Components from "./components/index";
import User from "./pages/User/User";

const { Home, Admin, Cart, Contact, Orders } = Pages;
const { Header, Footer, ErrorBoundary, NotFound } = Components;

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <h2>Easy Shopping</h2>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="User" element={<User />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
