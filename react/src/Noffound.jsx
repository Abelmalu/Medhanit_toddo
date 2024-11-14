import { Link } from "react-router-dom";

const NotFound = () => {
    return (

        <div>
            <h2>Oops</h2>
            <p>the page could not be found</p>
            <Link to="/">Back to Homepage..</Link>
        </div>
     );
}

export default NotFound;
