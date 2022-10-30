import React from "react";
import { BsNewspaper } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import { HiOutlineClipboard } from "react-icons/hi";

const HowWeWork = () => {
  return (
    <section className="text-center bg-lightTeal py-10">
      <h1 className=" font-bold text-4xl">How We Work</h1>
      <h3 className=" text-xl ">
        Add a touch of green to your home/office in three simple steps and
        become a plant parent.
      </h3>
      <div className="flex gap-5 mt-14 container">
        <div className="flex flex-col justify-between items-center">
          <BsNewspaper className="text-5xl" />
          <h4 className="mt-5 font-semibold text-xl">Plants Simplified</h4>
          <p className="text-gray-500 mt-2">
            Order plants ready to be placed in your home, office or garden. Just
            Unpack, Relax and Enjoy your green buddies.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <MdOutlineLocalShipping className="text-5xl" />
          <h4 className="mt-5 font-semibold text-xl">Secure Shipping</h4>
          <p className="text-gray-500 mt-2">
            Our unique packaging will hold the plants in place and let the plant
            breathe so that it reaches you fresh without any mess.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <HiOutlineClipboard className="text-5xl" />
          <h4 className="mt-5 font-semibold text-xl">Detailed Guidance</h4>
          <p className="text-gray-500 mt-2">
            Get detailed plant care instructions from the website as well as
            real-time guidance from our Garden Experts on Whatsapp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
