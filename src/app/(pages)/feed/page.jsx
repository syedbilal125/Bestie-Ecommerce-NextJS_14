import Footer from "@/components/Footer";
import Navbar from "../../../components/Navbar";
import React from "react";
import FeedClientSideComponent from "../../../components/Feed/FeedClientSideComponent";
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

export async function generateMetadata() {
  return {
    title: "Feed",
  };
}

// SSR RENDERING FOR GETTING ALL STORES
const allProducts = async () => {
  try {
    const res = await axios.get("https://besty-backend.vercel.app/api/products", {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

// SSR RENDERING FOR GETTING ALL STORES
const storeDataa = async () => {
  const Feeds = await allProducts();
  const id = Feeds.map((e) => e.storeId);
  try {
    const res = await axios.post(
      "https://besty-backend.vercel.app/api/storeBody",
      { storeId: id },
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

async function Feed() {
  const storesData = await getAllStores();
  const Feeds = await allProducts();
  const storeData = await storeDataa();
  
  return (
    <div>
      <Navbar />
      <FeedClientSideComponent
        storesData={storesData}
        allProducts={Feeds}
        storeData={storeData}
      />
    </div>
  );
}

export default Feed;
