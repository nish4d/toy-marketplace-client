
const AboutUs = () => {
  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div data-aos="fade-right">
              <div className="text-center my-12">
                <p className="tracking-widest text-xl text-primary">
                  KNOW EVERYTHING
                </p>
                <h2 className="text-6xl mt-4 font-semibold">About Us</h2>
              </div>
              <p className="mt-4 text-base text-center leading-relaxed text-gray-600">
                we believe in the power of play and its ability to inspire,
                educate, and bring joy to both children and adults. We are
                passionate about animals and strive to provide a wide range of
                high-quality animal toys that capture the essence of these
                fascinating creatures.
              </p>
            </div>

            <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
              <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                <img
                  className="ml-auto"
                  src="https://i.ibb.co/D4zxKND/hummingbird-printed-t-shirt-2.jpg"
                  alt=""
                />

                <img
                  className="absolute -top-4 -left-12"
                  src="https://i.ibb.co/D4zxKND/hummingbird-printed-t-shirt-2.jpg"
                  alt=""
                />

                <div className="absolute -bottom-10 -left-16">
                  <div className="bg-yellow-300">
                    <div className="px-8 py-10">
                      <span className="block text-4xl font-bold text-black lg:text-5xl">
                        {" "}
                        53%{" "}
                      </span>
                      <span className="block mt-2 text-base leading-tight text-black">
                        {" "}
                        High Conversions
                        <br />
                        Everything{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
