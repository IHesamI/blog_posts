import React, { useRef } from "react";

export default function DynamicBorderCard() {
  const blobref = useRef(null);
  const fakeblobref = useRef(null);
  function handleMouseMove(ev) {
    if (blobref.current) {
      const rec = fakeblobref.current.getBoundingClientRect();

      blobref.current.animate(
        [
          {
            transform: `translate(${ev.clientX - rec.left - rec.width / 2}px,${  ev.clientY - rec.top - rec.height / 2}px)`,
          },
        ],
        {
          duration: 300,
          fill: "forwards",
        }
      );
    }
  }

  return (
    <div onMouseMove={handleMouseMove} className={"card"}>
      <div className="inner">
        <h3>Zarp</h3>
        <p>hello to you dash namosan bia ino bebin</p>
      </div>
      <div ref={blobref} className="blob"></div>
      <div ref={fakeblobref} className="fblob"></div>
    </div>
  );
}
