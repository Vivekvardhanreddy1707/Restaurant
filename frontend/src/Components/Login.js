import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignInSubmit = (event) => {
    event.preventDefault();

    const username = document.getElementById("signin-name").value;
    const password = document.getElementById("signin-password").value;

    if (username === "srujan" && password === "srujan") {
      // Redirect to Admin component without adding to history
      navigate("/Admin", { replace: true });
    }
  };

  return (
    <section id="login">
      <div>
        <h1 className="navbar-tex m-0 p-0 .text-white">Plates&Pleasure</h1>

        <div id="signin-popup" className="popup signin-background">
          <div className="signin-form">
            <h2>Administrator Log in</h2>

            <form id="signin-form" onSubmit={handleSignInSubmit}>
              <label htmlFor="signin-name">Username</label>
              <input type="text" id="signin-name" placeholder="Name" required />

              <label htmlFor="signin-password">Password</label>
              <input
                type="password"
                id="signin-password"
                placeholder="Password"
                required
              />

              <div className="complete-signup-button">
                <button type="submit" className="chrome-yellow-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
