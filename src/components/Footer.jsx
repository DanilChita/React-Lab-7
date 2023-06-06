import React from "react";
import GetCategoriesData from "../hooks/GetCategoriesData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const categories = GetCategoriesData();

  return (
    <footer className="bg-gray-800 text-white py-4 px-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-gray-400 mr-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              sodales elit vel dui dignissim, a dignissim lectus faucibus.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Categories</h3>
            <ul className="list-none flex flex-col ">
              {categories.map((category) => (
                <li key={category} className="mb-2">
                  <Link
                    to={`/category/${category}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-400">
              Email: info@example.com
              <br />
              Phone: 123-456-7890
              <br />
              Address: 123 Street, City
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex">
              <a
                href="#"
                className="text-gray-400 hover:text-white mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
