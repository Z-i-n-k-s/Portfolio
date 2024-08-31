import React from 'react';
import { Linkedin, Github, Facebook } from 'lucide-react';
import { PiDiscordLogoLight } from 'react-icons/pi';

const Contact = ({ id }) => {
  return (
    <section
      id={id}
      className="relative min-h-[50vh] flex items-center justify-center w-full px-6 py-8
        4xl:mx-auto 3xl:mx-auto 2xl:mx-auto xl:mx-auto lg:mx-auto bs:mx-auto md:mx-4 sm:mx-2 xs:mx-0 xsm:mx-0"
    >
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-black text-center mb-8">Get in Touch</h2>
        <h3 className="text-xl font-semibold text-black mb-4 text-center">Social Media</h3>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-md">
            <Linkedin className="w-8 h-8 text-black" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-black">LinkedIn</p>
              <a href="https://www.linkedin.com/in/zishan-rezwan/" className="text-black hover:underline">Connect with me on LinkedIn</a>
            </div>
          </li>
          <li className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-md">
            <Github className="w-8 h-8 text-black" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-black">GitHub</p>
              <a href="https://github.com/Z-i-n-k-s" className="text-black hover:underline">Check out my GitHub</a>
            </div>
          </li>
          <li className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-md">
            <Facebook className="w-8 h-8 text-black" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-black">Facebook</p>
              <a href="https://www.facebook.com/Rezwan.Zishan/" className="text-black hover:underline">Follow me on Facebook</a>
            </div>
          </li>
          <li className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-md">
            <PiDiscordLogoLight className="w-8 h-8 text-black" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-black">Discord</p>
              <a href="https://discordapp.com/users/708984153185714210" className="text-black hover:underline">Join me on Discord</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
