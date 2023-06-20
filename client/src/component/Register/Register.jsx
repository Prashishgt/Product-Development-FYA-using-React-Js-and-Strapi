import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";
import bgc from "../../assets/bgc.jpg";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordAgain: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log("Submitting the form.");
      // TODO: handle form submission.
    } else {
      alert("Please make sure your password meets all the requirements.");
    }
  };

  return (
    <div className="register__wrapper">
      <div className="sub__wrapper">
        <div className="image__wrapper">
          <img src={bgc} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <input name="username" value={form.username} onChange={handleInputChange} placeholder="Username" />
          <input name="email" value={form.email} onChange={handleInputChange} placeholder="Email" />
          <div className="password-wrapper">
            <input
              name="password"
              value={form.password}
              onChange={handleInputChange}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <input
            name="passwordAgain"
            value={form.passwordAgain}
            onChange={handleInputChange}
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
          />
          <PasswordChecklist
            rules={["minLength", "specialChar", "number", "capital", "match"]}
            minLength={5}
            value={form.password}
            valueAgain={form.passwordAgain}
            onChange={setIsValid}
          />
          <button type="submit" disabled={!isValid}>Register</button>
        </form>
      </div>
    </div>
  )
};

export default Register;
