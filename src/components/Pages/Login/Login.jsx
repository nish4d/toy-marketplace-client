import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import bg from "../../../assets/bg.png";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet";

const Login = () => {
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  const { userLogin, handleGoogleSingIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location)
  const loc = location?.state?.from?.pathname || "/";

  const hnadleShow = () => {
    setShow(!show);
  };

  // login handle for email and password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setErr("");
    userLogin(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        navigate(loc, { replace: true });
        form.reset();
      })
      .catch((err) => {
        console.log(err);
        setErr(err.message);
      });
  };

  // google login handle
  const handlesGoogle = () => {
    handleGoogleSingIn()
      .then((result) => {
        console.log(result.user);
        navigate(loc, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Helmet>
        <title>AT | LOGIN</title>
    </Helmet>
    <div
      className="flex py-32 justify-center items-center bg-slate-900 bg-opacity-70 bg-blend-overlay"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* login page */}
      <div>
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-700 text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          </div>
          <form
            action=""
            onSubmit={handleLogin}
            className="space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Example@gmail.com"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-100 text-gray-900"
                />
              </div>
              <div className="relative">
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline text-primary"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  type={!show ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-100 text-gray-900"
                />
                <Link
                  className="absolute right-3 bottom-3"
                  onClick={hnadleShow}
                >
                  {" "}
                  {!show ? (
                    <FaEye className="text-primary"></FaEye>
                  ) : (
                    <FaEyeSlash className="text-primary"></FaEyeSlash>
                  )}{" "}
                </Link>
              </div>
              <div>
                {err && (
                  <h2 className="text-primary text-center">
                    Provide valid info !!!!!
                  </h2>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-gray-900"
                >
                  Sign in
                </button>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  aria-label="Log in with Google"
                  className="p-3 rounded-sm"
                  onClick={handlesGoogle}
                >
                  <FaGoogle className="text-2xl"></FaGoogle>
                </button>
              </div>
              <div className="px-6 flex gap-2 text-sm text-center text-gray-400">
                <p>Don't have an account yet?</p>
                <Link
                  to="/register"
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline text-primary"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
