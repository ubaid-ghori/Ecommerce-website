import React from 'react';
import { Facebook,Twitter,Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-100">About Us</h3>
            <p className="text-gray-300">Company XYZ</p>
            <p className="text-gray-300">123 Street Name</p>
            <p className="text-gray-300">City, Country</p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-100">Services</h3>
            <ul className="list-none">
              <li className="text-gray-300">Online Discount</li>
              <li className="text-gray-300">Save payments</li>
              <li className="text-gray-300">Help Center</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-100">Contact Us</h3>
            <p className="text-gray-300">Email: contact@example.com</p>
            <p className="text-gray-300">Phone: +123 456 7890</p>
            <div className="flex space-x-4 text-gray-300">
              <a  aria-label="Facebook"><Facebook /></a>
              <a  aria-label="Twitter"><Twitter /></a>
              <a  aria-label="Instagram"><Instagram /></a>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300 text-sm">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
