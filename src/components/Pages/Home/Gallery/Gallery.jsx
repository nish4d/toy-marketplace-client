import { Link } from "react-router-dom";

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://i.ibb.co/vkK3Txc/mug-today-is-a-good-day.jpg",
      title: "Image 1",
    },
    {
      id: 2,
      src: "https://i.ibb.co/MhgGL0L/mug-the-best-is-yet-to-come-2.jpg",
      title: "Image 2",
    },
    {
      id: 3,
      src: "https://i.ibb.co/D4zxKND/hummingbird-printed-t-shirt-2.jpg",
      title: "Image 3",
    },
    {
      id: 4,
      src: "https://i.ibb.co/DthgHgf/mug-the-best-is-yet-to-come-1.jpg",
      title: "Image 4",
    },
    {
      id: 5,
      src: "https://i.ibb.co/7WkYPsv/mug-the-best-is-yet-to-come.jpg",
      title: "Image 5",
    },
    {
      id: 6,
      src: "https://i.ibb.co/QbSN40N/today-is-a-good-day-framed-poster-1.jpg",
      title: "Image 6",
    },
    {
      id: 7,
      src: "https://i.ibb.co/3c51VrY/today-is-a-good-day-framed-poster.jpg",
      title: "Image 7",
    },
    {
      id: 8,
      src: "https://i.ibb.co/x8mGT8w/the-best-is-yet-to-come-framed-poster-1.jpg",
      title: "Image 7",
    },
    {
      id: 9,
      src: "https://i.ibb.co/yPRFjxZ/the-best-is-yet-to-come-framed-poster.jpg",
      title: "Image 7",
    },
    {
      id: 10,
      src: "https://i.ibb.co/Vjv5RDF/brown-bear-printed-sweater-1.jpg",
      title: "Image 7",
    },
    {
      id: 11,
      src: "https://i.ibb.co/193r93S/hummingbird-printed-t-shirt-1.jpg",
      title: "Image 7",
    },
    {
      id: 12,
      src: "https://i.ibb.co/Fg7B02x/hummingbird-printed-t-shirt.jpg",
      title: "Image 7",
    },
  ];

  return (
    <div>
      <div className="text-center my-12">
            <p data-aos="fade-right" className="tracking-widest text-xl text-primary">TRENDING PRODUCTS</p>
            <h2 data-aos="fade-left" className="text-5xl mt-4 font-semibold">Exclusive Collection</h2>
        </div>
      <div>
        {/*------- gallery -------*/}

        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 bg-neutral rounded-lg">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative rounded-lg p-4 overflow-hidden"
              >
                <img
                data-aos="zoom-in-up"
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform transition duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-pink-500 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                  <Link className="text-white text-lg px-4 py-2 rounded bg-primary font-semibold">
                    View Toy
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
