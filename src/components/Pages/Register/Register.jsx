import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import bg from "../../../assets/bg.png";
import { AuthContext } from "../../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";

const Register = () => {
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const { userRegister, logOut } = useContext(AuthContext);

  // toggle function
  const hnadleShow = () => {
    setShow(!show);
  };

  // register function
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password, img);

    if (password.length < 6) {
      return setErr("Password Must be 6 character !!!!!");
    }

    userRegister(email, password)
      .then((result) => {
        const registerUser = result.user;
        updateUser(registerUser, name, img);
        console.log(registerUser);
        logOut();
        navigate("/login");
        setErr("");
        form.reset();
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          setErr("Provide Valid New User Info !!!!!");
        }
      });
  };

  // update user
  const updateUser = (user, name, photoUrl) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  return (
    <>
      <Helmet>
        <title>AT | REGISTER</title>
      </Helmet>
      <div
        className="flex justify-center items-center py-32 bg-slate-900 bg-opacity-70 bg-blend-overlay "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col max-w-md w-full p-6 rounded-md sm:p-10 bg-gray-700 text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold">Create an account</h1>
          </div>
          <form
            action=""
            onSubmit={handleRegister}
            className=" ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-2">
              <div>
                <label htmlFor="text" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="text"
                  placeholder="Enter your Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300 text-gray-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Example@gmail.com"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300 text-gray-900"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="block mb-2 text-sm">
                  Password
                </label>
                <input
                  type={!show ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300 text-gray-900"
                  required
                />
                <Link
                  className="absolute right-2 bottom-3"
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
                <label htmlFor="img" className="block mb-2 text-sm">
                  Picture
                </label>
                <input
                  type="url"
                  name="img"
                  id="img"
                  placeholder="Enter your picture url"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300 text-gray-900"
                />
              </div>
              <div>
                <h2 className="text-center text-md text-red-600 font-bold">
                  {err}
                </h2>
              </div>
            </div>
            <div className=" mt-8">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-gray-900"
                >
                  Sign Up
                </button>
              </div>
              <div className="px-6 flex justify-center mt-3 gap-2 pt-2 text-sm text-center text-gray-400">
                <p> Don't have an account yet?</p>
                <Link
                  to="/login"
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline text-primary"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
