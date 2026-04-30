import Link from "next/link";
import React from "react";

const LeftSidebar = ({categories, activeId}) => {
  return (
    <div>
      <h2 className="font-bold text-lg text-[#403F3F]">All Categories</h2>
      <ul className="flex flex-col gap-3 mt-6">
        {categories.news_category.map((category) => {
          return (
            <li
              className={`${activeId === category.category_id && "bg-[#E7E7E7]"}  text-[#403F3F] rounded-md  font-bold text-center text-md`}
              key={category.category_id}
            >
              <Link href={`/category/${category.category_id}`} className="block p-2">
              {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
