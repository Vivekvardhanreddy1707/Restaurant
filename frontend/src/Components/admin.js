import React, { useEffect } from "react";
import axios from "axios";
const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#363636",
  },
  header: {
    backgroundColor: "#363636",
    color: "white",
    textAlign: "center",
    padding: "15px",
  },
  nav: {
    backgroundColor: "#ff894c",
    color: "white",
    width: "200px",
    padding: "15px",
    position: "fixed",
    height: "100%",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    display: "block",
    marginBottom: "10px",
  },
  navLinkHover: {
    backgroundColor: "#f57c4c",
  },
  section: {
    marginLeft: "220px",
    padding: "15px",
    color: "white",
    backgroundColor: "#363636",
  },
  table: {
    borderCollapse: "collapse",
    width: "100%",
    marginTop: "20px",
  },
  th: {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
    backgroundColor: "#4caf50",
    color: "white",
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
};
  
const Admin = () => {
  // Simulate login by setting a token in sessionStorage
  sessionStorage.setItem("adminToken", "yourAuthToken");

  const isLoggedIn = () => {
    return sessionStorage.getItem("adminToken") !== null;
  };

  const logout = () => {
    sessionStorage.removeItem("adminToken");
    sessionStorage.clear();

    // Use replaceState to modify the browser history
    const baseUrl = window.location.origin + window.location.pathname;
    window.history.replaceState(null, "", baseUrl + "?loggedOut=true");
    window.location.replace("login"); // Assuming you have a login route in your React app
  };

  const BookingsList = async () => {
    try {
      const response = await axios.get("your_booking_api_endpoint"); // Replace with your actual API endpoint
      const bookingsData = response.data;

      // Render bookingsData in a table
      const tableContent = (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Date</th>
              <th>Number of People</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through bookingsData and render each booking row */}
            {bookingsData.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.phoneNumber}</td>
                <td>{booking.date}</td>
                <td>{booking.numberOfPeople}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );

      // Set the content of the section
      document.querySelector("section").innerHTML = (
        <>
          <h2>Bookings</h2>
          {tableContent}
        </>
      );
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const showQueries = () => {
    if (!isLoggedIn()) {
      alert("Please login first.");
      return;
    }

    // Sample queries data (replace with actual data from your API)
    const queriesData = [
      {
        name: "Alice Johnson",
        email: "alice@example.com",
        message: "Query about menu options.",
      },
      {
        name: "Bob Williams",
        email: "bob@example.com",
        message: "Inquiry regarding reservation process.",
      },
      // Add more data as needed
    ];

    // Render queriesData in a table
    const tableContent = (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through queriesData and render each query row */}
          {queriesData.map((query, index) => (
            <tr key={index}>
              <td>{query.name}</td>
              <td>{query.email}</td>
              <td>{query.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    // Set the content of the section
    document.querySelector("section").innerHTML = (
      <>
        <h2>Queries</h2>
        {tableContent}
      </>
    );
  };

  useEffect(() => {
    // Check authentication on component mount
    const isLoggedOut = new URLSearchParams(window.location.search).get(
      "loggedOut"
    );

    if (isLoggedOut) {
      alert("You have been logged out.");
      window.location.replace("login"); // Assuming you have a login route in your React app
      return;
    }

    if (!isLoggedIn()) {
      alert("Please login first.");
      window.location.replace("login"); // Assuming you have a login route in your React app
    }
  }, []);

  return (
    <>
      <header style={styles.header}>
        <h1>Plates&Pleasure</h1>
      </header>

      <nav style={styles.nav}>
        {/* Use normal nav bar items */}
        <a href="#" onClick={BookingsList} style={styles.navLink}>
          Bookings
        </a>
        <a href="#" onClick={showQueries} style={styles.navLink}>
          Queries
        </a>
        <button onClick={logout} style={styles.button}>
          Logout
        </button>
      </nav>

      <section style={styles.adminContainer}>
        {/* Content will be dynamically loaded here */}
      </section>
    </>
  );
};

export default Admin;
