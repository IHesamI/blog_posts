import React from "react";
import DynamicBorderCard from "./DynamicBorderCard";
import Tags from "../Tags";

export default function VerticalCards({ title, tags, imagesrc }) {
  return (
    <div className="w-[550px]">
      <DynamicBorderCard>
        <div className="flex flex-row items-center gap-3">
          <img
            style={{ borderRadius: "25px" }}
            src={imagesrc}
            alt=""
            width={"180px"}
            height={"150px"}
          />
          <div className="flex flex-col">
            <div className="flex flex-wrap">
              {tags &&
                tags.map((eachtag) => {
                  return <Tags title={eachtag.title} color={eachtag.color} />;
                })}
            </div>
            <p>{title}</p>
          </div>
        </div>
      </DynamicBorderCard>
    </div>
  );
}
