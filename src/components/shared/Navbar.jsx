import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../provider/AuthProvider";
import { GiCrossMark, GiSpy } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  return (
    <>
      <div className="flex justify-between items-center container mx-auto py-4">
        <Link to="/">
        <div className="flex items-center gap-4">
                <img className="w-12" src={logo} alt="Animal toy bunny" />
                <div className="">
                <h2 className="text-2xl font-bold text-secondary">AT BUNNY</h2>
                <p className="text-sm text-primary">Online Toy Store</p>
                </div>
              </div>
        </Link>
        <nav className="hidden md:block text-md font-semibold">
          <div className="flex items-center gap-12">
            <div className="space-x-8">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary" : "white"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary" : "white"
                }
                to="/alltoys"
              >
                All Toys
              </NavLink>
              {user && (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "white"
                    }
                    to="/mytoys"
                  >
                    My Toys
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "white"
                    }
                    to="/addtoys"
                  >
                    Add Toys
                  </NavLink>
                </>
              )}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary" : "white"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </div>
            {user ? (
              <div className="flex gap-4 items-center">
                <div
                  className="hover:tooltip   tooltip-open hover:tooltip-bottom hover:tooltip-primary"
                  data-tip={user.displayName}
                >
                  {user.photoURL ? (
                    <div className="w-10 h-10 border-2 flex justify-center items-center  border-primary rounded-full">
                      <img
                        className="w-10 h-8 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                    </div>
                  ) : (
                    <GiSpy className="w-10 h-8 rounded-full text-primary"></GiSpy>
                  )}
                </div>
                <Link
                  to="/login"
                  onClick={handleLogout}
                  className="hidden md:block SBtn"
                >
                  Log Out
                </Link>
              </div>
            ) : (
              <Link to="/login" className="hidden md:block SBtn">
                Login
              </Link>
            )}
          </div>
        </nav>

        <button className="md:hidden mr-6" onClick={() => setOpen(!open)}>
          {!open ? (
            <FaAlignRight className="text-primary"></FaAlignRight>
          ) : (
            <GiCrossMark className="text-primary"></GiCrossMark>
          )}
        </button>
      </div>
      <div className="md:hidden">
        {open && (
          <nav className="shadow-xl p-4 text-center">
            <div className="flex flex-col gap-2">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary px-2 rounded "
                    : "hover:bg-primary px-2 rounded hover:text-white"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary px-2 rounded"
                    : "hover:bg-primary px-2 rounded hover:text-white"
                }
                to="/alltoys"
              >
                All Toys
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary px-2 rounded"
                    : "hover:bg-primary px-2 rounded hover:text-white"
                }
                to="/mytoys"
              >
                My Toys
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary px-2 rounded"
                    : "hover:bg-primary px-2 rounded hover:text-white"
                }
                to="/addtoys"
              >
                Add Toys
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary px-2 rounded"
                    : "hover:bg-primary px-2 rounded hover:text-white"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </div>
            <div className="flex justify-center mt-4 font-semibold">
              {user ? (
                <div className="flex gap-4 items-center">
                  <div
                    className="hover:tooltip w-10 h-10 rounded-full tooltip-open hover:tooltip-bottom hover:tooltip-primary"
                    data-tip={user.displayName}
                  >
                    {user.photoURL ? (
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                    ) : (
                      <GiSpy className="text-xl mt-3 text-primary"></GiSpy>
                    )}
                  </div>
                  <Link
                    to="/login"
                    onClick={handleLogout}
                    className="hidden md:block SBtn"
                  >
                    Log Out
                  </Link>
                </div>
              ) : (
                <Link to="/login" className="hidden md:block SBtn">
                  Login
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default Navbar;
