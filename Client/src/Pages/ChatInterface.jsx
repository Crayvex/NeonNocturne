import { Link, Navigate } from "react-router-dom";
import USER_STORE from "../Stores/User.store";
import {
  Settings,
  MessageSquare as Message,
  Archive,
  LogOut,
  ChartArea,
} from "lucide-react";

const ChatInterfaceNav = () => {
  const user = USER_STORE((state) => state.user);
  const logout = USER_STORE((state) => state.logout);

  const handleLogout = async () => {
    try {
      await logout();
      <Navigate to={"/"} />;
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <section id="Sidebar">
      <div className="profile">
        <img
          src={
            user.profilePic === "" || !user.profilePic
              ? "/Images/Default.png"
              : user.profilePic
          }
          alt=""
        />
        <div>
          <h1>{user.username}</h1>
          <div className="flex gap-1 items-center justify-center">
            <span className="bg-purple-400 size-1.5 rounded-full" />
            <p>pulse active</p>
          </div>
        </div>
      </div>
      <div className="links">
        <Link className="link" to="/Chat-Interface/Settings/Profile">
          <Settings className="icon" />
          <h1 className="linkName">Settings</h1>
        </Link>
        <Link className="link" to="/Chat-Interface/Messages">
          <Message className="icon" />
          <h1 className="linkName">Messages</h1>
        </Link>
        <Link className="link" to="/Chat-Interface/Channels">
          <ChartArea className="icon" />
          <h1 className="linkName">Channels</h1>
        </Link>
        <Link className="link" to="/Chat-Interface/Archive">
          <Archive className="icon" />
          <h1 className="linkName">Archive</h1>
        </Link>
      </div>
      <button type="button" onClick={() => handleLogout()}>
        <LogOut />
        <h1 className="md:block hidden">Logout</h1>
      </button>
    </section>
  );
};

export default ChatInterfaceNav;
