import React from "react";

export default function CircleTagCards({ title, imagesrc, postCount }) {
  return (
    <div className="flex flex-row items-center bg-cardBackground rounded-full px-[25px] py-3 gap-2">
      <img
        className="rounded-full"
        src={imagesrc}
        alt=""
        width={70}
        height={120}
      />
      <div>
        <h1 className="text-2xl">{title}</h1>
        <h5> posts {postCount}</h5>
      </div>
    </div>
  );
}
