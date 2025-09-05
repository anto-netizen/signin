
import React, { useState } from "react";

function SignInUp() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (isSignUp) {
        alert(`Signing up with email: ${email}`);
      } else {
        alert(`Signing in with email: ${email}`);
      }
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: "auto" }}>
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <div style={{ color: "red", fontSize: 12 }}>{errors.email}</div>
          )}
        </div>

        <div style={{ marginTop: 10 }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div style={{ color: "red", fontSize: 12 }}>{errors.password}</div>
          )}
        </div>

        <button type="submit" style={{ marginTop: 15 }}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>

      <p style={{ marginTop: 10 }}>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          style={{ color: "blue", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </div>
  );
}

export default SignInUp;
