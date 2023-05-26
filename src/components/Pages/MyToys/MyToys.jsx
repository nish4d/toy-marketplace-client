import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import bg from "../../../assets/bg.png";
import { GiCrossMark } from "react-icons/gi";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyToys = () => {
  const [myToy, setMyToy] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toyData, setToyData] = useState("");
  const [control, setControl] = useState(false);
  const [defaultData , setDefaultData] = useState([])
  const [sort,setsort] = useState(1)
  

  const { user } = useContext(AuthContext);

  // modal function  -------------------

  const openModal = (id) => {
    setToyData(id);
    setIsOpen(true);
    //---------for default values---------
    fetch(`https://toy-marketplace-server-nish4d.vercel.app/toys/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data){
          // const remaining = data.filter((toy) => toy._id === id);
          setDefaultData(data)
        }
          
      });

  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // --------------------

  // useEffect(() => {
  //   fetch(
  //     `https://toy-marketplace-server-nish4d.vercel.app/toyEmail/${user.email}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setMyToy(data));
  // }, [user, control]);

  //   delete method ---------------

  const handleDelete = (id) => {
    // swl aleart
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to delete this item !!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-nish4d.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToy.filter((toy) => toy._id !== id);
              setMyToy(remaining);
            }
          });
      }
    });
    //---------
  };

  //   update my toy ------------

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const pictureUrl = form.pictureUrl.value;
    const subCategory = form.subCategory.value;
    const price =parseInt(form.price.value);
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

    fetch(`https://toy-marketplace-server-nish4d.vercel.app/toys/${toyData}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          setControl(!control);
          form.reset()
          Swal.fire({
            title: "Updated Successfully !",
            text: "Items Updated",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });

    closeModal();
  };
  

  useEffect(() => {
    fetch(`https://toy-marketplace-server-nish4d.vercel.app/toysEmailSort?email=${user?.email}&sort=${sort}`)
      .then((res) => res.json())
      .then((data) =>{
        setMyToy(data)
         
        });
  },[user,sort,control]);

  const handelChange = (e) => {
    const value = e.target.value;
    setsort(value);
  }

  return (
    <>
    <Helmet>
        <title>AT | MY TOYS</title>
    </Helmet>
      <div className="my-12">
      <div className="text-center">
        <h2 className="font-bold text-6xl my-8">MY TOY</h2>
      </div>
      <div className="overflow-x-auto">
        {/* select */}
        <div className="flex justify-center mb-12">
        <div>
        <select onChange={handelChange} className="px-6 py-2 border-2 border-secondary focus:border-primary rounded" name="" id="">
              <option value="1">Ascending sort</option>
              <option value="-1">Descending sort</option>
            </select>
        </div>
           
        </div>


        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Picture</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {myToy.map((toy) => (
              <tr key={toy._id}>
                <th><img className="w-16 h-16 rounded-md" src={toy.pictureUrl} alt="" /></th>
                <td>{toy.toyName}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.sellerEmail}</td>
                <td>{toy.subCategory}</td>
                <td>${toy.price}</td>
                <td>⭐{toy.rating}</td>
                <td>{toy.quantity}</td>
                <td>{toy.description.split(" ", 2)}...</td>
                <td>
                  {/*-------------- modal start----------- */}

                  <div>
                    <button onClick={() => openModal(toy._id)} className="SBtn">
                      Edit
                    </button>

                    {isOpen && ( 
                      <div key={defaultData._id} className="fixed z-10 inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                        <div className="relative mx-auto w-3/4">
                          <div>
                          </div>
                          <div
                            className="bg-white rounded-lg shadow-lg py-12 relative"
                            style={{ backgroundImage: `url(${bg})` }}
                          >
                            <button
                              onClick={closeModal}
                              className="absolute right-8 top-8"
                            >
                              <GiCrossMark className="text-xl text-primary"></GiCrossMark>
                            </button>
                            <div className="p-4">
                              {/* body start */}
                              <form
                                onSubmit={handleUpdate}
                                className="md:w-3/4 mx-auto"
                              >
                                <div className="text-center my-6">
                                  <h2 className="text-6xl font-bold">
                                    Update Info
                                  </h2>
                                </div>
                                <div className="md:flex gap-8">
                                  <div className="mb-4 w-full">
                                    <label
                                      htmlFor="name"
                                      className="block mb-2 font-semibold"
                                    >
                                      Toy Name
                                    </label>
                                    <input
                                      id="name"
                                      type="text"
                                      name="toyName"
                                      defaultValue={defaultData.toyName}
                                      className="border border-secondary focus:outline-primary rounded px-3 py-2 w-full"
                                      placeholder="Toy Name"
                                    />
                                  </div>
                                  <div className="mb-4 w-full">
                                    <label
                                      htmlFor="sellerName"
                                      className="block mb-2 font-semibold"
                                    >
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
                                    <label
                                      htmlFor="sellerEmail"
                                      className="block mb-2 font-semibold"
                                    >
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
                                    <label
                                      htmlFor="pictureUrl"
                                      className="block mb-2 font-semibold"
                                    >
                                      Picture URL
                                    </label>
                                    <input
                                      id="pictureUrl"
                                      type="url"
                                      name="pictureUrl"
                                      defaultValue={defaultData.pictureUrl}
                                      className="border border-secondary focus:outline-primary  rounded px-3 py-2 w-full"
                                      placeholder="Picture URL"
                                    />
                                  </div>
                                </div>

                                <div className="md:flex gap-8">
                                  <div className="mb-4 w-full">
                                    <label
                                      htmlFor="subCategory"
                                      className="block mb-2 font-semibold"
                                    >
                                      Sub-category
                                    </label>
                                    <select
                                      id="subCategory"
                                      className="border border-secondary focus:outline-primary rounded px-3 py-2 w-full"
                                      name="subCategory"
                                      required
                                    >
                                      <option value="">
                                        Select Sub-category
                                      </option>
                                      <option value="Horse Toy">
                                        Horse Toy
                                      </option>
                                      <option value="Dinosaur Toy">
                                        Dinosaur Toy
                                      </option>
                                      <option value="Dogs Toy">Dogs Toy</option>
                                      <option value="Cat Toy">Cat Toy</option>
                                      <option value="Unicorn Toy">
                                        Unicorn Toy
                                      </option>
                                      <option value="Cows Toy">Cows Toy</option>
                                    </select>
                                  </div>

                                  <div className="mb-4 w-full">
                                    <label
                                      htmlFor="price"
                                      className="block mb-2 font-semibold"
                                    >
                                      Toy Price
                                    </label>
                                    <input
                                      id="price"
                                      type="text"
                                      name="price"
                                      defaultValue={defaultData.price}
                                      className="border border-secondary focus:outline-primary rounded px-3 py-2 w-full"
                                      placeholder="Price"
                                    />
                                  </div>
                                </div>

                                <div className="md:flex gap-8">
                                  <div className="mb-4 w-full">
                                    <label
                                      htmlFor="rating"
                                      className="block mb-2 font-semibold"
                                    >
                                      Rating
                                    </label>
                                    <input
                                      
                                      id="rating"
                                      type="text"
                                      name="rating"
                                      defaultValue={defaultData.rating}
                                      className="border border-secondary focus:outline-primary rounded px-3 py-2 w-full"
                                      placeholder="Rating"
                                    />
                                  </div>
                                  <div className="mb-4 w-full">
                                    <label
                                      htmlFor="quantity"
                                      className="block mb-2 font-semibold"
                                    >
                                      Available Quantity
                                    </label>
                                    <input
                                      id="quantity"
                                      type="text"
                                      name="quantity"
                                      defaultValue={defaultData.quantity}
                                      className="border border-secondary focus:outline-primary rounded px-3 py-2 w-full"
                                      placeholder="Available Quantity"
                                    />
                                  </div>
                                </div>

                                <div className="mb-4 w-full">
                                  <label
                                    htmlFor="description"
                                    className="block mb-2 font-semibold"
                                  >
                                    Detail Description
                                  </label>
                                  <textarea
                                    id="description"
                                    name="description"
                                    defaultValue={defaultData.description}
                                    className="border border-secondary focus:outline-primary h-20 rounded px-3 py-2 w-full"
                                    placeholder="Detail Description"
                                  ></textarea>
                                </div>

                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full MBtn"
                                  >
                                    Update
                                  </button>
                                </div>
                              </form>
                              {/* body end */}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ------------------------------------ */}
                </td>
                <td>
                  {" "}
                  <Link onClick={() => handleDelete(toy._id)} className="SBtn">
                    Delete
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default MyToys;
