import { MessageSquare, Compass, Send, MenuIcon } from "lucide-react";
import Features from "../SubPages/Features";

const Landing = () => {
  return (
    <section id="Landing">
      <div className="firstPage">
        <div className="left">
          <p className="text-[10px] text-gray-200">
            <span className="rounded-full bg-purple-500 p-0.5"> </span> PULSE
            SYSTEM V2.0 LIVE
          </p>
          <div className="heading">
            <h1>COMMUNICATE</h1>
            <h1 className="text-cyan-400">IN THE VOID.</h1>
          </div>
          <div className="description">
            <p>
              Step into a premium, end-to-end encrypted sanctuary designed for
              those who demand absolute privacy and uncompromising speed.
            </p>
          </div>
          <div className="btns">
            <button className="bg-cyan-400 px-6 py-2 rounded-sm hover:scale-105 transition-transform">
              GET STARTED
            </button>
            <button className="hover:text-cyan-200 transition-colors">
              EXPLORE FEATURES
            </button>
          </div>
        </div>
        <div className="right">
          <div className="icons">
            <div className="size-12 bg-linear-30 from-blue-300 to-purple-400 text-gray-700 font-bold rounded-full flex justify-center items-center">
              N
            </div>
            <div className="size-12 bg-gray-700 rounded-full flex justify-center items-center text-gray-400">
              <MessageSquare />
            </div>
            <div className="size-12 bg-gray-700 rounded-full flex justify-center items-center text-gray-400">
              <Compass />
            </div>
            <div className="">
              <img
                src="/Images/Default.png"
                alt=""
                width={20}
                className="size-12 bg-gray-700 rounded-full flex justify-center items-center border-2 border-purple-400"
              />
            </div>
          </div>
          <div className="chat-area">
            <div className="flex justify-between items-center">
              <h2 className="font-bold font-Grotesk text-2xl">#central-pulse</h2>
              <MenuIcon />
            </div>
            <div className="flex flex-col min-w-md gap-4 mt-12 mb-4 text-sm">
              <div className="flex justify-start w-full">
                <p className="max-w-2xs bg-gray-800 rounded-2xl p-2">
                  The encryption protocols have been updated across all nodes.
                  Signal is 100% clean.
                </p>
                <span></span>
              </div>
              <div className="flex items-start justify-end w-full">
                <p className="bg-secondary rounded-2xl p-2 max-w-2xs">
                  Confirmed. Running a trace-zero check on the new pulse
                  architecture now.
                </p>
                <span></span>
              </div>
            </div>
            <div className="flex border-b border-cyan-200 py-2">
              <input type="text" readOnly placeholder="Message in #central-pulse" className="w-full bg-transparent outline-0 text-sm"/> <Send className="text-cyan-400"/>{" "}
            </div>
          </div>
        </div>
      </div>
      <Features />
    </section>
  );
};

export default Landing;
