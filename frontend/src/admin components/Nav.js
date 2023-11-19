import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const styles = {
    navbar: {
      padding: "10px",
      position: "sticky",
      top: 0,
      backgroundColor: "#343a40",
      zIndex: 1000,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    brand: {
      textDecoration: "none",
      color: "white",
      fontSize: "1.5rem",
      margin: 0,
      padding: 0,
    },
    navList: {
      display: "flex",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navItem: {
      marginRight: "15px",
    },
    navLink: {
      textDecoration: "none",
      color: "white",
      padding: "8px 12px",
      borderRadius: "5px",
      transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
    },
    signInButton: {
      backgroundColor: "#cda45e",
      border: "1px solid #cda45e",
      margin: "10px",
      padding: "10px",
      color: "white",
      transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
    },
    // Add these styles for the nav section
    nav: {
      ul: {
        listStyle: "none",
        display: "flex",
      },
      li: {
        marginRight: "15px",
      },
      a: {
        textDecoration: "none",
        color: "black",
      },
      aHover: {
        color: "blue", // Change the color to your desired hover effect
      },
    },
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/admin/home" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/admin/booking-list" style={styles.navLink}>
            Booking List
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/admin/contact-list" style={styles.navLink}>
            Contact List
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/admin/cancel-list" style={styles.navLink}>
            Cancel List
          </Link>
        </li>
      </ul>
      <Link to="/" style={styles.brand}>
        <h3>Plates&Pleasure</h3>
      </Link>
      <div style={styles.signInButton}>
        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
          Sign out
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
