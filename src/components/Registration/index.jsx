import React from "react";
import useSignUpForm from "../Hooks";
import "./Registration.css";

const Registration = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="inputField">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={inputs.name}
            required
          />
        </div>
        <div className="inputField">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </div>
        <div className="inputField">
          <label>Password</label>
          <input
            type="password"
            name="passwordOne"
            onChange={handleInputChange}
            value={inputs.passwordOne}
          />
        </div>
        <div className="inputField">
          <label>Confirm Password</label>
          <input
            type="password"
            name="passwordTwo"
            onChange={handleInputChange}
            value={inputs.passwordTwo}
          />
        </div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default Registration;
