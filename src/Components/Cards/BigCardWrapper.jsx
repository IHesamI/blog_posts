import React, { useState, useEffect } from "react";
import HorizontalCard from "./HorizontalCard";
import VerticalCards from "./VerticalCards";
export default function BigCardWrapper({ cardsList }) {
  const [bigcardIndex, setbigcardIndex] = useState(0);
  useEffect(() => {
    // let interval;
    // setInterval(changeBigCard, 5000);
    // return () => clearInterval(interval);
  }, []);
  function changeBigCard() {
    setbigcardIndex((prevState) => (prevState + 1) % cardsList.length);
  }

  return (
    <div className="flex flex-row gap-3">
      <div>
        <HorizontalCard
          title={cardsList[bigcardIndex].title}
          tags={cardsList[bigcardIndex].tags}
          imagesrc={cardsList[bigcardIndex].imagesrc}
          imageSize={500}
          description={cardsList[bigcardIndex].description}
        />
      </div>
      <div className="flex flex-col gap-2">
        {cardsList.map(
          (card, index) =>
            index != bigcardIndex && (
              <VerticalCards
                title={card.title}
                tags={card.tags}
                imagesrc={card.imagesrc}
              />
            )
        )}
      </div>
    </div>
  );
}
