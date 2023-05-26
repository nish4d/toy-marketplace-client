import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import bg1 from "../../../../assets/sliderbg1.png";
import bg2 from "../../../../assets/sliderbg2.png";

const Hero = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div
          className="keen-slider__slide number-slide1 flex justify-center items-center h-[50rem]"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className=" md:ml-[40rem]">
            <div className="font-semibold space-y-4 text-center">
              <div data-aos="fade-down">
                <p className="tracking-widest text-2xl text-primary">
                  Choose Your Toys
                </p>
                <h2 className="text-7xl">Your Favorite Toys</h2>
                <p>
                  Up To <span className="text-primary">60%</span> Off On
                  Selected Toys!
                </p>
              </div>
              <button data-aos="fade-up" className="SBtn">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="keen-slider__slide number-slide2 flex justify-center items-center h-[50rem]"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className=" md:mr-[40rem]">
            <div className="font-semibold space-y-4 text-center">
              <div data-aos="fade-down">
                <p className="tracking-widest text-2xl text-primary">
                  Choose Your Toys
                </p>
                <h2 className="text-7xl">Your Favorite Toys</h2>
                <p>
                  Up To <span className="text-primary">60%</span> Off On
                  Selected Toys!
                </p>
              </div>
              <button data-aos="fade-up" className="SBtn">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
