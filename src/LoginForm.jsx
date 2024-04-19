import React, { useState } from "react";

function LoginForm(params) {
  const [isEmail, setIsEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [otpLength, setOtpLength] = useState(6);

  const OTPSENT = 123456;
  const handleOnClick = () => {
    setIsEmail(!isEmail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, phoneNo);

    setFormSubmitted(true);
  };

  const handleOtpValidation = (e, val) => {
    // validate correct otp
    // if true: show user details
    // else Error
    e.preventDefault();

    console.log(e.target, val);
    // debugger;
  };

  return (
    <div>
      {!formSubmitted ? (
        <div>
          <form onSubmit={handleSubmit}>
            {isEmail ? (
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            ) : (
              <input
                type="text"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder="Enter Phone number"
              />
            )}
            <input type="submit" />
          </form>
          <button onClick={handleOnClick}>
            {isEmail ? "Enter Phone Number" : "Enter Email"}
          </button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleOtpValidation}>
            {[0, 1, 2, 3, 4, 5].map((val, index) => {
              return <input name={`input${index}`} type="number" />;
            })}
            <input type="submit" />
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
