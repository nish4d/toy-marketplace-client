import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Categories = () => {
  const [activeTab, setActiveTab] = useState("Cat Toy");
  const [data, setData] = useState([]);

  // tab section
  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-nish4d.vercel.app/toyCategory/${activeTab}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [activeTab]);

  const handleTabClick = (e) => {
    setActiveTab(e.target.value);
  };

  console.log(data);

  return (
    <div className="container mx-auto">
      <div className="text-center my-12">
        <p data-aos="fade-right" className="tracking-widest text-xl text-primary">SHOP BY CATEGORY</p>
        <h2 data-aos="fade-left" className="text-5xl mt-4 font-semibold">Top Picks</h2>
      </div>
      <Tabs>
        <TabList className="flex justify-center items-center">
          <Tab>
            {" "}
            <input
              type="submit"
              onClick={handleTabClick}
              value="Cat Toy"
            />{" "}
          </Tab>
          <Tab>
            <input type="submit" onClick={handleTabClick} value="Unicorn Toy" />
          </Tab>
          <Tab>
            <input
              type="submit"
              onClick={handleTabClick}
              value="Dinosaur Toy"
            />
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-12">
            {data.slice(0, 8).map((toy) => (
              <div key={toy._id}>
                <div className="max-w-[20rem] mx-auto rounded overflow-hidden bg-neutral shadow-lg py-4">
                  <img
                    className="w-full p-2"
                    src={toy.pictureUrl}
                    alt="Image"
                  />
                  <div className=" text-center space-y-2 mt-2">
                    <div className=" font-semibold">{toy.toyName}</div>
                    <p className="font-bold text-md text-primary">
                      ${toy.price}
                    </p>
                    <div className="w-full">
                      <Rating
                        className="text-center w-full mx-auto"
                        style={{ maxWidth: 100 }}
                        value={toy.rating}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="card-actions justify-center">
                      <Link to={`/details/${toy._id}`} className="SBtn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-12">
            {data.slice(0, 8).map((toy) => (
              <div key={toy._id}>
                <div className="max-w-[20rem] mx-auto rounded overflow-hidden bg-neutral shadow-lg py-4">
                  <img
                    className="w-full p-2"
                    src={toy.pictureUrl}
                    alt="Image"
                  />
                  <div className=" text-center space-y-2 mt-2">
                    <div className=" font-semibold">{toy.toyName}</div>
                    <p className="font-bold text-md text-primary">
                      ${toy.price}
                    </p>
                    <div className="w-full">
                      <Rating
                        className="text-center w-full mx-auto"
                        style={{ maxWidth: 100 }}
                        value={toy.rating}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="card-actions justify-center">
                      <Link to={`/details/${toy._id}`} className="SBtn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-12">
            {data.slice(0, 8).map((toy) => (
              <div key={toy._id}>
                <div className="max-w-[20rem] mx-auto rounded overflow-hidden bg-neutral shadow-lg py-4">
                  <img
                    className="w-full p-2"
                    src={toy.pictureUrl}
                    alt="Image"
                  />
                  <div className=" text-center space-y-2 mt-2">
                    <div className=" font-semibold">{toy.toyName}</div>
                    <p className="font-bold text-md text-primary">
                      ${toy.price}
                    </p>
                    <div className="w-full">
                      <Rating
                        className="text-center w-full mx-auto"
                        style={{ maxWidth: 100 }}
                        value={toy.rating}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="card-actions justify-center">
                      <Link to={`/details/${toy._id}`} className="SBtn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
