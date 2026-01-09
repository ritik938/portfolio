export default function Projects() {
  const photo1 = new URL("../../public/swiggy.png", import.meta.url).href;
  const photo2 = new URL("../../public/leetcode.png", import.meta.url).href;

  return (
    <div className="bg-linear-to-b from-gray-800 via-gray-800 to-gray-700 min-h-screen py-12">
      <h1 className="text-4xl md:text-6xl text-blue-400 text-center mb-12">
        Projects
      </h1>

      <div className="container mx-auto flex justify-center gap-10">

        {/* Project 1 */}
        <div className="w-full max-w-sm flex flex-col items-center gap-4 p-5 rounded-2xl border border-black bg-gray-500 transition-transform duration-300 hover:scale-105">
          <img
            className="w-full h-56 md:h-64 object-cover rounded-2xl"
            src={photo1}
            alt="Tic Tac Toe Project"
          />
          <a
            href="https://swiggy-clone-all.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-2xl text-lg md:text-xl px-5 py-3"
          >
            See Demo
          </a>
        </div>

        {/* Project 2 */}
        <div className="w-full max-w-sm flex flex-col items-center gap-4 p-5 rounded-2xl border border-black bg-gray-500 transition-transform duration-300 hover:scale-105">
          <img
            className="w-full h-56 md:h-64 object-cover rounded-2xl"
            src={photo2}
            alt="Quotes Generator Project"
          />
          <a
            href="https://leetmetric-742465.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-2xl text-lg md:text-xl px-5 py-3"
          >
            See Demo
          </a>
        </div>

      </div>
    </div>
  );
}
