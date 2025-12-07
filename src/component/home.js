export default function Home() {
  return (
    <div className="bg-linear-to-r from-gray-800 via-gray-700 to-gray-600 min-h-screen flex justify-center">
      <div className="flex justify-between items-center container mx-auto">
        
        <div className="max-w-xl">
          <div className="text-3xl md:text-4xl">Software Developer</div>

          <div className="my-4">
            <h1 className="text-4xl md:text-5xl text-blue-400 my-1">Hello, I'm</h1>
            <h1 className="text-4xl md:text-5xl">Ritik Roshan</h1>
          </div>

          <p className="text-blue-100 text-sm md:text-base">
            I build clean, modern, and responsive web experiences that prioritize speed,
            usability, and design. As I continue to grow as a MERN stack developer, my
            focus is on crafting scalable applications that feel as good as they look.
          </p>

          <div className="flex gap-6 md:gap-10 mt-8 flex-wrap">
            <a href="/Projects" className="border border-blue-400 bg-blue-400 px-5 py-3 rounded-3xl text-[16px] transition-transform hover:scale-110 cursor-pointer">
              View My Work
            </a>
            <a className="text-black border border-white bg-white px-5 py-3 rounded-3xl text-[16px] transition-transform hover:scale-110 cursor-pointer">
              My Resume
            </a>
          </div>

          <div className="flex gap-5 mt-8">
            <a target="_blank" href="https://www.linkedin.com/in/ritik-roshan-b63922272/">
              <img
                className="h-10 transition-transform hover:scale-110"
                src="https://companieslogo.com/img/orig/LNKD.defunct.2016.D-dc0a6097.png?t=1722850217"
              />
            </a>

            <a target="_blank" href="https://github.com/ritik938">
              <img
                className="h-10 transition-transform hover:scale-110"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Github_logo_svg.svg/1200px-Github_logo_svg.svg.png?20230420150203"
              />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            className="w-60 sm:w-80 md:w-96 lg:w-120 "
            src="https://i.pinimg.com/originals/a5/72/c5/a572c5393618e0a1f62aced6d09ee1be.png"
          />
        </div>

      </div>
    </div>
  );
}
