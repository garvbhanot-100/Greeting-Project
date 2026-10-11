import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function Singup() {
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [isSignUp, setisSignup] = useState(false);

  const navigate = useNavigate();

  const inputRef = useRef(null);
  const ageref = useRef(null);

  useEffect(() => {
    document.title = "Please Sign-up here";
  }, []);

  useEffect(() => {
    if (isSignUp === true) {
      navigate("/dashboard");
    }
  }, [isSignUp, navigate]);

  function handleLogin() {
    if (mail === "" || password === "") {
      alert("You haven't signed up! Please fill in all fields.");
    } else {
      setisSignup(true);
    }
  }

  function focusInput() {
    inputRef.current.focus();
  }

  function ageRefs() {
    ageref.current.focus();
  }

  return (
    <>
      <input
        ref={inputRef}
        placeholder="Enter your email"
        type="email"
        value={mail}
        onChange={(e) => setmail(e.target.value)}
      />

      <input
        ref={ageref}
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />

      <div className="buttons">
        <button
          onClick={focusInput}
          className="button-1"
        >
          Email Input
        </button>

        <button
          onClick={ageRefs}
          className="button-2"
        >
          Password Input
        </button>
      </div>

      <div>
        <button
          className="button-3"
          onClick={handleLogin}
        >
          Sign Up
        </button>
      </div>
    </>
  );
}

export default Singup;