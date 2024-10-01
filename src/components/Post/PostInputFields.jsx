"use client";
import { storage } from "@/Firebase/firebase";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiCamera } from "react-icons/ci";

const getCurrentUser = async () => {
  const jwtToken = localStorage.getItem("token");
  try {
    const response = await axios.get("https://besty-backend.vercel.app/api/currentuser", {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    const currentUser = response?.data;
    return currentUser;
  } catch (error) {
    console.error();
  }
};

function PostInputFields({ postCategory }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [data, setData] = useState({
    productName: "",
    productDescriptionPoints: [],
    productDescription: "",
    productImages: [],
    productCategories: postCategory,
    sellerLocation: "",
    productDetails: [],
    productPrice: "",
    productComments: null,
    productLikes: null,
    sellerId: currentUser?.id,
    storeId: currentUser?.storeId,
  });

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await getCurrentUser();
      setData((prevData) => ({
        ...prevData,
        sellerId: user?.id || null,
        storeId: user?.storeId || null,
      }));
      setCurrentUser(user);
    };

    fetchCurrentUser();
  }, []);

  // State to hold the input value
  const [feature, setFeature] = useState("");

  // State to hold the array of features
  const [features, setFeatures] = useState([]);

  // Handle input change
  const handleInputChange = (e) => {
    setFeature(e.target.value);
  };

  // Handle adding the feature
  const addFeature = (e) => {
    e.preventDefault();
    if (feature.trim()) {
      // Avoid adding empty features
      setFeatures([...features, feature]);
      setData((prevData) => ({
        ...prevData,
        productDescriptionPoints: [...features, feature],
      }));
      setFeature(""); // Clear the input field
    }
  };

  // State to hold the input value
  const [detail, setDetail] = useState("");

  // State to hold the array of features
  const [details, setDetails] = useState([]);

  // Handle input change
  const handleInputChangeDetials = (e) => {
    setDetail(e.target.value);
  };

  // Handle adding the feature
  const addDetails = (e) => {
    e.preventDefault();
    if (detail.trim()) {
      // Avoid adding empty features
      setDetails([...details, detail]);
      setData((prevData) => ({
        ...prevData,
        productDetails: [...details, detail],
      }));
      setDetail(""); // Clear the input field
    }
  };

  const [filePreviews, setFilePreviews] = useState(Array(4).fill(null)); // Previews for the 4 divs
  const [fileURLs, setFileURLs] = useState(Array(4).fill(null));
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e, index) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      const storageRef = ref(storage, `store/${image.name}`);
      const reader = new FileReader();

      reader.onloadend = () => {
        setFilePreviews((prevPreviews) => {
          const newPreviews = [...prevPreviews];
          newPreviews[index] = reader.result;
          return newPreviews;
        });
      };

      reader.readAsDataURL(image);

      setLoading(true);
      try {
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);

        // Update the URLs array with the new download URL
        setFileURLs((prevURLs) => {
          const newURLs = [...prevURLs];
          newURLs[index] = downloadURL;

          // Update productImages in data
          setData((prevData) => ({
            ...prevData,
            productImages: newURLs,
          }));

          return newURLs;
        });
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const res = await axios.post("https://besty-backend.vercel.app/api/post", data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col border-[0.5px] border-gray-300 p-5 rounded-md">
      <div className="">
        <h1 className="text-[28px] font-medium text-gray-700">Post Detail</h1>
        <hr />
        <h5 className="text-[13px] font-medium text-gray-600">
          Home - Post - <span className="text-black">{postCategory}</span>
        </h5>
      </div>
      <form className="ml-2 mr-6 flex space-x-8 mt-8" onSubmit={handleOnSubmit}>
        <div className="flex flex-col space-y-11 items-end w-1/3">
          <div>
            <span className="font-semibold text-gray-600">Category</span>
          </div>
          <div className="flex items-start space-x-1">
            <span className="font-semibold text-gray-600">Title</span>
            <span className="text-red-600">*</span>
          </div>
          <div className="flex items-start space-x-1">
            <span className="font-semibold text-gray-600">Description</span>
            <span className="text-red-600">*</span>
          </div>
          <div className="flex items-start space-x-1 pt-7">
            <span className="font-semibold text-gray-600">Location</span>
            <span className="text-red-600">*</span>
          </div>
          <div className="flex items-start space-x-1">
            <span className="font-semibold text-gray-600">Price</span>
            <span className="text-red-600">*</span>
          </div>{" "}
          <div className="flex items-start space-x-1">
            <span className="font-semibold text-gray-600">Product Details</span>
            <span className="text-red-600">*</span>
          </div>{" "}
          <div className="flex items-start space-x-1 pt-12">
            <span className="font-semibold text-gray-600">
              Product Features
            </span>
            <span className="text-red-600">*</span>
          </div>
          <div className="flex items-start space-x-1 pt-16">
            <span className="font-semibold text-gray-600">Upload Picture</span>
            <span className="text-red-600">*</span>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full border-[0.5px] border-gray-300 p-3 rounded-sm text-gray-700 text-[15px]">
            {postCategory}
          </div>
          <div className="w-full border-[0.5px] border-gray-300  rounded-sm mt-4">
            <input
              type="text"
              className="w-full h-auto p-3 outline-none"
              placeholder="At least 5 alphanumeric characters."
              onChange={(e) =>
                setData({ ...data, productName: e.target.value })
              }
            />
          </div>
          <div className="w-full border-[0.5px] border-gray-300  rounded-sm mt-3">
            <textarea
              placeholder="At least 10 alphanumeric character."
              type="text"
              className="resize-none w-full h-auto p-3 outline-none"
              onChange={(e) =>
                setData({ ...data, productDescription: e.target.value })
              }
            />
          </div>
          <div className="w-full border-[0.5px] border-gray-300  rounded-sm mt-4">
            <input
              type="text"
              className="w-full h-auto p-3 outline-none"
              placeholder="Enter your location here..."
              onChange={(e) =>
                setData({ ...data, sellerLocation: e.target.value })
              }
            />
          </div>
          <div className="w-full border-[0.5px] border-gray-300  rounded-sm mt-6">
            <input
              type="text"
              className="w-full h-auto p-3 outline-none"
              placeholder="Enter Price"
              onChange={(e) =>
                setData({ ...data, productPrice: e.target.value })
              }
            />
          </div>
          <div>
            <div className="w-full border-[0.5px] border-gray-300  rounded-sm mt-6">
              <input
                type="text"
                className="w-full h-auto p-3 outline-none"
                placeholder="Add product Detials"
                value={detail}
                onChange={handleInputChangeDetials}
              />
              <ul className="my-3 grid grid-cols-2 gap-4 mx-2">
                {details.map((feat, index) => (
                  <li
                    key={index}
                    className="border-b rounded-full bg-blue-200 px-3 py-1 w-full"
                  >
                    <span className="w-[150px]"> {feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={addDetails}
              className="text-center w-full bg-gray-800 py-1 mt-1 rounded-md text-white"
            >
              add
            </button>
          </div>
          <div>
            <div className="w-full border-[0.5px] border-gray-300  rounded-sm mt-6">
              <input
                type="text"
                className="w-full h-auto p-3 outline-none"
                placeholder="Add product Features"
                value={feature}
                onChange={handleInputChange}
              />
              <ul className="my-3 grid grid-cols-2 gap-4 mx-2">
                {features.map((feat, index) => (
                  <li
                    key={index}
                    className="border-b rounded-full bg-blue-200 px-3 py-1 w-full"
                  >
                    <span className="w-[150px]"> {feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={addFeature}
              className="text-center w-full bg-gray-800 py-1 mt-1 rounded-md text-white"
            >
              add
            </button>
          </div>
          <div className="flex items-center space-x-2">
            {filePreviews.map((preview, index) => (
              <div
                key={index}
                className="w-1/3 h-[100px] border-[0.5px] border-gray-300 rounded-md mt-6 relative"
              >
                {preview ? (
                  <Image
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                ) : (
                  <>
                    <label
                      htmlFor={`productImage${index}`}
                      className="cursor-pointer w-full h-full flex items-center justify-center"
                    >
                      <CiCamera size={40} />
                    </label>
                    <input
                      onChange={(e) => handleFileChange(e, index)}
                      type="file"
                      id={`productImage${index}`}
                      className="w-full hidden h-auto p-3 outline-none"
                      placeholder="Enter Price"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
          <button className="py-2 px-4 bg-[#9748FF] mt-10 text-white rounded-md">
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostInputFields;
