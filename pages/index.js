import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Parallax as Par } from "react-scroll-parallax";

import Router from "next/router";
import { FiChevronDown } from "react-icons/fi";
import MyCTA from "../components/design/MyCTA";
import styles from "../styles/Home.module.css";
// Landing Page
import { Parallax as ParallaxScroll } from "react-scroll-parallax";

import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Support from "../components/home/Support";
import Allproducts from "../components/home/Allproducts";
import AllInOne from "../components/home/AllInOne";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Allproducts />
      <AllInOne />
      <Footer />
    </>
  );
}
