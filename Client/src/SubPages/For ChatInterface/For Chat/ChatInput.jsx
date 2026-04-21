import { Image, Send } from "lucide-react";
import { useRef } from "react";

const ChatInput = () => {
  const fileRef = useRef();

  // const readFile = () => {

  //   fileRef.current.file[0]
  //   const fileReader = new FileReader;
  //   const result = fileReader.result
  // }

  return (
    <section id="ChatInput">
      <div></div>
      <input type="text" placeholder="Enter A Message...." />
      <button onClick={() => fileRef.current.click()}>
        <input type="file" className="hidden" ref={fileRef} accept="image/*" />
        <Image />
      </button>
      <button>
        <Send />
      </button>
    </section>
  );
};

export default ChatInput;
