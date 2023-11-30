import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Activities from "@/components/Activities";
import Why from "@/components/Why";
import PostSale from "@/components/PostSale";
import CardsBrands from "@/components/CardsBrands";

export const metadata: Metadata = {
  title: "Spectra",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Activities />
      <Why />
      {/* <Brands /> */}
      <CardsBrands />
      {/* <Feature /> */}
      <PostSale />
      <About />
      <Testimonial />
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration />        */}
      {/* <FAQ /> */}
      {/* <Pricing /> */}
      <Contact />
      {/* <Blog /> */}
      <CTA />
    </main>
  );
}
