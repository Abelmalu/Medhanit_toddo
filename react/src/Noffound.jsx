import { Link } from "react-router-dom";

const NotFound = () => {
    return (

       <div className="bg-gray-800 text-white p-10 rounded-lg shadow-lg max-w-lg mx-auto mt-16">
  <div className="text-center">
    <h2 className="text-5xl font-bold text-red-500 mb-4">Oops!</h2>
    <p className="text-xl text-gray-300 mb-6">The page you are looking for could not be found.</p>
    <Link
      to="/"
      className="inline-block px-6 py-3 rounded-md bg-green-500 hover:bg-green-700 text-white font-semibold shadow-md transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none"
    >
      Back to Homepage
    </Link>
  </div>
</div>

     );
}

export default NotFound;
