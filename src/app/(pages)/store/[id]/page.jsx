import React from 'react'
import CurrrentUserStore from '../../../../components/StoreClientSideComponents/currrentUserStore'
import axios from 'axios'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// SSR RENDERING FOR GETTING LOGINED USER DATA
const getUserStore = async (id) => {
    try {
        const res = await axios.get(
            `https://besty-backend.vercel.app/api/userStore/${id}`,
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


async function CurrentUserStoreServerSide({ params }) {
    const { id } = params
    const crrUserStore = await getUserStore(id)
    return (
        <div>
            <Navbar />
            <CurrrentUserStore storeData={crrUserStore} />
            <Footer />
        </div>
    )
}

export default CurrentUserStoreServerSide
