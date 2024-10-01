"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";

function FAQQuestions() {
  const data = [
    {
      question: "How do I delete/deactivate my account?",
      answer:
        "You can delete your account by click on your profile select `Account` then select `Account Settings` and click on Delete Account button. ",
    },
    {
      question: "How can i get verified?",
      answer:
        "To get verified you should have 500 followers on your store & you will be automatically be verified by our team.",
    },
    {
      question: "How can i feature my ads?",
      packages: true,
      answer:
        "We offer two exciting ad packages to help you reach more customers and boost your sales",
    },
  ];
  const [state, setState] = useState(null);
  const toggle = (i) => {
    if (state === i) {
      return setState(null);
    }
    setState(i);
  };
  return (
    <div className="pt-20  ">
      <Navbar />
      <div className="flex space-x-4 max-w-6xl mx-4 lg:mx-auto my-10">
        <div className="w-full border-[0.2px] border-gray-200 my-2 p-5 lg:p-10 ">
          {data.map((item, i) => (
            <div className="mb-2" key={i + item}>
              <motion.div
                initial={{ y: 200 }}
                whileInView={{
                  y: 0,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                className={`flex rounded-md border border-gray-300 items-center justify-between py-4 px-4 gap-2 ${
                  state === i && "border-orange-500"
                }`}
              >
                <h2>{item.question}</h2>
                <button className="border p-2" onClick={() => toggle(i)}>
                  {state === i ? (
                    <IoIosArrowDown size={25} />
                  ) : (
                    <IoIosArrowBack size={25} />
                  )}
                </button>
              </motion.div>
              <AnimatePresence initial={false}>
                {state === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="pt-3"
                  >
                    {item.answer}
                    {item.packages ? (
                      <div className="my-2">
                        <ul className="list-disc">
                          <h1 className="text-2xl font-bold my-5">
                            Basic Package - $2
                          </h1>
                          <li>
                            Ad Placement: Your ad will be displayed on our
                            site’s sidebar.
                          </li>
                          <li>
                            Visibility: Moderate exposure to our visitors.
                          </li>
                          <li>Duration: Your ad will run for 7 days.</li>
                          <li>
                            Benefits: Ideal for budget-conscious advertisers
                            looking to increase their brand visibility with a
                            cost-effective solution.
                          </li>
                        </ul>
                        <ul className="list-disc">
                          <h1 className="text-2xl font-bold my-5">
                            Premium Package - $5
                          </h1>
                          <li>
                            Ad Placement: Your ad will be prominently featured
                            on our homepage and at the top of category pages.
                          </li>
                          <li>
                            Visibility: High exposure with prime placement for
                            maximum visibility.
                          </li>
                          <li>Duration: Your ad will run for 14 days.</li>
                          <li>
                            Benefits: Perfect for advertisers seeking greater
                            impact and engagement. This package offers more
                            prominent positioning and longer ad duration,
                            ensuring your products get noticed by a larger
                            audience.
                          </li>
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="w-1/2 lg:block hidden">
            <Image src="/faq.png" priority height={500} width={500} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQQuestions;
