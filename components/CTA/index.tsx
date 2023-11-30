"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 pt-20 md:px-8 lg:pt-25 xl:pt-30 2xl:px-0">
        <div className="bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF]">
          <div className="mx-auto max-w-c-1390 rounded-lg px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
            <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-center md:gap-0 text-center">
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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_left py-15"
              >
                <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4">
                    Get your time back. Focus on what matters.
                </h2>
                <a
                    href="signup.html"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 mt-4 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
                  >
                    Request a demo
                    <Image
                      width={20}
                      height={20}
                      src="/images/icon/icon-arrow-dark.svg"
                      alt="Arrow"
                      className="dark:hidden"
                    />
                    <Image
                      width={20}
                      height={20}
                      src="/images/icon/icon-arrow-light.svg"
                      alt="Arrow"
                      className="hidden dark:block"
                    />
                  </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
