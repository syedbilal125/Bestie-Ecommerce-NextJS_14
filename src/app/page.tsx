import Image from "next/image";
import HomePageAllCategories from "../components/Categories/HomePageAllCategories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";

const RentPropertys = async () => {
  try {
    const res = await axios.post(`https://besty-backend.vercel.app/api/products/${"4"}`, {
      categorie: "RentPropertys",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

const Vehicles = async () => {
  try {
    const res = await axios.post(`https://besty-backend.vercel.app/api/products/${"4"}`, {
      categorie: "Vehicles",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};
const Mobiles = async () => {
  try {
    const res = await axios.post(`https://besty-backend.vercel.app/api/products/${"4"}`, {
      categorie: "Mobiles",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

const Propertys = async () => {
  try {
    const res = await axios.post(`https://besty-backend.vercel.app/api/products/${"4"}`, {
      categorie: "Propertys",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

const Electronics = async () => {
  try {
    const res = await axios.post(`https://besty-backend.vercel.app/api/products/${"4"}`, {
      categorie: "Electronics",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

const Bikes = async () => {
  try {
    const res = await axios.post(`https://besty-backend.vercel.app/api/products/${"4"}`, {
      categorie: "Bikes",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

const Business = async () => {
  try {
    const res = await axios.post(`https://besty-backend.vercel.app/api/products/${"4"}`, {
      categorie: "Business",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

const Services = async () => {
  try {
    const res = await axios.post(`https://besty-backend.vercel.app/api/products/${"4"}`, {
      categorie: "Services",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

const Jobs = async () => {
  try {
    const res = await axios.post(`https://besty-backend.vercel.app/api/products/${"4"}`, {
      categorie: "Jobs",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

const Animals = async () => {
  try {
    const res = await axios.post(`https://besty-backend.vercel.app/api/products/${"4"}`, {
      categorie: "Animals",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

const Furniture = async () => {
  try {
    const res = await axios.post(`https://besty-backend.vercel.app/api/products/${"4"}`, {
      categorie: "Furniture",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

const Fashion = async () => {
  try {
    const res = await axios.post(`https://besty-backend.vercel.app/api/products/${"4"}`, {
      categorie: "Fashion",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

const Books = async () => {
  try {
    const res = await axios.post(`https://besty-backend.vercel.app/api/products/${"4"}`, {
      categorie: "Books",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

const Kids = async () => {
  try {
    const res = await axios.post(`https://besty-backend.vercel.app/api/products/${"4"}`, {
      categorie: "Kids",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

const Food = async () => {
  try {
    const res = await axios.post(`https://besty-backend.vercel.app/api/products/${"4"}`, {
      categorie: "Food",
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

export default async function Home() {
  const RentPropertyss = await RentPropertys();
  const Vehicless = await Vehicles();
  const Foods = await Food();
  const Kidss = await Kids();
  const Bookss = await Books();
  const Mobiless = await Mobiles();
  const Furnitures = await Furniture();
  const Fashions = await Fashion();
  const Animalss = await Animals();
  const Jobss = await Jobs();
  const Servicess = await Services();
  const Businesss = await Business();
  const Bikess = await Bikes();
  const Electronicss = await Electronics();
  const Propertyss = await Propertys();

  return (
    <>
      <div className="w-full h-full">
        <Navbar />
        <HomePageAllCategories
          Services={Servicess}
          Propertys={Propertyss}
          Electronics={Electronicss}
          Bikes={Bikess}
          Business={Businesss}
          Mobiles={Mobiless}
          Furniture={Furnitures}
          Fashion={Fashions}
          Animals={Animalss}
          Jobs={Jobss}
          Food={Foods}
          Book={Bookss}
          Kid={Kidss}
          Vehicles={Vehicless}
          products={RentPropertyss}
        />
        <Footer />
      </div>
    </>
  );
}
