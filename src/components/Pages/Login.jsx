import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function to validate form inputs
  const validateForm = () => {
    if (!email.trim().includes("@")) {
      setError("Invalid email address.");
      return false;
    }

    setError("");
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    // Call handleLogin with trimmed values
    handleLogin(email.trim(), password.trim());
    setEmail("");
    setPassword("");
  };

  // Form is valid only if all fields are non-empty and meet validation criteria
  const isFormValid =
    email.trim().length > 0 &&
    password.trim().length > 0 &&
    email.trim().includes("@");

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div>
        <div className="flex flex-col border-2 w-[350px] rounded-lg border-indigo-900 p-20">
          <h1 className="font-bold text-2xl whitespace-nowrap flex justify-center relative bottom-16">
            TASKLY
          </h1>
          <form onSubmit={submitHandler} className="flex flex-col items-center gap-5">
            <input
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="outline-none bg-transparent border-2 border-indigo-900 font-medium text-lg py-2 px-6 rounded-lg"
              type="email"
              placeholder="ENTER EMAIL"
            />
            <input
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="outline-none bg-transparent border-2 border-indigo-900 font-medium text-lg py-2 px-6 rounded-lg"
              type="password"
              placeholder="ENTER PASSWORD"
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`border-none outline-none font-bold text-xl p-2 w-full rounded-lg relative top-16 ${
                isFormValid
                  ? "bg-indigo-900 hover:bg-indigo-950"
                  : "bg-[rgb(40,40,40)] cursor-not-allowed"
              }`}
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
