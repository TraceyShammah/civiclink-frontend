import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../context/auth.context";

const Navbar = () => {
//   const { user, logout } = useAuthContext();
//   const role = user && user.role;
  const navigate = useNavigate();

  const HomePage = () => {
    // logout();
    navigate("/");
  };

  return (
    <div className="nav-bar">
        <article>
            <button className="logout" onClick={HomePage}><h1>CivicLink</h1>  </button>
        </article>
     
        <button className="hambuger">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7.95 11.95h32m-32 12h32m-32 12h32"/></svg>
        </button>
    </div>
  );
};

export default Navbar;
