import React from "react";
import verified from "./images/Verified.mp4";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const collectData = ()=>{
    alert("Submitted Sucesfully")
    console.log(email,password)
  }

  const Forgot = () => {
    alert("Please contact the admin")
  }


  return (
    <>
      <Navbar></Navbar>

      <div className="container login">
        <div className="row">
          <div className="left col-md-6">
            <video width="550" height="479" autoPlay muted>
              <source src={verified} type="video/mp4" />
            </video>
          </div>

          <div className="right col-md-6">
            <div className="row align-item-center">
              <div className="header-text mb-4">
                <h1>Hello</h1>
                <p>We are Happy to have you back</p>
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                ></input>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6" value={password} onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Password"
                ></input>
              </div>

              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                  />
                  <label
                    htmlFor="formCheck"
                    className="form-check-label text-secondary"
                  >
                    <small>Remember me</small>
                  </label>
                </div>

                <div className="forget">
                  <small>
                    <a href="/" onClick={Forgot}>Forgot Password?</a>
                  </small>
                </div>
              </div>

              <div className="input-group mb-3">
                <button onClick={collectData} className="btn btn-lg btn-primary w-100 fs-6">
                  Sign Up
                </button>
              </div>

              <div className="row">
                <small>
                  Don't have an account? <a href="/">Sign Up</a>{" "}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
