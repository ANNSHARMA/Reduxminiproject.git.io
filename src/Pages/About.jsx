import React from "react";
import Banner from "../Banner/Banner";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-800 text-white font-sans">
      <div className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        <div className="bg-white text-gray-900 p-6 md:p-8 rounded-lg shadow-lg">
          <p className="text-lg leading-relaxed">
            Welcome to <strong>Cricket Live Scoreboard</strong>, your go-to platform for real-time cricket scores,
            match updates, and player statistics. Whether you're a passionate fan, a casual viewer, or just love
            keeping up with the game, we have you covered!
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-10">Our Mission</h2>
        <p className="text-lg mt-4 px-4">
          Our mission is to bring you the most accurate and up-to-date cricket scores from leagues and tournaments
          worldwide. We aim to keep you connected to the action, no matter where you are.
        </p>

        <Banner />

        <h2 className="text-2xl font-semibold mt-10">What We Offer</h2>
        <ul className="text-lg mt-4 text-left bg-white text-gray-900 p-6 md:p-8 rounded-lg shadow-lg">
          <li className="mb-2">Live match scores and updates</li>
          <li className="mb-2">Detailed player and team statistics</li>
          <li className="mb-2">Fixtures and schedules</li>
          <li className="mb-2">In-depth match reports and analysis</li>
          <li className="mb-2">Interactive features for fans</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">Stay Connected</h2>
        <p className="text-lg mt-4 px-4">
          Follow us on social media and subscribe to our newsletter for the latest updates, exclusive content, and
          special features. Join our growing community of cricket enthusiasts and never miss a moment of the action.
        </p>
      </div>
    </div>
  );
};

export default About;
