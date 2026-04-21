import { Search } from "lucide-react"

import ChatHeader from '../For ChatInterface/For Chat/ChatHeader'
import ChatContainer from '../For ChatInterface/For Chat/ChatContainer'
import ChatInput from '../For ChatInterface/For Chat/ChatInput'

const Messages = () => {
  return (
    <section id="Messages">
      <div className="contacts">
        <div className="flex bg-gray-600 items-center h-10 px-2 rounded-2xl ">
          <input type="search" className="outline-0 border-0 w-full text-sm pl-2" placeholder="search a contact" />
          <Search />
        </div>
        <div className="contact-list">
          <div className="contact">
            <div className="contact-image">
              <img src="/Images/Default.png" className="rounded-full size-10" />
              <span className="size-1 bg-green-500 rounded-full"/>
            </div>
            <div className="contact-details">
              <h1>Nexus</h1>
              <p>Lorem ipsummc ajf</p>
            </div>
          </div>
          <div className="contact">
            <div className="contact-image">
              <img src="/Images/Default.png" className="rounded-full size-10" />
              <span className="size-1 bg-green-500 rounded-full"/>
            </div>
            <div className="contact-details">
              <h1>Nexus</h1>
              <p>Lorem ipsummc ajf</p>
            </div>
          </div>
        </div>
      </div>
      <div className="chat">
        <ChatHeader />
        <ChatContainer />
        <ChatInput />
      </div>
    </section>
  )
}

export default Messages