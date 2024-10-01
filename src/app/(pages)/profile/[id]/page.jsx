import axios from "axios";
import SingleStoreClientSideComponent from "@/components/StoreClientSideComponents/SingleStoreClientSideComponent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// SSR RENDERING FOR GETTING STORE DATA
async function getStoreData(id) {
  try {
    const res = await axios.get(
      `https://besty-backend.vercel.app/api/store/${id}`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching store data:", error);
    return null;
  }
}

// SSR RENDERING FOR GETTING STORE PRODUCTS
async function getStoreProducts(id) {
  try {
    const res = await axios.get(
      `https://besty-backend.vercel.app/api/users/products/${id}`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching store data:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const storeData = await getStoreData(params.id);
  return {
    title: storeData.storeName,
  };
}

export default async function StorePage({ params }) {
  const storeData = await getStoreData(params.id);
  const storeProduct = await getStoreProducts(params.id);
  if (!storeData) {
    return <div>Store not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-20 md:mt-36 mb-10">
        <SingleStoreClientSideComponent
          storeData={storeData}
          storeProduct={storeProduct}
        />
      </div>
      <Footer />
    </div>
  );
}
