import { Link } from "react-router";

export default function About() {
  const myImage = new URL('../../public/ritik.jpg',import.meta.url);
  return (
    <div className="bg-linear-to-b from-gray-800 via-gray-800 to-gray-700 min-h-screen h-full py-12 flex flex-col justify-center">

      <div className="flex flex-col md:flex-row  justify-center gap-12 container mx-auto px-6">

        <div>
           <img className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover mx-auto md:mx-0 transition-transform duration-300 hover:scale-110" src={myImage} alt="It's me" ></img>
        </div>

        <div className="max-w-2xl">
          <h1 className="text-blue-500 text-4xl sm:text-5xl font-bold">
            Ritik Roshan
          </h1>

          <h2 className="text-xl sm:text-2xl text-white mt-3 font-medium">
            Front-End Developer
          </h2>

          <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed">
            I craft clean, modern, and responsive web experiences with a strong focus on speed, usability, and thoughtful design. Growing further into the MERN-stack workflow, I continue creating scalable applications with React, HTML5, CSS, TailwindCSS, and JavaScript that feel smooth, intuitive, and visually refined to bring ideas from concept into reality.
          </p>

          <Link to="/Projects" className="bg-white text-black px-6 py-3 rounded-2xl inline-block mt-6 transition-transform duration-300 hover:scale-110 cursor-pointer shadow-sm">
            View Project
          </Link>
        </div>
      </div>

      <div className="max-w-4xl container mx-auto mt-16">
        <h2 className="text-2xl sm:text-3xl mb-3 text-white font-semibold">
          About Me
        </h2>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          I am a developer with a passion for crafting clean, modern, and responsive web experiences that harmoniously balance speed, usability, and great design. In my growth to be a MERN stack developer, I am focused on scalable applications that work seamlessly, feel intuitive, and are pleasing to the eye. I enjoy turning ideas into smooth, impactful digital products while continuously improving my skills and keeping my curiosity open for new things.
        </p>
      </div>

    </div>
  );
}
