import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [allToy, setAllToy] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [dataLimit, setDataLimit] = useState(false);

  // data get
  useEffect(() => {
    fetch(`https://toy-marketplace-server-nish4d.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
      });
  }, []);


  // search methods added
  const handleSearch = () => {
    fetch(
      `https://toy-marketplace-server-nish4d.vercel.app/toySearch/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToy(data);
      });
  };

  // limit data condition
  const handleLimit = () => {
    fetch("https://toy-marketplace-server-nish4d.vercel.app/toysLimit")
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
        console.log(data);
        setDataLimit(true);
      });
  };

  return (
    <>
      <Helmet>
        <title>AT | All TOYS</title>
    </Helmet>
      <div className="text-center my-8">
        <h2 className="text-6xl font-bold">All TOYS</h2>
      </div>
      <div className="search-box p-2 text-center space-x-2">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="px-5 py-2 bg-slate-50 border border-secondary rounded-md focus:outline-primary my-8"
        />
        <button className="SBtn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>number</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {allToy.map((toy, i) => (
              <tr key={toy._id}>
                <th>{i + 1}</th>
                <td>{toy.toyName}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price} $</td>
                <td>{toy.quantity}</td>
                <td>
                  {" "}
                  <Link to={`/details/${toy._id}`} className="SBtn">
                    View Details
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!dataLimit && (
        <div className="my-12 flex justify-center">
          <button onClick={handleLimit} className="SBtn">
            See more
          </button>
        </div>
      )}
    </>
  );
};

export default AllToys;
