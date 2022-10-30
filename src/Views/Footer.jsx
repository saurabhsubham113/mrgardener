import React from "react";
import Logo from "../assets/Logo.svg";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-darkGreen">
      <div className="container pt-10">
        <div className="flex justify-between">
          <div>
            <img src={Logo} alt="logo" className="pt-10" />
            <div className="flex mt-4">
              <a href="mailto:ordersupport@mrgardener.co.in">
                <MdEmail className="text-2xl text-gray-200 hover:text-white" />
              </a>
              <a
                href="https://wa.me/+919149182937?text=I%20would%20Like%20to%20buy%20one%20of%20your%20plants."
                target="_blank"
                rel="noreferrer noopener">
                <FaWhatsapp className="ml-4 text-2xl text-gray-200 hover:text-white" />
              </a>
              <a
                href="https://twitter.com/gardenerforyou"
                target="_blank"
                rel="noreferrer noopener">
                <FaTwitter className="ml-4 text-2xl text-gray-200 hover:text-white" />
              </a>
              <a
                href="https://instagram.com/gardener_foryou?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer noopener">
                <FaInstagram className="ml-4 text-2xl text-gray-200 hover:text-white" />
              </a>
            </div>
          </div>
          <form className="flex flex-col gap-5 pb-8">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Name"
                className="outline-none px-2.5 py-3 rounded-md"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="outline-none px-2.5 py-3 rounded-md"
                required
              />
            </div>
            <textarea
              type="text"
              placeholder="Message..."
              className="outline-none px-2.5 py-3 rounded-md resize-none h-32"
              required></textarea>
            <button
              type="submit"
              className="shadow-lg text-black bg-white outline-none font-semibold rounded-md  px-5 py-2.5 text-center mr-2 mb-2">
              Send
            </button>
          </form>
        </div>
      </div>

      <h6 className="bg-black text-white font-normal text-center text-sm py-2">
        Founder-Shantanu Sharma | We are here to inspire a world where every
        plant journey starts from Mr. Gardener Go Greener Live Healthier |
        Since-August 2022
      </h6>
    </footer>
  );
};

export default Footer;
