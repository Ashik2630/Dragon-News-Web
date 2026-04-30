import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "paramsId");

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-5 my-15">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>
      <div className="col-span-6">
        Dragon News Home
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((n) => {
             return  <NewsCard key={n._id} news={n}></NewsCard>;
            })
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center border rounded-xl bg-gray-50">
              {/* Icon */}
              <div className="text-5xl mb-4">📰</div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-700">
                No News Found
              </h2>

              {/* Description */}
              <p className="text-gray-500 mt-2 max-w-sm">
                There are currently no news articles available. Please check
                back later or try refreshing.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className=" col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
