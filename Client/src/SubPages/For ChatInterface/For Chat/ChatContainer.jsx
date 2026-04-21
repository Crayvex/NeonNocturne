import USER_STORE from '../../../Stores/User.store'

const ChatContainer = () => {

  const user = USER_STORE((state) => state.user)

  const messages = [
    {
      senderId: 1,
      recieverId: 2,
      text: "Heyy"
  },
    {
      senderId: 1,
      recieverId: 1,
      text: "Heyy"
  },
    {
      senderId: 1,
      recieverId: 2,
      text: "Wassup"
  },
    {
      senderId: 1,
      recieverId: 1,
      text: "nthn much"
  },
    {
      senderId: 1,
      recieverId: 2,
      text: "Wassup"
  },
    {
      senderId: 1,
      recieverId: 1,
      text: "nthn much"
  },
    {
      senderId: 1,
      recieverId: 2,
      text: "Wassup"
  },
    {
      senderId: 1,
      recieverId: 1,
      text: "nthn much"
  },
    {
      senderId: 1,
      recieverId: 2,
      text: "Wassup"
  },
    {
      senderId: 1,
      recieverId: 1,
      text: "nthn much"
  },
    {
      senderId: 1,
      recieverId: 2,
      text: "Wassup"
  },
    {
      senderId: 1,
      recieverId: 1,
      text: "nthn much"
  },
    {
      senderId: 1,
      recieverId: 2,
      text: "Wassup"
  },
    {
      senderId: 1,
      recieverId: 1,
      text: "nthn much"
  },
]

  return (
    <section id="ChatContainer">
      <div className="h-full">
        {messages.map((message, i) => (
          <div key={i} className={`w-full h-fit flex flex-col rounded-2xl ${message.senderId === message.recieverId ? 'items-start' : 'items-end'}`}>
            <div className={`flex items-center gap-2 w-full h-fit px-4 py-2 ${message.senderId === message.recieverId ? 'justify-start' : 'justify-end'}`}>
              <img src={!user.profilePic || user.profilePic === '' ? '/Images/Default.png' : user.profilePic} className={`rounded-full size-10 ${message.senderId === message.recieverId ? 'block' : 'hidden'}`} />
              <div className={`max-w-1/2 w-fit h-fit px-4 py-2 rounded-4xl flex ${message.senderId === message.recieverId ? 'justify-end bg-slate-700' : 'justify-start bg-linear-60 from-purple-500 to-purple-700'}`}>
                {message.text}
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default ChatContainer