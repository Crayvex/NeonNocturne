import { X } from "lucide-react"
import USER_STORE from "../../../Stores/User.store"

const ChatHeader = () => {

  const user = USER_STORE((state) => state.user)

  return (
    <section id='ChatHeader'>
      <div className="user-details">
        <img src={user.profilePic === '' ? '/Images/Default.png' : user.profilePic} width={40} />
        <div>
          <h1>{user.username}</h1>
        </div>
      </div>
      <button>
        <X />
      </button>
    </section>
  )
}

export default ChatHeader