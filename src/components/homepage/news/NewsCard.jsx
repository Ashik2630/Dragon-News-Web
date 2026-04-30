import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import starIcon from "@/assets/star.png";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm pb-5">
      <div className="card-body bg-[#F3F3F3] ">
        {/* Author info */}
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <Image
              src={news.author?.img}
              alt={news.author?.img}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h2 className="font-semibold">{news.author?.name}</h2>
              <p className="text-xs">{news.author?.published_date}</p>
            </div>
          </div>
          <div className="flex justify-between items-center text-2xl gap-2">
            <CiShare2 />
            <CiBookmark />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mx-6 my-5 text-[#403F3F]">
          {news.title}
        </h1>
        <Image
          src={news.image_url}
          alt={news.title}
          width={300}
          height={300}
          className="w-full rounded-md px-10 py-5"
        />
        <p className="px-5 line-clamp-3">{news.details}</p>
        <div className="px-5">
          <Link href={`/news/${news._id}`}>
            <button className="text-[#FF8C47] text-xl font-semibold">See details</button>
          </Link>
        </div>
        <hr className="w-[90%] mx-auto mt-2 text-[#5959597a]" />
        <div className="px-10 flex justify-between items-center mt-2">
          <div className="flex items-center gap-2">
            <h2 className="flex items-center gap-2">
              <Image src={starIcon} alt="starIcon" width={20} height={20} />
              <Image src={starIcon} alt="starIcon" width={20} height={20} />
              <Image src={starIcon} alt="starIcon" width={20} height={20} />
              <Image src={starIcon} alt="starIcon" width={20} height={20} />
              <Image src={starIcon} alt="starIcon" width={20} height={20} />
              {news.rating.number}
            </h2>
          </div>
          <div>
            <h2 className="flex items-center gap-2">
              <FaEye className="text-lg" />
              {news.total_view}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
