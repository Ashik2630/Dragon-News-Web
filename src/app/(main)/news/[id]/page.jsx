import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getNewsDetailsId } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const generateMetadata = async({params}) => {
  const {id} = await params;
  const news = await getNewsDetailsId(id);
  return {
    title:news.title,
    description:news.description,
  }
}
 
const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const news = await getNewsDetailsId(id);
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-3"></div>
      <div className="col-span-6">
        <div className="bg-gray-100 h-screen  flex items-center justify-center p-6">
          <div className="max-w-5xl w-full bg-white rounded-lg shadow-md p-6">
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Dragon News
            </h2>

            {/* Image */}
            <Image
              src={news.image_url}
              alt={news.title}
              width={300}
              height={300}
              className="w-full rounded-md px-10 py-5"
            />

            {/* Heading */}
            <h3 className="text-xl font-bold text-gray-800 leading-snug mb-3">
              {news.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              {news.details}
            </p>

            {/* Button */}
            <Link href={`/category/${news.category_id}`}>
              <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                ← All news in this category
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <RightSidebar/>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
