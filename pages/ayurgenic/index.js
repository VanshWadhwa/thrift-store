import Link from "next/link";
import { ParallaxBanner } from "react-scroll-parallax";

import React from "react";
import ImageItem from "../../components/ayurgenic/ImageItem";
import MyCTA from "../../components/design/MyCTA";
import MyParallaxBanner from "../../components/design/MyParallaxBanner";
import Head from "next/head";
import BMI from "../../components/ayurgenic/BMI";

const index = ({ newData }) => {
  const { products } = newData;

  const featuredProducts = products
    .sort(() => Math.random() - Math.random())
    .find(() => true);

  return (
    <div className="container mx-auto">
      <Head>
        <title>Ayurgenic | Thriftz Fitness</title>
        <meta
          name="description"
          content="Our motive is transforming peoples lives by motivating them to change their mindset for fitness and health. We believe there is always a need for support and motivation, no matter the individual's situation in the fitness journey."
        />
        <meta
          property="og:description"
          content="Our motive is transforming peoples lives by motivating them to change their mindset for fitness and health. We believe there is always a need for support and motivation, no matter the individual's situation in the fitness journey."
        />
        <meta property="og:url" content="Thriftzfitness.com/ayurgenic" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Thriftz Fitness" />
        <meta name="twitter:card" content="Thriftz Fitness | twitter preview" />

        <meta property="og:image" content={"logo.png"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Section 1 */}
      <MyParallaxBanner
        imageUrl="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit"
        text={"Ayurgenic Healthcare"}
      />

      {/* Section 1 end*/}

      {/* Section 2 */}

      {/* section 2 ends */}

      {/* section 3 : Carousel */}
      <div className="my-5 grid grid-cols-1  lg:grid-cols-2 ">
        <div>
          {/* <img className="mx-auto p-10" src="https://picsum.photos/600/400" /> */}
          <img
            className="mx-auto p-10"
            // src="https://www.transparentpng.com/thumb/fitness/zfUvyO-fitness-free-download.png"
            // src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit"
            src="../../Ayurgenic_all.png"
            alt="fitness free download @transparentpng.com"
          />
        </div>

        <div className="p-5 my-auto ">
          {/* <h1 className=" text-6xl  lg:text-7xl text-center lg:text-left ">
            Wassup client
          </h1> */}
          <article>
            <h1 className="text-5xl  lg:text-6xl text-center lg:text-left">
              <b>Ayurgenic</b>
              {/* <sup>TM</sup> */}
            </h1>
          </article>
          <h2 className="w-3/4 text-sm font-extralight lg:text-lg lg:w-[470px] pl-2 pt-5 text-center lg:text-left mx-auto lg:mx-0">
            {" "}
            Ayurgenic Healthcare section takes you to a chemical-free market.
            Products are authenticated and lab tested.
            <br />
            <br />“
            <span className=" italic text-xl">
              {" "}
              Say no to Chemical Products{" "}
            </span>{" "}
            ”{" "}
          </h2>
        </div>
      </div>
      {/* section 3 ends */}

      {/* section 4 */}
      <div className="conatiner mx-auto p-2">
        <article>
          <h1 className="text-5xl text-center">
            <b>Our Products</b>
          </h1>
        </article>

        <div className="mx-auto scrollbar-thin scrollbar-thumb-gray-700  scrollbar-thumb-rounded-full  scrollbar-track-rounded-full   overflow-x-auto flex  p-7 my-5 space-x-3  container">
          {products.map((product) => (
            <>
              <ImageItem product={product} />
            </>
          ))}
        </div>
      </div>
      {/* BMI CALCULATOR */}
      <BMI />

      {/* section 4 ends */}
      <MyCTA
        image_location={
          "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit"
        }
        text="View Others products from Ayurgenic"
        btn_redirect={"/ayurgenic/all"}
        btn_text="View all products"
      />
    </div>
  );
};

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://script.googleusercontent.com/macros/echo?user_content_key=KJV34qNrxQx0QB-_ekcHF8W4GL817z6oFOmDahNmO4SaevIX-UG61DzE84W82MZK_420P1DgBuvnsqWjqYzzKs2LBlQxMLmUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFUvuZA-uNfwQtj5ca1bNXzecu3_pNFdfTNW52wmhybV385tG223hclzcBTwzssQWkvGf8v1jiqIP_ONroLhztgRPLZHYuNsvQ&lib=MtvYdp9ItoHM9aJi2zQz6xP-v0S0TKgyJ`
  );
  const data1 = await res.json();

  const newData = { products: data1 };
  // Pass data to the page via props
  return { props: { newData } };
}
export default index;
