import React from "react";

const FlipCards = (props) => {
  //   const cards = [
  //     {
  //       id: 1,
  //       image: "https://via.placeholder.com/150",
  //       title: "FlipCard 1",
  //       description: "FlipCard 1 Description",
  //       backText: "This is the back side",
  //     },
  //     {
  //       id: 1,
  //       image: "https://via.placeholder.com/150",
  //       title: "FlipCard 1",
  //       description: "FlipCard 1 Description",
  //       backText: "This is the back side",
  //     },
  //     {
  //       id: 1,
  //       image: "https://via.placeholder.com/150",
  //       title: "FlipCard 1",
  //       description: "FlipCard 1 Description",
  //       backText: "This is the back side",
  //     },
  //     // Add more cards if needed
  //   ];

  return (
    <div className="grid grid-cols-2 gap-6 p-6 bg-green-100">
      {props.cards.map((card) => (
        <div key={card.id} className="w-64 h-80 [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center [backface-visibility:hidden]">
              <img
                src={card.image}
                alt="Card"
                className="w-24 h-24 mb-4 rounded-full object-cover"
              />
              <h1 className="font-bold text-xl mb-2 text-center">
                {card.title}
              </h1>
              <p className="text-center text-gray-700">{card.description}</p>
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full bg-white rounded-xl shadow-md p-6 flex  [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <p className="text-xl text-center font-semibold text-gray-800">
                {card.backText}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCards;
