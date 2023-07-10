import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";
import routes from "../config/routes";
import Button from "./Button";
import { useAuth0 } from "@auth0/auth0-react";
 
export default function NavbarFunc() {
    const [isVisible, setIsVisible] = useState(false)
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible)
    }
 
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map((route) => (
        <Typography
          key={route.path}
          as="li"
          variant="small"

          >
          <Link to={route.path} className="flex items-center hover:text-blue-400 hover:border-blue-400">
            {route.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );
 
  return (
    <Navbar className="text-gray-300 lg:py-4 bg-slate-800">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 text-2xl font-medium"
        >
          Whiskey Inventory
        </Typography>
        <div className='relative ml-auto p-3'>
            <button onClick={dropDown} className='flex items-center px-3 py-2 border rounded hover:text-white hover:border-blue-400'>
            <i className="fa-solid fa-martini-glass"></i>
            </button>
        </div>
        { isVisible ? ( 
            <div className="hidden lg:block">
                {navList}
                {
                            !isAuthenticated ? 
                            <Button className='flex items-center hover:text-blue-400 hover:border-blue-400'>
                                <div>
                                    <Link to="/" onClick={signInOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
                                        Login
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className='flex items-center hover:text-blue-400 hover:border-blue-400'>
                                <div>
                                    <Link to="/" onClick={signOutOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
                                        Sign Out
                                    </Link>
                                </div>
                            </Button>
                        }    
            </div>
        ) : (
        <></>
        ) }
        </div>
    </Navbar>
  );
}