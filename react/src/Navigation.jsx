import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white">
  <div className="container mx-auto px-4 py-2 flex justify-between items-center">
    <a href="/" className="font-bold text-lg">AbelsTodo</a>
    <ul className="flex space-x-4">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/add">New Task</Link></li>
    </ul>
  </div>
</nav>


     );
}

export default Navbar;
