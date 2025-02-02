import React from "react";
import { Github, AtSign, Code2, ExternalLink } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import SkillSection from "./components/SkillSection";
import Dots from "./components/Dots";
import Squares from "./components/Squares";
import Rectangles from "./components/Rectangles";
import TypewriterEffect from "./components/TypewriterEffect";
import ContactSection from "./components/ContactSection";
import { projects, skills, skills1, skills2, skills3 } from "./components/data";

function App() {
  const navLinks = ["#home", "#works", "#about-me", "#contacts"];

  return (
    <div className="min-h-screen bg-[#1a1d21] text-white overflow-hidden ">

      {/* ********** */}
      {/* Navigation */}
      {/* ********** */}

      <nav className="fixed top-0 w-full bg-[#1a1d21]/90 backdrop-blur-sm z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="text-[#b49cff]" />
            <span className="font-mono cursor-pointer text-[20px] hover:text-[#b49cff]">
              Mubashir Ahmed Siddiqui
            </span>
          </div>
          {/* <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-gray-400 text-[17px] hover:text-[#b49cff] transition-colors"
              >
                {link}
              </a>
            ))}
          </div> */}
        </div>
      </nav>


      {/* ************ */}
      {/* Hero Section */}
      {/* ************ */}


      <section className="pt-32 px-6 relative">
        <Dots className="absolute top-12 left-8 opacity-60" />
        <Squares className="absolute right-24 top-24" />
        <Rectangles className="absolute -left-12 top-48" />
        <Squares variant="dotted" className="absolute right-48 bottom-12" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-[45px] font-extrabold">
              Mubashir Ahmed Siddiqui <br />{" "}
              <span className="text-[#b49cff]"> is an Al/ML engineer</span> and
              <br />
              <span className="text-[#b49cff]">Data Scientist</span>
            </h1>
            <p className="text-gray-400 text-[15px]">
              Seasoned AI/ML Engineer proficient in various stacks including
              TensorFlow, PyTorch, Scikit-learn, Keras, and MXNet. Committed to
              continuous learning and exploration in deep learning frameworks
              such as Hugging Face Transformers and fast.ai. Experienced in
              deploying ML models with Docker, Kubernetes, and AWS SageMaker.
              Passionate about staying abreast of the latest advancements in
              natural language processing, computer vision, and reinforcement
              learning. Excited to collaborate on cutting-edge projects that
              push the boundaries of AI innovation.
            </p>
            <button className="px-4 py-2 border border-[#b49cff] text-[#b49cff] hover:bg-[#b49cff]/10 transition-colors">
              Contact me!! 
            </button>
          </div>

          <div className="relative">
            <Dots className="absolute top-12 left-8 opacity-60" />
            <Squares className="absolute right-24 top-24" />
            <Squares variant="dotted" className="absolute right-48 bottom-12" />
            <img
              src="/images/port1.png"
              alt="Developer"
              className="w-[400px] object-cover rounded-lg md:ml-40"
            />

            <TypewriterEffect />
          </div>
        </div>
      </section>


      {/* ************* */}
      {/* Quote Section */}
      {/* ************* */}


      <section className="py-24 px-6 relative">
        <Squares className="absolute left-12 top-12 opacity-60" />
        <Rectangles className="absolute right-0 bottom-0" />
        <div className="max-w-2xl mx-auto">
          <blockquote className="border-2 border-gray-500 p-6 rounded-lg">
            <p className="text-[30px] text-[#b49cff] italic cursor-pointer hover:text-white">
              "With great power comes great electricity bill"
            </p>
            <footer className="text-right text-gray-400 mt-4 text-[18px] font-bold">
              - Dr. Who
            </footer>
          </blockquote>
        </div>
      </section>


      {/* **************** */}
      {/* Projects Section */}
      {/* **************** */}


      <section className="py-6 px-6 relative" id="projects">
        <Dots className="absolute right-12 top-24 opacity-60" />
        <Squares variant="dotted" className="absolute left-24 bottom-12" />
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-extrabold"><span className="text-[#b49cff]">#</span>PROJECTS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>



      {/* ************** */}
      {/* Skills Section */}
      {/* ************** */}


      <section className="pt-12 py-3 px-6 relative" id="skills">
        <Squares className="absolute left-0 bottom-12 opacity-60" />
        <Dots className="absolute right-12 top-24 opacity-60" />
        <Rectangles className="absolute left-48 top-24" />
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-8 font-extrabold">
            <span className="text-[#b49cff]">#</span>SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="border-2 border-gray-500 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:bg-gray-700"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <h3 className="text-[17px] mb-4">{category}</h3>
                <ul className="space-y-2 text-gray-400">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-3 px-6 relative" id="skills1">
        <Squares className="absolute left-0 bottom-12 opacity-60" />
        <Dots className="absolute right-12 top-24 opacity-60" />
        <Rectangles className="absolute left-48 top-24" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(skills1).map(([category, items]) => (
              <div
                key={category}
                className="border-2 border-gray-500 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:bg-gray-700"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <h3 className="text-[17px] mb-4">{category}</h3>
                <ul className="space-y-2 text-gray-400">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-3 px-6 relative" id="skills2">
        <Squares className="absolute left-0 bottom-12 opacity-60" />
        <Dots className="absolute right-12 top-24 opacity-60" />
        <Rectangles className="absolute left-48 top-24" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(skills2).map(([category, items]) => (
              <div
                key={category}
                className="border-2 border-gray-500 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:bg-gray-700"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <h3 className="text-[17px] mb-4">{category}</h3>
                <ul className="space-y-2 text-gray-400">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-3 px-6 relative" id="skills3">
        <Squares className="absolute left-0 bottom-12 opacity-60" />
        <Dots className="absolute right-12 top-24 opacity-60" />
        <Rectangles className="absolute left-48 top-24" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(skills3).map(([category, items]) => (
              <div
                key={category}
                className="border-2 border-gray-500 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:bg-gray-700"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <h3 className="text-[17px] mb-4">{category}</h3>
                <ul className="space-y-2 text-gray-400">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* *************** */}
      {/* Contact Section */}
      {/* *************** */}

      <ContactSection/>




      {/* ****** */}
      {/* Footer */}
      {/* ****** */}


      <footer className="border-t border-gray-800 py-6 px-6 mt-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="text-[#b49cff]" />
              <span className="font-mono">MADE_BY_SATURO_GOJO</span>
            </div>
            <p className="text-sm text-gray-400">THE HONORED ONE</p>
          </div>
          {/* <div className="text-sm text-gray-400">
            © Copyright 2024. Made by Gojo
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default App;


