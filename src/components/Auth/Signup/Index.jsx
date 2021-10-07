import React, { useState, useEffect } from "react";
import { Container, Logo, FormLogin } from "./styles";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import request from "../../../API/request";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

function Index() {
  const [status, setStatus] = useState(false);
  const [user, handleUser] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    hoTen: "",
  });

  const history = useHistory();

  const [fail, handleFail] = useState(false);

  const handleChangeUser = (e) => {
    // e.preventDefault();
    handleUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const [regex, handleRegex] = useState({
    email: false,
    soDt: false,
  });

  const regexEmail = () => {
    // regex email
    if (user.email !== "") {
      if (
        !user.email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        regex.email = true;
      } else {
        regex.email = false;
      }
    }

    // regex phone
    if (user.soDt !== "") {
      if (!user.soDt.match(/^[0-9]+$/)) {
        regex.soDt = true;
      } else {
        regex.soDt = false;
      }
    }
  };

  const [validationForm, handleValidationForm] = useState({
    taiKhoan: false,
    matKhau: false,
    email: false,
    soDt: false,
    maNhom: false,
    hoTen: false,
  });

  const validation = () => {
    if (user.taiKhoan.trim() === "") {
      validationForm.taiKhoan = true;
    }
    if (user.matKhau === "") {
      validationForm.matKhau = true;
    }
    if (user.email === "") {
      validationForm.email = true;
    }
    if (user.soDt.trim() === "") {
      validationForm.soDt = true;
    }
    if (user.hoTen.trim() === "") {
      validationForm.hoTen = true;
    }
  };

  useEffect(() => {
    regexEmail();
  }, [user]);

  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setStatus(!status);
  };

  const resetForm = () => {
    handleUser({
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      hoTen: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validation();
    // POST INFORMATION
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      body: user,
      method: "POST",
    })
      .then((res) => {
        setTimeout(() => {
          history.push("/signin");
        }, 1000);
      })
      .catch((err) => {
        handleFail(true);
      });
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
          <h1>Sign Up</h1>
          <div className="formLogin__input">
            {/* Tài Khoản */}
            <input
              name="taiKhoan"
              value={user.taiKhoan}
              onChange={handleChangeUser}
              className="formLogin__inputItem"
              type="text"
              placeholder="Account"
              onClick={() => {
                handleFail(false);
                validationForm.taiKhoan = false;
              }}
            />
            {validationForm.taiKhoan ? (
              <p style={{ color: "red" }}>Username cannot be left blank!! </p>
            ) : (
              <></>
            )}

            <div className="formLogin__password">
              {/* Mật khẩu */}
              <input
                name="matKhau"
                value={user.matKhau}
                onChange={handleChangeUser}
                type={status ? "text" : "password"}
                className="formLogin__inputItem"
                placeholder="Password"
                onClick={() => {
                  handleFail(false);
                  validationForm.matKhau = false;
                }}
              />
              {validationForm.matKhau ? (
                <p style={{ color: "red" }}>Password cannot be left blank!! </p>
              ) : (
                <></>
              )}

              <button onClick={handleClickShowPassword}>
                {status ? <VisibilityOff /> : <VisibilityIcon />}
              </button>
            </div>
            {/* Email */}
            <input
              value={user.email}
              onChange={handleChangeUser}
              name="email"
              className="formLogin__inputItem"
              type="text"
              placeholder="Email"
              onClick={() => {
                handleFail(false);
                validationForm.email = false;
              }}
            />
            {validationForm.email ? (
              <p style={{ color: "red" }}>Email cannot be left blank!! </p>
            ) : (
              <></>
            )}
            {regex.email ? (
              <p style={{ color: "red" }}>Email invalid !! </p>
            ) : (
              <></>
            )}
            {/* Phone*/}
            <input
              name="soDt"
              value={user.soDt}
              onChange={handleChangeUser}
              className="formLogin__inputItem"
              type="text"
              placeholder="Phone Number"
              onClick={() => {
                handleFail(false);
                validationForm.soDt = false;
              }}
            />
            {validationForm.soDt ? (
              <p style={{ color: "red" }}>Phone cannot be left blank!! </p>
            ) : (
              <></>
            )}
            {regex.soDt ? (
              <p style={{ color: "red" }}>Phone invalid!!!</p>
            ) : (
              <></>
            )}

            {/* Name */}
            <input
              name="hoTen"
              value={user.hoTen}
              onChange={handleChangeUser}
              className="formLogin__inputItem"
              type="text"
              placeholder="Your Name"
              onClick={() => {
                handleFail(false);
                validationForm.hoTen = false;
              }}
            />
            {validationForm.hoTen ? (
              <p style={{ color: "red" }}>Name cannot be left blank!! </p>
            ) : (
              <></>
            )}

            {/* Submit */}
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="secondary"
            >
              <strong> Sign Up</strong>
            </Button>
          </div>

          <p className="formLogin__text">
            Have to Netflix?
            <NavLink className="auth" to="signin">
              Login
            </NavLink>
          </p>
          {/* THÔNG BÁO RẰNG TÀI KHOẢN ĐÃ TỒN TẠI RỒI. */}
          {fail ? (
            <Alert
              style={{ color: "#fff" }}
              variant="outlined"
              severity="error"
            >
              Account already exists.
            </Alert>
          ) : (
            <> </>
          )}
        </div>
      </FormLogin>
    </Container>
  );
}

export default Index;
