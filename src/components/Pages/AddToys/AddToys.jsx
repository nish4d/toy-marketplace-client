import { useContext } from "react";
import bg from "../../../assets/bg.png";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const AddToys = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);


  // form handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const pictureUrl = form.pictureUrl.value;
    const subCategory = form.subCategory.value;
    const price = parseInt(form.price.value);
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    console.log(
      toyName,
      sellerName,
      sellerEmail,
      pictureUrl,
      subCategory,
      price,
      rating,
      quantity,
      description
    );
    const user = {
      toyName,
      sellerName,
      sellerEmail,
      pictureUrl,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };


    // post method added
    fetch("https://toy-marketplace-server-nish4d.vercel.app/toys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Added Successfully !",
          text: "Items Added",
          icon: "success",
          confirmButtonText: "Close",
        });
      });
  };

  return (
    <div
      className="px-12 py-12 items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Helmet>
        <title> AT | ADD TOYS </title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <form onSubmit={handleSubmit} className="md:w-2/4 mx-auto">
        <div className="md:flex gap-8">
          <div className="mb-4 w-full">
            <label htmlFor="name" className="block mb-2 font-semibold">
              Toy Name
            </label>
            <input
              id="name"
              type="text"
              name="toyName"
              className="border border-secondary focus:outline-primary rounded px-3 py-2 w-full"
              placeholder="Toy Name"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="sellerName" className="block mb-2 font-semibold">
              Seller Name
            </label>
            <input
              defaultValue={user?.displayName}
              id="sellerName"
              type="text"
              name="sellerName"
              className="border border-secondary focus:outline-primary rounded px-3 py-2 w-full"
              placeholder="Seller Name"
            />
          </div>
        </div>

        <div className="md:flex gap-8">
          <div className="mb-4 w-full">
            <label htmlFor="sellerEmail" className="block mb-2 font-semibold">
              Seller Email
            </label>
            <input
              defaultValue={user?.email}
              id="sellerEmail"
              type="email"
              name="sellerEmail"
              className="border border-secondary focus:outline-primary rounded px-3 py-2 w-full"
              placeholder="Seller Email"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="pictureUrl" className="block mb-2 font-semibold">
              Picture URL
            </label>
            <input
              id="pictureUrl"
              type="url"
              name="pictureUrl"
              className="border border-secondary focus:outline-primary  rounded px-3 py-2 w-full"
              placeholder="Picture URL"
            />
          </div>
        </div>

        <div className="md:flex gap-8">
          <div className="mb-4 w-full">
            <label htmlFor="subCategory" className="block mb-2 font-semibold">
              Sub-category
            </label>
            <select
              id="subCategory"
              className="border border-secondary focus:outline-primary rounded px-3 py-2 w-full"
              name="subCategory"
              required
            >
              <option value="">Select Sub-category</option>
              <option value="Horse Toy">Horse Toy</option>
              <option value="Dinosaur Toy">Dinosaur Toy</option>
              <option value="Dogs Toy">Dogs Toy</option>
              <option value="Cat Toy">Cat Toy</option>
              <option value="Unicorn Toy">Unicorn Toy</option>
              <option value="Cows Toy">Cows Toy</option>
            </select>
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="price" className="block mb-2 font-semibold">
              Toy Price
            </label>
            <input
              id="price"
              type="text"
              name="price"
              className="border border-secondary focus:outline-primary rounded px-3 py-2 w-full"
              placeholder="Price"
            />
          </div>
        </div>

        <div className="md:flex gap-8">
          <div className="mb-4 w-full">
            <label htmlFor="rating" className="block mb-2 font-semibold">
              Rating
            </label>
            <input
              
              id="rating"
              type="text"
              name="rating"
              className="border border-secondary focus:outline-primary rounded px-3 py-2 w-full"
              placeholder="Rating"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="quantity" className="block mb-2 font-semibold">
              Available Quantity
            </label>
            <input
              id="quantity"
              type="text"
              name="quantity"
              className="border border-secondary focus:outline-primary rounded px-3 py-2 w-full"
              placeholder="Available Quantity"
            />
          </div>
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="description" className="block mb-2 font-semibold">
            Detail Description
          </label>
          <textarea
            id="description"
            name="description"
            className="border border-secondary focus:outline-primary h-20 rounded px-3 py-2 w-full"
            placeholder="Detail Description"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full MBtn"
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToys;
