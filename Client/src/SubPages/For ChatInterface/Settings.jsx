import { Palette, SettingsIcon, User } from "lucide-react"
import { Link, Outlet } from "react-router-dom"

const Settings = () => {
  return (
    <section id='Settings'>
      <div className="settingsNav">
        <div className="text-4xl flex gap-2 items-center">
          <SettingsIcon className="size-8"/>
          <h1>Settings</h1>
        </div>
        <div className="links">
          <Link className="link" to="/Chat-Interface/Settings/Profile">
            <User className="icon" />
            <h1 className="linkName">Profile</h1> 
          </Link>
          <Link className="link" to="/Chat-Interface/Settings/Appearance">
            <Palette className="icon" />
            <h1 className="linkName">Appearance</h1> 
          </Link>
        </div>
      </div>
      <Outlet />
    </section>
  )
}

export default Settings