import { useLoaderData } from "react-router-dom";
import bg from "../../assets/bg.png";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Helmet } from "react-helmet";


const ToyDetails = () => {

  const toyData = useLoaderData();
  console.log(toyData);
  const {
    toyName,
    sellerName,
    pictureUrl,
    sellerEmail,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = toyData;

  

  return (
    <>
    <Helmet>
        <title>AT | TOY DETAILS</title>
    </Helmet>
      <div className="w-full">
        <div
          className="hero py-32 "
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="hero-content text-center">
            <div className="max-w-md  space-y-2">
              <img
                className="rounded-xl w-52 h-52 object-cover mx-auto mb-6"
                src={pictureUrl}
                alt=""
              />

              <h1 className="text-3xl font-semibold">{toyName}</h1>
              <h1 > <span className="font-semibold">Seller Name: </span> {sellerName}</h1>
              <h1 > <span className="font-semibold"> Email: </span>{sellerEmail}</h1>
              <h1 > <span className="font-semibold"> Sub - Category: </span>{subCategory}</h1>
              <p > <span className="font-semibold">price: </span>{price} </p>
              <div className="flex justify-center">
              <p className="font-semibold">Rating:</p>
              <Rating
                className="mx-2"
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
              />
              </div>
              <p > <span className="font-semibold">quantity: </span>{quantity} </p>
              <p > <span className="font-semibold">description: </span>{description} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
