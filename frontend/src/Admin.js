// Admin.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import BookingList from "./admin components/BookingList";
import Nav from "./admin components/Nav";
import Home from "./admin components/home";
import ContactList from "./admin components/ContactList";
import CancelList from "./admin components/CancelList";

// Import Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

function Admin() {
  return (
    <div>
      {/* Render the custom Nav component without the default Navbar */}
      <Nav />

      {/* Routes for the admin section */}
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/booking-list/*" element={<BookingList />} />
        <Route path="/contact-list/*" element={<ContactList />} />
        <Route path="/cancel-list/*" element={<CancelList />} />
      </Routes>
    </div>
  );
}

export default Admin;
