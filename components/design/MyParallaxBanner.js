import React from "react";
import { ParallaxBanner, useParallax } from "react-scroll-parallax";

const MyParallaxBanner = ({ imageUrl, text }) => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: imageUrl,
          speed: -15,
        },
      ]}
      className="aspect-[4/1]"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <article>
          <h1 className="lg:text-6xl text-center sm:text-3xl md:text-4xl ">
            <b>{text}</b>
          </h1>
        </article>
      </div>
    </ParallaxBanner>
  );
};

export default MyParallaxBanner;
