"use client";
import React from "react";
import Stepper from "../../../../components/CreateStoreStepper/CreateStoreStepper";
import Navbar from "../../../../components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";

function CreateStore() {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <div className="mt-[150px]">
          <Stepper userId={id} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateStore;
