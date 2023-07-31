import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Link from "next/link";

const MyCTA = ({ image_location, text, btn_text, btn_redirect }) => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: image_location,
          speed: -15,
        },
      ]}
      //   className="aspect-[4/1]"
      className="aspect-[2/3] sm:aspect-[2/3] md:aspect-[2/3] lg:aspect-[3/1]"
    >
      <div className=" absolute inset-0 flex items-center justify-center">
        <center>
          <h1 className="text-2xl text-center m-5 font-bold">{text}</h1>

          <Link href={btn_redirect}>
            <button className="btn-grad ">{btn_text}</button>
          </Link>
        </center>
      </div>
    </ParallaxBanner>
  );
};

export default MyCTA;
