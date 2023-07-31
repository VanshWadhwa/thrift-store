import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import MyParallaxBanner from "../components/design/MyParallaxBanner";
import Head from "next/head";
import MyCTA from "../components/design/MyCTA";

const teamMembers = [
  {
    name: "Vivek",
    img: "/about/team/vivek.jpeg",
    desc: "Certified Fitness Trainer",
  },
  {
    name: "Neeraj",
    img: "/about/team/neeraj2.jpeg",
    desc: "Certified Fitness Trainer",
  },
  {
    name: "Sandeep",
    img: "/about/team/sandeep.jpeg",
    desc: "Certified Fitness Trainer",
  },
  {
    name: "Najib Bahadurzada",
    img: "/about/team/najib.jpeg",
    desc: "MMA Coach",
  },
  {
    name: "Alpana ",
    img: "/about/team/alpana.jpg",
    desc: "Dietician",
  },
  {
    name: "Dr. Madhav",
    img: "/about/team/madhav.jpeg",
    desc: "Supporting Hands",
  },
];

const awards = [
  {
    img: "/about/awards/award1.jpeg",
    desc: "Certified Fitness Trainer",
  },
  {
    img: "/about/awards/award2.jpeg",
    desc: "Certified Fitness Trainer",
  },
  {
    img: "/about/awards/award3.jpeg",
    desc: "Certified Fitness Trainer",
  },
  {
    img: "/about/awards/award4.jpeg",
    desc: "Certified Fitness Trainer",
  },
  {
    img: "/about/awards/award5.jpg",
    desc: "Certified Fitness Trainer",
  },
  {
    img: "/about/awards/award6.jpg",
    desc: "Certified Fitness Trainer",
  },
];

// Facilities and Awards and benifits
const about = () => {
  return (
    <div className=" container mx-auto">
      <Head>
        <title>About | Thriftz Fitness</title>
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
      <MyParallaxBanner
        imageUrl="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit"
        text={"About Us"}
      />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="mx-auto w-[400px] sm:w-[500px]  md:w-[700px] lg:w-[900px]"
      >
        {/* <img
            src="https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png"
            className="w-48 border-2 rounded-full"
          ></img> */}
        <article>
          <h2 className="text-center text-4xl sm:text-6xl m-20">
            {"Founder's Words"}
          </h2>
        </article>
        <div className="text-xl rounded-xl px-10 py-5 relative mt-32 cardblock m-0 p-10  bg-white  border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            src="about/vipin2.jpeg"
            className="w-56 border-2 rounded-full mx-auto -mt-28 "
          ></img>
          {/* <h2 className="text-center text-3xl mt-5">
            " One ounce of practice is worth a thousand pounds of theory "
          </h2>
          <h2 className="text-right font-extralight mr-10">
            ~Swami Vivekananda
          </h2> */}
          <div className="mt-10 font">
            <p className="text-sm sm:text-lg md:text-xl">Dear members,</p>
            <br />
            <p className="text-sm sm:text-lg md:text-xl font-extralight">
              {
                "   On the behalf of Thriftz, I Vipin Dabas (founder) with my team  focus on the welfare of society in the field of fitness and  wellness. We believe in quality training and education. With my  team and collaborated partners working on the people's overall  fitness and wellness, we deliver the awareness about the favor of  the society and working on the ground level for a healthy nat ure  and betterment of the future generation. We work with the vision  of Changement in the lifestyles of people to make a change in  people's life. We put 10% of our profit shares into the betterment  of nature and society"
              }
            </p>
            <br />
            <p className="text-sm sm:text-lg md:text-xl">Thanks</p>
            <p className="text-sm sm:text-lg md:text-xl">Vipin Dabas</p>
            <br />
          </div>
        </div>
      </div>
      <div className="mx-auto w-[400px] sm:w-[500px]  md:w-[700px] lg:w-[900px]">
        <article>
          <h2 className="text-center text-4xl sm:text-6xl m-20">Mission</h2>
        </article>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" text-lg sm:text-xl rounded-xl px-5 sm:px-10 py-5bg-white  border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="text-left">
            <h3 className="text-center m-5 text-xl  sm:text-2xl font-bold">
              Vyamshala Fitness Academy
            </h3>
            <p className="text-sm sm:text-lg md:text-xl">
              {
                " An initiative to promote our passion for fitness and empowering you to make the change!"
              }
            </p>
            <br />
            <p className="text-sm sm:text-lg md:text-xl font-extralight">
              {
                " Our motive is transforming peoples lives by motivating them to change their mindset for fitness and health. We believe there is always a need for support and motivation, no matter the individual's situation in the fitness journey. Fitness is the key to achieving long lasting heath goals and mental peace. We believe in overall fitness and therefore help people initiate the much needed change and maintain the same. We understand what it's like to struggle with wellness and hence provide support in every possible way to achieve and sustain your fitness goals."
              }
            </p>
            <br />
            <p className="text-sm sm:text-lg md:text-xl">
              {
                "  Make yourself stronger than your excuses. The quality of your health determines the quality of your life and nothing is more important than that. So, embark the fitness journey and experience wellness like never before!"
              }
            </p>
            <br />
          </div>
        </div>
      </div>
      <article>
        <h2 className="text-center text-4xl sm:text-6xl m-20">Our Team</h2>
      </article>{" "}
      <div className=" w-11/12 grid  container grid-flow-col  mx-auto scrollbar-thin scrollbar-thumb-gray-700  overflow-x-scroll overflow-scroll  p-7 my-5 space-x-3  ">
        {teamMembers.map((member) => {
          return (
            <div
              key={member.name}
              className="w-[190px] sm:w-[220px] lg::w-[300px]"
            >
              <img
                className="w-48 h-48 object-cover mx-auto rounded-full"
                src={member.img}
                alt={member.name}
              ></img>
              <h2 className="text-center font-bold text-3xl">{member.name}</h2>
              <h2 className="font-extralight text-center">{member.desc}</h2>
            </div>
          );
        })}
      </div>
      <div className="my-20">
        <article className="">
          <h2 className="text-center text-4xl sm:text-6xl m-10  ">
            {"     Certifications & Awards"}
          </h2>
        </article>
        {/* Certifications and awards */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          // className="grid grid-cols-2 gap-x-2 justify-center sm:grid-cols-2 xl:grid-cols-4 mx-auto "
          className="flex flex-wrap"
        >
          {awards.map((award) => {
            return (
              <div
                key={award.img}
                className="max-w-sm w-96 shadow-xl rounded-xl shadow-yellow-200 mx-auto m-5"
              >
                <img className="w-full rounded-xl " src={award.img}></img>
                {/* <div className="absolute bottom-0">
                <p className="p-1 sm:text-sm text-xs backdrop-blur-md">
                  {award.desc}
                </p>
              </div>{" "} */}
              </div>
            );
          })}
        </div>
        <article>
          <h2 className="text-3xl m-16 "> & many more...</h2>
        </article>
      </div>
      <MyCTA
        image_location={
          "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit"
        }
        text="Any Queries? Feel free to contact us"
        btn_redirect={"/contact"}
        btn_text="Contact Us"
      />
    </div>
  );
};

export default about;
