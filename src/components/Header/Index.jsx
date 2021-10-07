import React, { useState, useEffect } from "react";
import { Container, Logo, Auth } from "./styles";
import { NavLink } from "react-router-dom";
function Index() {
  const [accessToken, setAccessToken] = useState();
  useEffect(() => {
    setAccessToken(localStorage.getItem("user"));
  }, []);
  return (
    <Container>
      <div>
        <NavLink className="logo" to="">
          <Logo src="../../assets/images/logo.png" />
        </NavLink>
      </div>

      <p></p>

      <Auth>
        {accessToken ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="user_netflix"
          />
        ) : (
          <>
            <button>
              <NavLink className="auth" to="signin">
                Sign In
              </NavLink>
            </button>
            <button>
              <NavLink className="auth" to="signup">
                Sign Up
              </NavLink>
            </button>
          </>
        )}
      </Auth>
    </Container>
  );
}

export default Index;
