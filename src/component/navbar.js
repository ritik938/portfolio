import { Link } from "react-router"
export default function Navbar(){
    return (
        <div className="max-w-full sticky top-0 flex flex-col bg-gray-800 text-white md:flex-row justify-between items-center container mx-auto py-6 px-4">
        <div className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">My Portfolio</div>

        <div className="text-xl md:text-2xl flex gap-6 md:gap-10">
          <Link to="/" className="transition-transform hover:scale-110 cursor-pointer">Home</Link>
          <Link to="/About" className="transition-transform hover:scale-110 cursor-pointer">About</Link>
          <Link to="/Skills" className="transition-transform hover:scale-110 cursor-pointer">Skills</Link>
          <Link to="/Projects" className="transition-transform hover:scale-110 cursor-pointer">Project</Link>
          <Link to="/Contact" className="transition-transform hover:scale-110 cursor-pointer">Contact</Link>
        </div>
        </div>
    )
}