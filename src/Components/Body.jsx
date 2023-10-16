import React from "react";
import BigCardWrapper from "./Cards/BigCardWrapper";
import CircleTagCards from "./Cards/CircleTagCards";
import HorizontalCard from "./Cards/HorizontalCard";
export default function Body() {
  return (
    <div className="flex flex-col justify-center m-auto gap-5">
      <div className="flex flex-wrap gap-3 justify-center mt-2">
        <BigCardWrapper
          cardsList={[
            {
              title: "oewjrioewrioewroewirwioerewioroiwerw",
              description:
                "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptates ullam. Corporis eveniet, odio assumenda labore placeat sunt! Animi, velit commodi? Beatae consequuntur numquam quibusdam mollitia ab reiciendis harum architecto.",
              tags: [{ title: "health", color: "#c457be" }],
              imagesrc:
                "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI4fHxmYXNoaW9uJTIwYmVhdXR5fGVufDB8fHx8MTY5MjQ0NTA2MHww&ixlib=rb-4.0.3&q=80&w=2000",
            },
            {
              title: "oewjrioewrioewroewirwioerewioroiwerw",
              description:
                "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptates ullam. Corporis eveniet, odio assumenda labore placeat sunt! Animi, velit commodi? Beatae consequuntur numquam quibusdam mollitia ab reiciendis harum architecto.",
              tags: [{ title: "Zarp", color: "#d4500e" }],
              imagesrc:
                "https://images.unsplash.com/photo-1522000243595-42c412404679?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fGZhc2hpb24lMjBzZWElMjB0ZWNofGVufDB8fHx8MTY5MjQ0NTg4NHww&ixlib=rb-4.0.3&q=80&w=2000",
            },
            {
              title: "oewjrioewrioewroewirwioerewioroiwerw",
              description:
                "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptates ullam. Corporis eveniet, odio assumenda labore placeat sunt! Animi, velit commodi? Beatae consequuntur numquam quibusdam mollitia ab reiciendis harum architecto.",
              tags: [{ title: "sports", color: "#123123" }],
              imagesrc:
                "https://images.unsplash.com/photo-1670349148055-e11a0b3be242?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=MnwxMTc3M3wxfDF8c2VhcmNofDI5fHxoYXBweXxlbnwwfHx8fDE2NzE0MzI2NjY&ixlib=rb-4.0.3&q=80&w=2000",
            },
            {
              title: "oewjrioewrioewroewirwioerewioroiwerw",
              description:
                "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptates ullam. Corporis eveniet, odio assumenda labore placeat sunt! Animi, velit commodi? Beatae consequuntur numquam quibusdam mollitia ab reiciendis harum architecto.",
              tags: [{ title: "economy", color: "#f21324" }],
              imagesrc:
                "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDIzfHxmYXNoaW9uJTIwJTIwZmxvd2VyJTIwbGlmZXN0eWxlfGVufDB8fHx8MTY5MjQ0NTI1N3ww&ixlib=rb-4.0.3&q=80&w=2000",
            },
          ]}
        />
      </div>
      <div className="flex flex-col text-textcolor justify-center items-center gap-5">
        <h1 className="text-2xl">Popular Tags</h1>
        <div className="flex flex-wrap gap-5 m-auto w-[80%]">
          <CircleTagCards imagesrc={'https://picsum.photos/id/123/250/250'} title={'gray'} postCount={5} />
          <CircleTagCards imagesrc={'https://picsum.photos/id/426/250/250'} title={'river'} postCount={5} />
          <CircleTagCards imagesrc={'https://picsum.photos/id/23/250/250'} title={'fork'} postCount={5} />
          <CircleTagCards imagesrc={'https://picsum.photos/id/630/250/250'} title={'trees'} postCount={5} />
          <CircleTagCards imagesrc={'https://picsum.photos/id/200/250/250'} title={'cow'} postCount={2} />
          <CircleTagCards imagesrc={'https://picsum.photos/id/1000/250/250'} title={'mountain'} postCount={9} />
          <CircleTagCards imagesrc={'https://picsum.photos/id/400/250/250'} title={'flower'} postCount={4} />
          <CircleTagCards imagesrc={'https://picsum.photos/id/15/250/250'} title={'waterfall'} postCount={2} />
        </div>
        <div
        className="flex flex-wrap justify-center gap-3">
        <HorizontalCard
          title={'cardsList[bigcardIndex].title'}
          tags={[]}
          imagesrc={'https://picsum.photos/id/13/250/250'}
          imageSize={150}
          description={'cardsList[bigcardIndex].description'}
        />
        <HorizontalCard
          title={'cardsList[bigcardIndex].title'}
          tags={[]}
          imagesrc={'https://picsum.photos/id/13/250/250'}
          imageSize={150}
          description={'cardsList[bigcardIndex].description'}
        />
        <HorizontalCard
          title={'cardsList[bigcardIndex].title'}
          tags={[]}
          imagesrc={'https://picsum.photos/id/13/250/250'}
          imageSize={150}
          description={'cardsList[bigcardIndex].description'}
        />
        <HorizontalCard
          title={'cardsList[bigcardIndex].title'}
          tags={[]}
          imagesrc={'https://picsum.photos/id/13/250/250'}
          imageSize={150}
          description={'cardsList[bigcardIndex].description'}
        />
        <HorizontalCard
          title={'cardsList[bigcardIndex].title'}
          tags={[]}
          imagesrc={'https://picsum.photos/id/13/250/250'}
          imageSize={150}
          description={'cardsList[bigcardIndex].description'}
        />
        <HorizontalCard
          title={'cardsList[bigcardIndex].title'}
          tags={[]}
          imagesrc={'https://picsum.photos/id/13/250/250'}
          imageSize={150}
          description={'cardsList[bigcardIndex].description'}
        />
        <HorizontalCard
          title={'cardsList[bigcardIndex].title'}
          tags={[]}
          imagesrc={'https://picsum.photos/id/13/250/250'}
          imageSize={150}
          description={'cardsList[bigcardIndex].description'}
        />
        <HorizontalCard
          title={'cardsList[bigcardIndex].title'}
          tags={[]}
          imagesrc={'https://picsum.photos/id/13/250/250'}
          imageSize={150}
          description={'cardsList[bigcardIndex].description'}
        />
        </div>
      </div>
    </div>
  );
}
