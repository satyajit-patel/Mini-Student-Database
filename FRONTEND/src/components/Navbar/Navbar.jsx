import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-100 border-b border-gray-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/ReadPage"
            className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md"
          >
            Read
          </Link>
          <Link
            to="/CreatePage"
            className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md"
          >
            Create
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
