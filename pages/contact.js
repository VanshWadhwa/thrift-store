import React from "react";
import Link from "next/link";

import { ParallaxBanner, useParallax } from "react-scroll-parallax";
import ContactUs from "../components/ContactUs";
import MyParallaxBanner from "../components/design/MyParallaxBanner";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";
import Head from "next/head";

// Form
const Contact = () => {
  const parallax = useParallax({
    // easing: "easeOutQuad",
    easing: "ease",
    // translateX: [-100, 50],
    opacity: [-1, 2],
    // translateX: ["-400px", "50px"],
    scale: [0.5, 1],

    // rotate: [-180, 0],
    // easing: "easeInQuad",
  });

  return (
    <div className="mx-auto container">
      <Head>
        <title>Contact | Thriftz Fitness </title>
        <meta
          name="description"
          content="Our motive is transforming peoples lives by motivating them to change their mindset for fitness and health. We believe there is always a need for support and motivation, no matter the individual's situation in the fitness journey."
        />
        <meta
          property="og:description"
          content="Our motive is transforming peoples lives by motivating them to change their mindset for fitness and health. We believe there is always a need for support and motivation, no matter the individual's situation in the fitness journey."
        />
        <meta property="og:url" content="Thriftzfitness.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Thriftz Fitness" />
        <meta name="twitter:card" content="Thriftz Fitness | twitter preview" />

        <meta property="og:image" content={"logo.png"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Section 1 */}
      <MyParallaxBanner
        imageUrl="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit"
        text={"Contact Us"}
      />
      {/* Section - 2  end */}

      {/* Section 2 */}
      <div ref={parallax.ref} className="grid lg:grid-cols-2 h-3/4">
        <div className="sm:h-screen h-96 lg:h-full  w-50 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.385058999375!2d76.98248281744384!3d28.618219399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0fc229b0cea7%3A0x153a060940174b6c!2sFLY%20FIT!5e0!3m2!1sen!2sin!4v1654884719230!5m2!1sen!2sin"
            width="100%"
            height="100%"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* <div className=" grid grid-cols-2 gap-5 mx-auto my-auto">
          <h2 className="col-span-2 p-10 text-5xl">Get in touch with us</h2>
          <button
            type="button"
            className="h-16 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-xl font-light my-auto dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Call Us
          </button>
          <button
            type="button"
            className="h-16 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-xl font-light my-auto rounded-lg  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Mail Us
          </button>
        </div> */}

        <ContactUs />
      </div>

      {/* Section - 2  end */}

      {/*  */}
      <div className="flex justify-center flex-wrap my-10">
        <Link href="https://goo.gl/maps/bqjEx8nrNxyy6eBj6">
          <div className="w-[340px] my-5  hover:scale-105 duration-300">
            <div className="mx-auto w-[60px] ">
              <FiMapPin size={"60px"} />
            </div>
            <article>
              <h2 className="text-center text-3xl my-2">Location</h2>
            </article>
            <p className="px-4 py-2 text-center">
              38, Ugarsian Park, Bank of Baroda Building, Nangloi Stand,
              Najafgarh, New Delhi - 110043
            </p>
          </div>
        </Link>

        <div className="w-[340px] my-5 hover:scale-105 duration-300">
          <div className="mx-auto w-[60px]">
            <FiPhoneCall size={"60px"} />
          </div>
          <article>
            <h2 className="text-center text-3xl my-2">Call Us</h2>
          </article>
          <div className=" my-auto mx-auto w-[155px] pt-3">
            <a
              href="tel:+91-9711771006"
              className="mx-auto text-xl h-[40px] my-auto content-center p-0 m-0"
            >
              +91-9711771006
            </a>
          </div>
          <div className="mx-auto w-[155px] pt-3">
            <a
              href="tel:+91-9911771006"
              className="mx-auto text-xl h-[40px] my-auto content-center p-0 m-0"
            >
              +91-9911771006
            </a>
          </div>
        </div>

        <div className="w-[340px] my-5  hover:scale-105 duration-300">
          <div className="mx-auto w-[60px]">
            <FiMail size={"60px"} />
          </div>
          <article>
            <h2 className="text-center text-3xl my-2">Mail Us</h2>
          </article>
          <div className=" my-auto mx-auto w-[280px] pt-3">
            <a
              href="mailto:Thriftzfitness@gmail.com"
              className="mx-auto text-xl h-[40px] my-auto content-center p-0 m-0"
            >
              Thriftzfitness@gmail.com
            </a>
          </div>
          <div className="mx-auto w-[280px] pt-3">
            <a
              href="mailto:ayurgenichealthcare@gmail.com"
              className="mx-auto text-xl h-[40px] my-auto content-center p-0 m-0"
            >
              ayurgenichealthcare@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/*  */}

      {/* Section 3  */}
      {/* 
      <div className="h-96 w-full content-center">
        <div className="text-5xl pt-32 mx-auto w-3/4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          impedit!
        </div>
        <div className=" mt-10 mx-auto text-center text-3xl font-thin">
          - Thriftz
        </div>
      </div> */}
      {/* section 3 end */}

      {/* Section 4 */}

      <div className="p-5">
        <h1 className="text-5xl font-bold text-center ">Follow Us</h1>

        <div className="grid  grid-cols-1 lg:grid-cols-2 mx-auto ">
          <div className="w-[350px] sm:w-[500px]  grid-span-1 grid lg:grid-cols-2 mx-auto  text-center my-20">
            <article className="col-span-2">
              <h2 className="text-4xl m-5">
                <img className="w-24 mx-auto my-auto" src="/logo.png"></img>
                Thriftz
              </h2>
            </article>

            <Link
              href="https://www.facebook.com/ThriftzFitnessAcademy/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <div className="flex justify-center gap-5 cursor-pointer ">
                <>
                  <svg
                    className="w-10 h-10 my-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <h2 className="  sm:block my-auto text-2xl font-extralight ">
                    Facebook
                  </h2>
                </>
              </div>
            </Link>

            <Link
              href="https://www.instagram.com/Thriftzfitness/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <div className="flex justify-center gap-5 cursor-pointer">
                <>
                  <svg
                    className="w-10 h-10 my-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </>
                <h2 className="  sm:block  my-auto text-2xl font-extralight">
                  Instagram
                </h2>
              </div>
            </Link>

            {/* <div className="flex justify-center gap-5 cursor-pointer">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <>
                  <svg
                    className="w-10 h-10 my-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </>
              </Link>
              <h2 className=" hidden sm:block  my-auto text-2xl font-extralight">
                Twitter
              </h2>
            </div> */}
          </div>

          <div className="w-[350px] sm:w-[500px] grid-span-1 grid lg:grid-cols-2 mx-auto text-center my-20">
            <article className="col-span-2">
              <h2 className="text-4xl m-5">
                <img
                  className="w-20 mx-auto my-auto"
                  src="/ayurgenic_p.png"
                ></img>
                Ayurgenic
              </h2>
            </article>

            <Link
              href="https://www.facebook.com/AyurgenicHealthcare/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <div className="flex justify-center gap-5 cursor-pointer ">
                <>
                  <svg
                    className="w-10 h-10 my-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </>
                <h2 className="  sm:block  my-auto text-2xl font-extralight">
                  Facebook
                </h2>
              </div>
            </Link>

            <Link
              href="https://www.instagram.com/ayurgenichealthcare/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <div className="flex justify-center gap-5 cursor-pointer">
                <>
                  <svg
                    className="w-10 h-10 my-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </>
                <h2 className="  sm:block  my-auto text-2xl font-extralight">
                  Instagram
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Section 4 end */}
    </div>
  );
};

export default Contact;
