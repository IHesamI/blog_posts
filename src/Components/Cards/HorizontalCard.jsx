import React from "react";
import DynamicBorderCard from "./DynamicBorderCard";
import Tags from "../Tags";
export default function HorizontalCard({
  tags,
  description,
  title,
  imageSize,
  imagesrc,
}) {
  return (
    <div>
      <DynamicBorderCard>
        <div
          className="flex flex-col items-center gap-3"
          style={{ width: `${imageSize + 100}px` }}
        >
          <img
            style={{ borderRadius: "25px" }}
            src={
              imagesrc ||
              "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDIzfHxmYXNoaW9uJTIwJTIwZmxvd2VyJTIwbGlmZXN0eWxlfGVufDB8fHx8MTY5MjQ0NTI1N3ww&ixlib=rb-4.0.3&q=80&w=2000"
            }
            alt=""
            width={imageSize + 100}
            height={"150"}
          />
          <div className="flex flex-col">
            <div className="flex flex-wrap">
              {tags &&
                tags.map((eachtag) => {
                  return <Tags title={eachtag.title} color={eachtag.color} />;
                })}
            </div>
            <h1 className="text-xl w-[fit]">{title}</h1>
            <br />
            <h2 className="text-sm w-[fit]">{description}</h2>
          </div>
        </div>
      </DynamicBorderCard>
    </div>
  );
}
