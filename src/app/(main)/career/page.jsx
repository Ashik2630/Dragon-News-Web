import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Dragon News - Career",
};

const CareerPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Careers at Dragon News
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join our passionate team and help shape the future of digital news.
          At Dragon News, we believe in truth, creativity, and innovation.
        </p>
      </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Dragon News is a modern news platform delivering accurate, fast,
            and engaging content to readers around the world. Our mission is to
            empower people with reliable information and insightful stories.
          </p>
        </div>
        <div>
          <Image width={400} height={400}
            src="https://i.ibb.co.com/7QpKsCX/news.jpg"
            alt="news"
            className="rounded-2xl shadow-md"
          />
        </div>
      </div>

      {/* Why Join Us */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Why Join Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">🚀 Growth</h3>
            <p className="text-gray-600">
              Learn and grow with real-world projects and mentorship.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">🌍 Impact</h3>
            <p className="text-gray-600">
              Work on a platform that reaches thousands of readers daily.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">🤝 Culture</h3>
            <p className="text-gray-600">
              Friendly, collaborative, and innovative work environment.
            </p>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Open Positions
        </h2>

        <div className="space-y-4">
          <div className="p-5 border rounded-xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">
                Frontend Developer (React)
              </h3>
              <p className="text-sm text-gray-500">
                Remote • Full-time
              </p>
            </div>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Apply
            </button>
          </div>

          <div className="p-5 border rounded-xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">
                News Content Writer
              </h3>
              <p className="text-sm text-gray-500">
                Remote • Part-time
              </p>
            </div>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Apply
            </button>
          </div>

          <div className="p-5 border rounded-xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">
                Backend Developer (Node.js)
              </h3>
              <p className="text-sm text-gray-500">
                Remote • Full-time
              </p>
            </div>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Apply
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CareerPage;