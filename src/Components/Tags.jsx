import React from "react";

export default function Tags({ color, title }) {
  const bgcolor = color;
  return (
    <span
      className={`py-[5px] px-[10px] text-textcolor bg-tag_${title}`}
      style={{
        // opacity: ".1",
        backgroundColor: `${color}`,
        border: `2px solid ${color}`,
        borderRadius: "25px",
      }}
    >
      {title}
    </span>
  );
}
