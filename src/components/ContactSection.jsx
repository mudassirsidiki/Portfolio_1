import { AtSign, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="max-w-[1180px] mx-auto px-4">
      <h2 className="text-4xl mt-8 font-extrabold mb-4">
        <span className="text-[#b49cff]">#</span>ABOUT ME
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {/* Left Side - Contact Paragraph & About Me */}
        <div className="space-y-8">
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis praesentium sint optio fugit ducimus placeat architecto vitae veritatis, similique sit hic dolorum nulla, reprehenderit harum mollitia odit porro tempora! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officiis iste ad ab hic accusantium magni repellat, quas, debitis doloremque laudantium officia laboriosam. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi odio labore aut ad nulla, autem suscipit at ipsam assumenda harum consequatur quos consectetur impedit error fugit, repellendus aperiam consequuntur.
          </p>

          <div className="border border-gray-700 p-6 rounded-lg">
            <h1 className="text-[25px] mb-2">Contacts</h1>
            <p className="text-gray-400">
            I'm interested in freelance opportunities. However, if you have
            another request or question, don't hesitate to contact me.
            </p>

            <h3 className="text-lg mb-4 mt-6">Message me here</h3>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-[#b49cff]"
              >
                <AtSign size={16} /> Mubashirsidiki@gmail.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-[#b49cff]"
              >
                <Github size={16} /> mubashirsidiki
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Image & Decorative Elements */}
        <div className="relative flex justify-center">
          {/* Background Decorations */}
          <div className="absolute top-12 left-8 opacity-60 w-16 h-16 bg-gray-500 rounded-full"></div>
          <div className="absolute right-24 top-24 w-10 h-10 bg-gray-500 rounded"></div>
          <div className="absolute right-48 bottom-12 w-8 h-8 border border-gray-500 rounded"></div>

          {/* Image */}
          <img
            src="/images/port2.png"
            alt="Developer"
            className="w-[300px] md:w-[300px] object-cover rounded-lg "
          />

          {/* Typewriter Effect Box */}
          {/* <div className="absolute bottom-0 bg-[#1a1d21] p-2 rounded border border-gray-700 w-[300px] md:w-[300px] text-center">
            <p className="text-[21px] font-serif">🟣 Currently working at Mazik Global</p>
          </div> */}


        </div>
      </div>
    </div>
  );
};

export default ContactSection;
