import Footer from "@/components/Footer";
import Navbar from "../../../components/Navbar";
import StoresClientSideComponent from "../../../components/StoreClientSideComponents/StoresClientSideComponent";
import React from "react";
import axios from "axios";

// SSR RENDERING FOR GETTING ALL STORES
const getAllStores = async () => {
  try {
    const res = await axios.get("https://besty-backend.vercel.app/api/stores", {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

// SSR RENDERING FOR GETTING ALL STORES
const getAllVerifiedStores = async () => {
  try {
    const res = await axios.get(
      "https://besty-backend.vercel.app/api/stores/verified",
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

export async function generateMetadata() {
  return {
    title: "Store",
  };
}

async function Stores() {
  const storesData = await getAllStores();
  const verifiedStores = await getAllVerifiedStores();
  return (
    <>
      <Navbar />
      <StoresClientSideComponent
        storesData={storesData}
        verifiedStores={verifiedStores}
      />
      <Footer />
    </>
  );
}

export default Stores;
