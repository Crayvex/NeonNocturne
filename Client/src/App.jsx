import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Landing from "./Pages/Landing";
import USER_STORE from "./Stores/User.store.js";
import Login from "./Pages/Login.jsx";
import { useEffect } from "react";

import Settings from "./SubPages/For ChatInterface/Settings";
import Archive from "./SubPages/For ChatInterface/Archive";
import Channels from "./SubPages/For ChatInterface/Channels";
import Messages from "./SubPages/For ChatInterface/Messages";
import ChatInterfaceNav from "./Pages/ChatInterface";
import Profile from "./SubPages/For ChatInterface/For Settings/Profile.jsx";
import Appearance from "./SubPages/For ChatInterface/For Settings/Appearance.jsx";

const App = () => {
  const user = USER_STORE((state) => state.user);
  const checkAuth = USER_STORE((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <main>
      <ToastContainer
        toastStyle={{ backgroundColor: "black", color: "white" }}
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={
            user === null ? <Login /> : <Navigate to={"/Chat-Interface/Messages"} />
          }
        />
        <Route
          element={
            user === null ? (
              <Navigate to={'/login'} />
            ) : (
              <section id='ChatInterface'>
                <ChatInterfaceNav />
                <Outlet />
              </section>
            )
          }
        >
          <Route
            path="/Chat-Interface/Settings"
            element={<Settings />}
          >
            <Route path="/Chat-Interface/Settings/Profile" element={<Profile />} />
            <Route path="/Chat-Interface/Settings/Appearance" element={<Appearance />} />
          </Route>
          <Route
            path="/Chat-Interface/Archive"
            element={<Archive />}
          />
          <Route
            path="/Chat-Interface/Messages"
            element={<Messages />}
          />
          <Route
            path="/Chat-Interface/Channels"
            element={<Channels />}
          />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
