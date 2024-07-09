import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../firebase-config";

// Import your components here
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async () => {
    setError(null);

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(appAuth, email, password);
      const user = userCredential.user;
      console.log("User registered successfully", user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during signup:", error);
      setError(error.message || "An error occurred during signup.");
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white w-80 text-center p-4 h-max">
        <Heading label="Sign up" />
        <SubHeading label="Enter your information to create an account" />

        <InputBox
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          label="First Name"
          type="text"
        />

        <InputBox
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          label="Last Name"
          type="text"
        />

        <InputBox
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          label="Email Address"
          type="email"
        />

        <InputBox
          onChange={(e) => setPassword(e.target.value)}
          placeholder="example:JK_123@jk"
          label="Password"
          type="password"
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="pt-4">
          <Button onClick={handleSignup} label="Sign Up" />
        </div>
        <BottomWarning
          label="Already have an account?"
          ButtonText="Sign in"
          to="/signin"
        />
      </div>
    </div>
  );
};
