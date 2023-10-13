import React from "react";
import DynamicBorderCard from "./DynamicBorderCard";
import Tags from "../Tags";

export default function VerticalCards({ title, tags }) {
  return (
    <div className="w-[550px]">
      <DynamicBorderCard>
        <div className="flex flex-row items-center gap-3">
          <img
            style={{ borderRadius: "25px" }}
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDIzfHxmYXNoaW9uJTIwJTIwZmxvd2VyJTIwbGlmZXN0eWxlfGVufDB8fHx8MTY5MjQ0NTI1N3ww&ixlib=rb-4.0.3&q=80&w=2000"
            alt=""
            width={"180"}
            height={"150"}
          />
          <div className="flex flex-col">
            <div className="flex flex-wrap">
              {tags &&
                tags.map((eachtag) => {
                  return (
                    <Tags title={eachtag.title} color={eachtag.color} />
                  );
                })}
            </div>
            <p>{title}</p>
          </div>
        </div>
      </DynamicBorderCard>
    </div>
  );
}
