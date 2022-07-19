import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "./../context/firebase";

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

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
