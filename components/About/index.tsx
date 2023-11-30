"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import faqData from "../FAQ/faqData";
import FAQItem from "../FAQ/FAQItem";

const About = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };
  return (
    <>
      {/* <!-- ===== About Two Start ===== --> */}
      <section className="overflow-hidden pt-20 lg:pt-25 xl:pt-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5 align-items-center">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2 h-100 mb-5"
            >
              <div>
                  <h3 className="mb-5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                    Step 1
                  </h3>
                  <p>Increase productivity, stop the guessing game , show them the right data insights</p>
                  <p>Keep business ticking with zero friction</p>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden md:block md:w-1/2"
            >
                <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
                  {faqData.map((faq, key) => (
                    <FAQItem
                      key={key}
                      faqData={{ ...faq, activeFaq, handleFaqToggle }}
                    />
                  ))}
                </div>
            </motion.div>            
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section className="overflow-hidden pt-20 lg:pt-25 xl:pt-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5 align-items-center">
          <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden md:block md:w-1/2"
            >
                <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
                  {faqData.map((faq, key) => (
                    <FAQItem
                      key={key}
                      faqData={{ ...faq, activeFaq, handleFaqToggle }}
                    />
                  ))}
                </div>
            </motion.div>     
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2 mb-5"
            >
              <div>
                  <h3 className="mb-5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                    Step 2
                  </h3>
                  <p>Bring Maintenance, Services and Operationsteam on one page.</p>
                  <p>Track Work done</p>
                  <p>Stock Needs</p>
                  <p>Manage teams</p>
              </div>
            </motion.div>
                  
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}

    </>
  );
};

export default About;
