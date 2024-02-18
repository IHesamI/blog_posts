import React, { useRef, useEffect, useState } from "react";

export default function DynamicBorderCard({children}) {
  const blobref = useRef(null);
  const fakeblobref = useRef(null);
  useEffect(() => {
    window.addEventListener('mousemove',handleMouseMove);
  
    return () =>window.removeEventListener('mousemove',handleMouseMove);
  }, [])
  
  function handleMouseMove(ev) {
    if (blobref.current) {
        const rec = fakeblobref.current.getBoundingClientRect();
      blobref.current.animate(
        [
          {
            transform: `translate(${(ev.clientX - rec.left )- (rec.width / 2)}px,${
              (ev.clientY - rec.top) - (rec.height / 2)
            }px)`,
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
    <div className="card">
      <div className="inner">
        {children}
      </div>
      <div ref={blobref} className="blob"></div>
      <div ref={fakeblobref} className="fblob"></div>
    </div>
  );
}
