

export default function Projects() {
  const photo1 = new URL("../../public/first.png", import.meta.url);
  const photo2 = new URL("../../public/second.png", import.meta.url);
  const photo3 = new URL("../../public/third.png", import.meta.url);

  return (
    <div className="bg-linear-to-b from-gray-800 via-gray-800 to-gray-700 min-h-screen py-12">
      <h1 className="text-4xl md:text-6xl text-blue-400 text-center mb-12">
        Projects
      </h1>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <div className="flex flex-col items-center gap-4 p-5 rounded-2xl border border-black bg-gray-500 transition-transform duration-300 hover:scale-105">
          <img
            className="w-full h-56 md:h-64 object-cover rounded-2xl"
            src={photo1}
            alt="project"
          />
          <a
            target="_blank"
            className="bg-white text-black rounded-2xl text-lg md:text-xl px-5 py-3"
            href="https://wanderlust-travelproject.netlify.app/"
          >
            See Demo
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 p-5 rounded-2xl border border-black bg-gray-500 transition-transform duration-300 hover:scale-105">
          <img
            className="w-full h-56 md:h-64 object-cover rounded-2xl"
            src={photo3}
            alt="project"
          />
          <a
            target="_blank"
            className="bg-white text-black rounded-2xl text-lg md:text-xl px-5 py-3"
            href="https://tic-tac-toe-game8989.netlify.app/"
          >
            See Demo
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 p-5 rounded-2xl border border-black bg-gray-500 transition-transform duration-300 hover:scale-105">
          <img
            className="w-full h-56 md:h-64 object-cover rounded-2xl"
            src={photo2}
            alt="project"
          />
          <a
            target="_blank"
            className="bg-white text-black rounded-2xl text-lg md:text-xl px-5 py-3"
            href="https://dynamic-quotes-generator.netlify.app/"
          >
            See Demo
          </a>
        </div>

      </div>
    </div>
  );
}