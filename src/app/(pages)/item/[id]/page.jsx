import React from "react";
import Navbar from "../../../../components/Navbar";
import axios from "axios";
import SingleItem from "../../../../components/Item/SingleItem";
import Footer from "@/components/Footer";

async function getProduct(id) {
  try {
    const res = await axios.get(`https://besty-backend.vercel.app/api/product/${id}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching store data:", error);
    return null;
  }
}

async function getStore(id) {
  try {
    const res = await axios.get(`https://besty-backend.vercel.app/api/store/${id}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching store data:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);
  return {
    title: product.productName,
    openGraph: {
      title: product.productName,
      description:
        "Bestie - Your Trusted Online Marketplace for Buying and Selling Anything",
      url: "https://bestie-frontend.vercel.app",
      type: "website",
      images: [
        {
          url: product.productImages[0],
          width: 800,
          height: 600,
          alt: "Bestie Logo",
        },
      ],
      locale: "en_US",
    },
  };
}
async function Item({ params }) {
  const product = await getProduct(params.id);
  const user = await getStore(product.storeId);

  return (
    <div>
      <Navbar />
      <SingleItem product={product} user={user} />
      <Footer />
    </div>
  );
}

export default Item;
