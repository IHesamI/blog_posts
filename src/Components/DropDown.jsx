import React from "react";
import {UilAngleDown  } from '@iconscout/react-unicons';
export default function DropDown({ title, items }) {
  return (
    <div className="block cursor-pointer">
      <div className="flex flex-row links peer items-center ">{title} <UilAngleDown  className={"text-xs font-light"}/></div>
      <div className="dropdownmenu">
        {
        items.map((item, index) => (
          <a key={index} href="#">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
