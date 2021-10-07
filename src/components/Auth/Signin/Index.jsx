import React, { useEffect, useState } from "react";
import { Container, Logo, FormLogin } from "./styles";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Footer from "../../Footer/Index";
import request from "../../../API/request";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

function Index() {
  const [status, setStatus] = useState(false);
  const [fail, handleFail] = useState(false);
  const [validationForm, handlevalidationForm] = useState(false);
  const history = useHistory();

  const [user, handleUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChangeUser = (e) => {
    handleUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    handleUser({
      taiKhoan: "",
      matKhau: "",
    });
  };

  const validation = () => {
    if (user.taiKhoan === "") {
      handlevalidationForm(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validation();
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      body: user,
    })
      .then((res) => {
        localStorage.setItem("user", res.data.content.accessToken);
        setTimeout(() => {
          history.push("");
        }, 2000);
      })
      .catch((err) => {
        handleFail(true);
        resetForm();
      });
  };

  useEffect(() => {});

  const handleClickShowPassword = (e) => {
    // e.preventDefault();
    setStatus(!status);
  };
  return (
    <Container
      style={{
        backgroundImage: `url("../../assets/images/cover-login.jpg")`,
      }}
    >
      <NavLink to="">
        <Logo src="../../assets/images/logo.png" alt="logo-image" />
      </NavLink>
      <FormLogin>
        <div className="formLogin__content">
          <h1>Sign In</h1>
          <div className="formLogin__input">
            {/* USERNAME */}
            <input
              name="taiKhoan"
              className="formLogin__inputItem"
              type="text"
              placeholder="Account"
              onChange={handleChangeUser}
              value={user.taiKhoan}
              onClick={() => {
                handleFail(false);
                handlevalidationForm(false);
              }}
            />
            {validationForm && (
              <p style={{ color: "red" }}>Enter your user name !!!</p>
            )}
            {/* PASSWORD */}
            <div className="formLogin__password">
              <input
                name="matKhau"
                type={status ? "text" : "password"}
                className="formLogin__inputItem"
                placeholder="Password"
                onChange={handleChangeUser}
                value={user.matKhau}
                onClick={() => {
                  handleFail(false);
                  handlevalidationForm(false);
                }}
              />
              {validationForm && (
                <p style={{ color: "red" }}>Enter your password !!!</p>
              )}
              <button onClick={handleClickShowPassword}>
                {status ? <VisibilityOff /> : <VisibilityIcon />}
              </button>
            </div>

            {/* BUTTON */}
            <Button
              type="submit"
              onClick={handleSubmit}
              variant="contained"
              color="secondary"
            >
              <strong> Sign In</strong>
            </Button>
          </div>
          {/* SIGN UP - NEXT */}
          <p className="formLogin__text">
            New to Netflix?
            <NavLink className="auth" to="signup">
              {" "}
              Sign up now.
            </NavLink>
          </p>
          {/* ALERT */}
          {fail ? (
            <Alert
              style={{ color: "#fff" }}
              variant="outlined"
              severity="error"
            >
              Incorrect account or password, please re-enter.
            </Alert>
          ) : (
            <></>
          )}
        </div>
      </FormLogin>
    </Container>
  );
}

export default Index;
