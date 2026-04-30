import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Dragon News - About Us",
};

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About Dragon News
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Delivering fast, accurate, and unbiased news to empower people with
          information that matters.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="p-6 border rounded-2xl hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            🎯 Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to provide trustworthy and real-time news that keeps
            people informed, aware, and connected to the world. We focus on
            transparency, accuracy, and speed.
          </p>
        </div>

        <div className="p-6 border rounded-2xl hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            🚀 Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We aim to become a leading digital news platform that people trust.
            Our goal is to innovate how news is consumed using modern technology
            and user-first design.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dragon News is a modern online news platform focused on delivering
            high-quality journalism. We cover breaking news, technology,
            business, entertainment, and more.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our team consists of passionate developers, writers, and designers
            who are dedicated to creating a better news experience for users.
          </p>
        </div>

        <div>
          <Image width={400} height={400}
            src="https://i.ibb.co.com/7QpKsCX/news.jpg"
            alt="Dragon News"
            className="rounded-2xl shadow-md"
          />
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-5 border rounded-xl text-center hover:shadow-md transition">
            <h3 className="font-semibold mb-2">🧭 Integrity</h3>
            <p className="text-gray-600 text-sm">
              Honest and unbiased reporting.
            </p>
          </div>

          <div className="p-5 border rounded-xl text-center hover:shadow-md transition">
            <h3 className="font-semibold mb-2">⚡ Speed</h3>
            <p className="text-gray-600 text-sm">
              Real-time updates as events happen.
            </p>
          </div>

          <div className="p-5 border rounded-xl text-center hover:shadow-md transition">
            <h3 className="font-semibold mb-2">🌐 Accessibility</h3>
            <p className="text-gray-600 text-sm">
              News for everyone, everywhere.
            </p>
          </div>

          <div className="p-5 border rounded-xl text-center hover:shadow-md transition">
            <h3 className="font-semibold mb-2">💡 Innovation</h3>
            <p className="text-gray-600 text-sm">
              Modern solutions for modern readers.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-16 text-center">
        <div className="p-6 bg-gray-100 rounded-xl">
          <h3 className="text-3xl font-bold text-red-500">50K+</h3>
          <p className="text-gray-600">Daily Readers</p>
        </div>

        <div className="p-6 bg-gray-100 rounded-xl">
          <h3 className="text-3xl font-bold text-red-500">10K+</h3>
          <p className="text-gray-600">Published Articles</p>
        </div>

        <div className="p-6 bg-gray-100 rounded-xl">
          <h3 className="text-3xl font-bold text-red-500">24/7</h3>
          <p className="text-gray-600">News Coverage</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-red-500 text-white py-10 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-3">
          Stay Connected with Dragon News
        </h2>
        <p className="mb-5">
          Follow us and never miss an important update.
        </p>
        <button className="bg-white text-red-500 px-6 py-2 rounded-lg font-medium hover:bg-gray-200">
          Explore News
        </button>
      </div>

    </div>
  );
};

export default AboutPage;