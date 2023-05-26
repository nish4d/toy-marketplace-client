import { Link } from "react-router-dom";
import img from "../../assets/errorPage.jpg";

const ErrorPage = () => {
  return (
    <>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-white">
        <div>
          <img className="w-3/4 mx-auto" src={img} alt="" />
          <p className="text-center font-bold text-4xl my-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Page Not Found
          </p>
        </div>
        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-primary group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <Link to="/">
              <span className="relative block px-8 py-3 bg-white border border-current">
                Go Home
              </span>
            </Link>
          </a>
        </button>
      </main>
    </>
  );
};

export default ErrorPage;
