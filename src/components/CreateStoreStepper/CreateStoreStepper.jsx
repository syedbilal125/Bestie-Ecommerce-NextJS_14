"use client";
import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import Loader from "../Loading/Loader";
import Image from "next/image";
import { LuUploadCloud } from "react-icons/lu";
import { storage } from "@/Firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from "axios";
import { useRouter } from "next/navigation";

const Stepper = ({ userId }) => {
  const router = useRouter();

  const steps = ["Store Details", "Your Details", "Complete"];
  const [complete, setComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [error, setErrors] = useState([]);
  const [values, setValues] = useState({
    storeName: "",
    storeLogo: "",
    storeType: "",
    sellerPhoneNum: "",
    sellerAddress: "",
    sellerId: userId,
    sellerCity: "",
    storeCategories: "",
    storeDescription: "",
  });

  const [pervViewImage, setPervViewImage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      setLoading(true);
      const image = e.target.files[0];
      let downloadURL = "";
      const storageRef = ref(storage, `store/${image.name}`);
      await uploadBytes(storageRef, image);
      downloadURL = await getDownloadURL(storageRef);
      setValues((prev) => ({ ...prev, storeLogo: downloadURL }));
      setPervViewImage(downloadURL);
      setLoading(false);
    }
  };

  const completeStoreCreattion = async () => {
    try {
      const response = await axios.post(
        "https://besty-backend.vercel.app/api/store/create",
        values,
        { withCredentials: true }
      );
      const { token } = response.data; // Assuming your backend returns a token upon successful login

      // Store the token securely (e.g., in localStorage or sessionStorage)
      localStorage.setItem('token', token);
      router.push("/");
      router.refresh();
    } catch (err) {
      if (err.response && err.response.data && err.response.data.errors) {
        setErrors(err.response.data.errors);
        console.log(err.response.data.errors);
        return (
          <div class="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
            <div class="error-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
              <div class="flex gap-2">
                <div class="text-[#d65563] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="text-white">Please try again</p>
                  <p class="text-gray-500">This is the description part</p>
                </div>
              </div>
              <button class="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        );
      } else {
        setErrors([{ msg: "An unexpected error occurred." }]);
      }
    }
  };

  const storeCategories = ["Shop", "ShowRoom", "WholeSaler", "Distributor"];
  const sellerCity = [
    "Lahore",
    "Faisalabad",
    "Rawalpindi",
    "Gujranwala",
    "Multan",
    "Sialkot",
    "Sargodha",
    "Bahawalpur",
    "Sheikhupura",
    "Rahim Yar Khan",
    "Jhelum",
    "Gujrat",
    "Sahiwal",
    "Okara",
    "Kasur",
    "Chiniot",
    "Mianwali",
    "Hafizabad",
    "Khanewal",
    "Dera Ghazi Khan",
    "Mandi Bahauddin",
    "Attock",
    "Bhakkar",
    "Toba Tek Singh",
    "Layyah",
    "Vehari",
    "Chakwal",
    "Narowal",
    "Rajanpur",
    "Lodhran",
    "Pakpattan",
    "Muzaffargarh",
    "Khushab",
    "Jhang",
    "Nankana Sahib",
    "Muzaffarabad",
    "Mirpur",
    "Kotli",
    "Bhimber",
    "Rawalakot",
    "Bagh",
    "Neelum",
    "Hattian",
    "Poonch",
    "Sudhanoti",
    "Gilgit",
    "Skardu",
    "Hunza",
    "Nagar",
    "Ghanche",
    "Ghizer",
    "Diamer",
    "Astore",
    "Quetta",
    "Khuzdar",
    "Turbat",
    "Chaman",
    "Gwadar",
    "Sibi",
    "Jaffarabad",
    "Naseerabad",
    "Loralai",
    "Kharan",
    "Zhob",
    "Dera Bugti",
    "Ziarat",
    "Mastung",
    "Kalat",
    "Awaran",
    "Lasbela",
    "Kech",
    "Panjgur",
    "Pishin",
    "Qila Abdullah",
    "Qila Saifullah",
    "Kohlu",
    "Barkhan",
    "Washuk",
    "Harnai",
    "Sherani",
    "Peshawar",
    "Abbottabad",
    "Mardan",
    "Mingora",
    "Mansehra",
    "Kohat",
    "Dera Ismail Khan",
    "Swabi",
    "Bannu",
    "Charsadda",
    "Nowshera",
    "Swat",
    "Lakki Marwat",
    "Haripur",
    "Karak",
    "Malakand",
    "Dir",
    "Hangu",
    "Batagram",
    "Tank",
    "Buner",
    "Shangla",
    "Upper Dir",
    "Lower Dir",
    "Chitral",
    "Kohistan",
    "Torghar",
    "Orakzai",
    "Karachi",
    "Hyderabad",
    "Sukkur",
    "Larkana",
    "Nawabshah (Shaheed Benazirabad)",
    "Mirpur Khas",
    "Jacobabad",
    "Shikarpur",
    "Khairpur",
    "Thatta",
    "Dadu",
    "Badin",
    "Umerkot",
    "Ghotki",
    "Tando Adam",
    "Tando Muhammad Khan",
    "Kashmore",
    "Jamshoro",
    "Matiari",
    "Sanghar",
    "Naushahro Feroze",
    "Qambar Shahdadkot",
    "Tharparkar",
    "Sujawal",
  ];

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="border-[0.5px] rounded-2xl border-gray-300 px-10 py-10 mx-4 lg:mx-0">
              <h1 className="text-[25px] font-bold text-center mb-3">
                Enter your store details here.
              </h1>
              <div className=" flex flex-col space-y-3">
                <input
                  type="text"
                  onChange={(e) =>
                    setValues({ ...values, storeName: e.target.value })
                  }
                  placeholder="Store Name"
                  className="border-[0.5px] rounded-2xl border-gray-200 focus:outline-none py-4 px-5 focus-within:border-blue-400"
                />
                <input
                  type="text"
                  onChange={(e) =>
                    setValues({ ...values, storeDescription: e.target.value })
                  }
                  placeholder="Store Description"
                  className="border-[0.5px] rounded-2xl border-gray-200 focus:outline-none py-4 px-5 focus-within:border-blue-400"
                />
                <form className="w-full mx-auto">
                  <select
                    id="default"
                    onChange={(e) =>
                      setValues({ ...values, storeType: e.target.value })
                    }
                    className="bg-white border border-white text-gray-900 py-5 px-5 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue>Choose Store Type</option>
                    <option value="Individual">Individual</option>
                    <option value="Business">Business</option>
                  </select>
                </form>
                <form className="w-full mx-auto">
                  <select
                    id="default"
                    onChange={(e) =>
                      setValues({ ...values, storeCategories: e.target.value })
                    }
                    className="bg-white border border-white text-gray-900 py-5 px-5 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue>Choose Store Categories</option>
                    {storeCategories.map((i) => (
                      <option value={i} key={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </form>
                <div className="border-[0.5px] border-gray-300 rounded-2xl">
                  <input
                    type="file"
                    className="hidden"
                    id="upload"
                    accept=".png, .jpg , .gif"
                    onChange={handleFileChange}
                  />
                  {loading ? (
                    <div className="bg-white rounded-md">
                      <Loader />
                    </div>
                  ) : pervViewImage && loading === false ? (
                    <div className="bg-white py-5 px-5 flex justify-center items-center rounded-md flex-col">
                      <Image
                        src={pervViewImage}
                        className="rounded-full w-[60px] h-[60px]"
                        width={50}
                        height={50}
                        alt="storebannerImage"
                      />
                    </div>
                  ) : (
                    <label
                      htmlFor="upload"
                      className="bg-white py-5 px-5 flex justify-center items-center rounded-md flex-col"
                    >
                      <LuUploadCloud color="black" size={25} />
                      <span className="text-black text-[13px]">
                        Upload a banner image for your store.
                      </span>
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              {!complete && (
                <button
                  className="btn w-28 h-12 bg-white disabled:border-gray-200 cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group disabled:bg-gray-200 hover:text-white hover:bg-[#9748FF] transition duration-300 ease-in-out"
                  onClick={() => {
                    currentStep === steps.length
                      ? setComplete(true)
                      : setCurrentStep((prev) => prev + 1);
                  }}
                >
                  {currentStep === steps.length ? "Finish" : "Next"}
                </button>
              )}
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="border-[0.5px] rounded-2xl border-gray-300 px-10 py-10 mx-4 lg:mx-0">
              <h1 className="text-[25px] font-bold text-center mb-3">
                Enter your personal details.
              </h1>
              <div className=" flex flex-col space-y-3">
                <input
                  type="tel"
                  value={values.sellerPhoneNum}
                  onChange={(e) =>
                    setValues({ ...values, sellerPhoneNum: e.target.value })
                  }
                  placeholder="Phone Number"
                  className="border-[0.5px] rounded-2xl border-gray-200 focus:outline-none py-4 px-5 focus-within:border-blue-400"
                />
                <input
                  type="text"
                  value={values.sellerAddress}
                  onChange={(e) =>
                    setValues({ ...values, sellerAddress: e.target.value })
                  }
                  placeholder="Your address"
                  className="border-[0.5px] rounded-2xl border-gray-200 focus:outline-none py-4 px-5 focus-within:border-blue-400"
                />
                <form className="w-full mx-auto">
                  <select
                    id="default"
                    onChange={(e) =>
                      setValues({ ...values, sellerCity: e.target.value })
                    }
                    className="bg-white border border-white text-gray-900 py-5 px-5 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue>Choose Your City</option>
                    {sellerCity.map((i) => (
                      <option value={i} key={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              {!complete && (
                <button
                  className="btn w-28 h-12 bg-white disabled:border-gray-200 cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group disabled:bg-gray-200 hover:text-white hover:bg-[#9748FF] transition duration-300 ease-in-out"
                  onClick={() => {
                    currentStep === steps.length
                      ? setComplete(true)
                      : setCurrentStep((prev) => prev + 1);
                  }}
                  //   disabled={!values.sellerAddress || !values.sellerPhoneNum}
                >
                  {currentStep === steps.length ? "Finish" : "Next"}
                </button>
              )}
            </div>
          </>
        );
      case 3:
        return (
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-[25px] font-bold text-center mb-3">
              Complete your store creation by clicking on complete button below!
            </h1>
            <button
              className="btn w-28 h-12 bg-white disabled:border-gray-200 cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group disabled:bg-gray-200 hover:text-white hover:bg-[#9748FF] transition duration-300 ease-in-out"
              onClick={completeStoreCreattion}
            >
              Complete
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex justify-between w-full">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            }`}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-black">{step}</p>
          </div>
        ))}
      </div>

      <div className="my-14 flex flex-col">
        <div className="step-content">{renderContent()}</div>
      </div>
    </>
  );
};

export default Stepper;
