import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "./../context/firebase";
import LogoIPhone from "../images/iphoneWithProfile.jpg";
import logo from "../images/logo.png";

export default function Login() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src={LogoIPhone} alt="Iphone with Instagram" />
      </div>
      <div className="flex flex-col w-2/5">
        <h1 className="flex justify-center">
          <img src={logo} alt="logo" className="mt-2 mb-4 w-6/12" />
        </h1>
        {error && <p className="mb-4 text-xs text-red-primary ">{error}</p>}
        <form onSubmit={handleLogin} method="POST">
          <input
            aria-label="Enter your email address"
            type="text"
            placeholder="Email address"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            onChange={({ target }) => console.log(target.value)}
          />
          <input
            aria-label="Enter your Password"
            type="password"
            placeholder="Password"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            onChange={({ target }) => console.log(target.value)}
          />
        </form>
      </div>
    </div>
  );
}

//-> text-red-primary => hex values
// -> text-gray-base => hex values
// -> border-gray-primary => hex values
