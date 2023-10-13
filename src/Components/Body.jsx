import React from "react";
import DynamicBorderCard from "./Cards/DynamicBorderCard";
import VerticalCards from "./Cards/VerticalCards";

export default function Body() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <VerticalCards
        title={
          "Music to put you in a better mood ~ Study music - lofi / relax / stress relief"
        }
        tags={[{ title: "health", color: "#c457be" }]}
      />
      <VerticalCards
        title={
          "Music to put you in a better mood ~ Study music - lofi / relax / stress relief"
        }
      />
      <VerticalCards
        title={
          "Music to put you in a better mood ~ Study music - lofi / relax / stress relief"
        }
      />
      <VerticalCards
        title={
          "Music to put you in a better mood ~ Study music - lofi / relax / stress relief"
        }
      />
      <VerticalCards
        title={
          "Music to put you in a better mood ~ Study music - lofi / relax / stress relief"
        }
      />
      <VerticalCards
        title={
          "Music to put you in a better mood ~ Study music - lofi / relax / stress relief"
        }
      />
    </div>
  );
}
