import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        className="animate_top mx-w-full relative flex"
      >
        {/* <div className="w-[98px] h-10">
            <Image
              className="opacity-65 transition-all duration-300 hover:opacity-100 relative dark:hidden"
              src={image}
              alt={name}
              fill
            />
            <Image
              className="hidden opacity-50 transition-all duration-300 hover:opacity-100 relative dark:block"
              src={imageLight}
              alt={name}
              fill
            />
        </div> */}
        
        <h2 className="text-xl font-bold text-waterloo dark:text-manatee">{name}</h2>
      </motion.a>
    </>
  );
};

export default SingleBrand;
