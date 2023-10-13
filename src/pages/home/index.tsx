import React from "react";
import HOME_1 from "../../assets/home_1.png";
import HOME_2 from "../../assets/home_2.png";
import HOME_3 from "../../assets/home_3.png";
import ICON from "../../assets/icon.png";
import ICON2 from "../../assets/icon2.png";
import { Button } from "@material-tailwind/react";
import { MdAnalytics } from "react-icons/md";
import HomeCard from "../../components/home-card";
function index() {
  return (
    <div className="container mx-auto">
      <section className="py-8 md:py-16 grid md:grid-cols-2 content-center">
        <div className="px-0 md:px-8 lg:px-16 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <p>The worlds first AV Event Bidding Platform</p>
          <h1 className="text-primary">
            Connecting Event Managers with <br />
            <span className="text-[#FF5533]">AV Providers</span>
          </h1>
          <Button variant="filled" color="indigo" size="sm" className="rounded-md w-36 py-4 mt-4 px-8 bg-primary font-poppins">
            <span className="text-white">Get Started</span>
          </Button>
        </div>
        <img src={HOME_1} alt="aad" className="w-full object-scale-down" />
      </section>

      <section className="py-8 md:py-16 grid md:grid-cols-2 content-center">
        <img src={HOME_2} alt="aad" className="w-full object-scale-down" />
        <div className="px-0 md:px-8 lg:px-16 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-black font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-normal lg:leading-snug xl:leading-snug">
            Want to Get More Proposals?
          </h2>
          <p>Post your event on our events listing page. </p>
          <div className="flex flex-col md:flex-row items-center justify-start mt-4">
            <div className="flex items-center justify-center rounded-full w-12 h-12 bg-gray-200">
              <MdAnalytics size={24} className="text-secondary" />
            </div>
            <p className="ml-4">Receive multiple proposals for you event.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-start mt-4">
            <div className="flex  items-center justify-center rounded-full w-12 h-12 bg-gray-200">
              <MdAnalytics size={24} className="text-secondary" />
            </div>
            <p className="ml-4">Save time and resources by having proposals sent to you.</p>
          </div>
          <Button variant="filled" color="indigo" size="sm" className="rounded-md w-36 py-4 mt-4 px-8 bg-primary font-poppins">
            <span className="text-white">Get Started</span>
          </Button>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-black">Recently Posted Events</h2>
          <div className="flex items-center justify-between gap-4">
            <div className="flex  items-center justify-center rounded-full w-12 h-12 bg-primary">
              <MdAnalytics size={24} className="text-white" />
            </div>
            <div className="flex  items-center justify-center rounded-full w-12 h-12 bg-primary">
              <MdAnalytics size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="py-8 w-full ov flex items-center justify-start gap-4">
          <HomeCard IMG={ICON} />
          <HomeCard IMG={ICON2} />
          <HomeCard IMG={ICON} />
          <HomeCard IMG={ICON2} />
          <HomeCard IMG={ICON} />
        </div>
      </section>

      <section className="my-8 md:my-16 grid md:grid-cols-2 rounded-lg content-center bg-secondary">
        <div className="md:px-8 lg:px-16 flex flex-col justify-center items-center md:items-start text-center md:text-left  p-8 pt-12  md:pt-8">
          <h2 className="text-black">
            Want to Get More <span className="text-white">Clients?</span>
          </h2>
          <p className="text-white mt-4">Browse the events listing page, and submit your proposal. No more cold calling or emailing for new clients.</p>
          <Button variant="filled" color="indigo" size="sm" className="rounded-md w-36 py-4 mt-4 px-8 bg-primary font-poppins">
            <span className="text-white">Get Started</span>
          </Button>
        </div>
        <img src={HOME_3} alt="aad" className="w-full object-contain" />
      </section>
    </div>
  );
}

export default index;
