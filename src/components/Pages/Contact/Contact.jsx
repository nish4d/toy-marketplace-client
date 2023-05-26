import { Helmet } from "react-helmet";
import bg from "../../../assets/bg.png";
const Contact = () => {
  return (
    <>
        <Helmet>
        <title>AT | CONTACT</title>
    </Helmet>
        <div
      className=" py-12 flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form className="my-14 w-2/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              {" "}
              Your name{" "}
            </label>
            <div className="mt-2.5 relative">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your full name"
                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              {" "}
              Email address{" "}
            </label>
            <div className="mt-2.5 relative">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your full name"
                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              {" "}
              Phone number{" "}
            </label>
            <div className="mt-2.5 relative">
              <input
                type="tel"
                name=""
                id=""
                placeholder="Enter your full name"
                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              {" "}
              Company name{" "}
            </label>
            <div className="mt-2.5 relative">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your full name"
                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="" className="text-base font-medium text-gray-900">
              {" "}
              Message{" "}
            </label>
            <div className="mt-2.5 relative">
              <textarea
                name=""
                id=""
                placeholder=""
                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-primary caret-primary"
                rows="4"
              ></textarea>
            </div>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full MBtn"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default Contact;
