import React from "react";

const RenderingObject = ({ obj }) => {
  return (
    <div className="flex justify-center gap-6 p-6 bg-green-100">
      {obj.map((el) => (
        <div key={el.id} className="bg-white p-6 rounded-xl shadow-md w-72">
          <h1 className="font-bold text-xl mb-2 text-center">{el.setup}</h1>
          <p className="text-center text-gray-700">{el.punchline}</p>
        </div>
      ))}
    </div>
  );
};

export default RenderingObject;
