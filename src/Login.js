import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

import { auth } from "./firebase";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await auth.signInWithEmailAndPassword(email, password);

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  const registerHandler = async () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    try {
      const userAuth = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await userAuth.user.updateProfile({
        displayName: name,
        photoUrl: profilePic,
      });

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic,
        })
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="login">
      <img
        src="data:image/jpeg;base64,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"
        alt="Linkedin main logo"
      />

      <form>
        <input
          placeholder="Full name (required for register)"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Profile pic URL (optional)"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={loginHandler}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={registerHandler}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
