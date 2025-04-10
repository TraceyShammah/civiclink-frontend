import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
      <nav className="navList2">
        <ul>
          <button>
            <Link to="/dashboard"><p>Federal</p></Link>
          </button>
          <button>
            <Link to="/dashboard/profile"><p>State</p></Link>
          </button>
          <button>
            <Link to="/dashboard/profile"><p>Local</p></Link>
          </button>
        </ul>
      </nav>
      
  );
};

export default Navbar2;
