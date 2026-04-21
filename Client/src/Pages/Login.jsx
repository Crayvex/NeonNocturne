import {
  LockKeyhole as Lock,
  RocketIcon as Rocket,
  Eye,
  EyeClosed,
  User,
} from "lucide-react";
import { useState } from "react";
import USER_STORE from "../Stores/User.store";
import { Navigate } from "react-router-dom";

const Login = () => {

  const login = USER_STORE((state) => state.login)
  const signup = USER_STORE((state) => state.signup)
  const isLoggingIn = USER_STORE((state) => state.isLoggingIn)
  const isSigningUp = USER_STORE((state) => state.isSigningUp)

  const [state, setState] = useState("login");
  const [PassState, setPassState] = useState("password");

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state === 'login') {
        await login({email, password});
      } else {
        await signup({username, email, password});
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <section id="Login">
      <div className="heading">
        <Rocket className="text-cyan-300 size-10" />
        <a href="/">NEONNOCTURNE</a>
        <p>SECURE ACCESS PORTAL</p>
      </div>
      <form onSubmit={handleSubmit}>
        {state === 'signup' ? (
          <div className="input-field-container">
            <label htmlFor="username">Username</label>
            <div className="input-field">
              <User />
              <input
                type="text"
                id="username"
                placeholder="Nexus"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
        ) : ''}
        <div className="input-field-container">
          <label htmlFor="Email">Email Address</label>
          <div className="input-field">
            <h1>@</h1>
            <input
              type="email"
              id="email"
              placeholder="nexus@neon-nocturne.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="input-field-container">
          <label htmlFor="password">Password</label>
          <div className="input-field">
            <Lock />
            <input
              type={PassState}
              id="password"
              placeholder=". . . . . . . . ."
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() =>
                PassState === "password"
                  ? setPassState("text")
                  : setPassState("password")
              }
            >
              {PassState === "password" ? <EyeClosed /> : <Eye />}
            </button>
          </div>
        </div>
        <button type="submit" className="submit">
          {state === "login" ? "Log In" : "Sign Up"}<span className="text-3xl">→</span>{" "}
        </button>
      </form>
      <div className="footer">
        <p>ENCRYPTED SESSION</p>
        <h3>
          {state === "login"
            ? "Don't Have an account? "
            : "Already Have An Account? "}{" "}
          <button
            onClick={() =>
              state === "login" ? setState("signup") : setState("login")
            }
            disabled={isSigningUp || isLoggingIn}
          >
            {state === "login" ? "Sign Up" : "Log In"}
          </button>
        </h3>
        <div className="links">
          <a href="">PRIVACY</a>
          <a href="">TERMS</a>
          <a href="">API STATUS</a>
        </div>
        <p>@ 2024 NEON NOCTURNE DESIGNED FOR THE VOID</p>
      </div>
    </section>
  );
};

export default Login;
