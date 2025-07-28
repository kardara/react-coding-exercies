import React, { useState } from "react";
import Header from "./Components/Header";
import Button from "./Components/Button";
import ListRendering from "./Components/ListRendering";
import RenderingObject from "./Components/RenderingObject";

const App = () => {
  const [count, setCount] = useState(0);

  // const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  // const mappingAnimals = animals.map((b, i) => <li key={i}>{b}</li>);
  function handlesubmit(formdata) {
    alert(`Hello ${formdata.get("fname")} ${formdata.get("lname")}!`);
  }

  const obj1 = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];

  return (
    <>
      <Header />
      <div className=" flex flex-col items-center justify-center gap-3 min-h-screen">
        {/* <Button number="1" />
        <Button number="2" />
        <Button number="3" /> */}
        {/* <p>Button has been clicked: {count} times</p>
        <button onClick={() => setCount(() => count + 1)}>Click Me</button> */}
        {/* <ListRendering element={animals} /> */}
        {/* <form action={handlesubmit} className="flex flex-col gap-2">
          <input
            className="border rounded-2xl p-2 border-gray-400"
            placeholder="Fisrt Name "
            name="fname"
          />
          <input
            className="border rounded-2xl p-2 border-gray-400"
            placeholder="Last Name "
            name="lname"
          />
          <button className="border rounded-2xl p-2 bg-red-500 text-white">
            {" "}
            GREET ME
          </button>
        </form> */}
        <RenderingObject obj={obj1} />
      </div>
    </>
  );
};

export default App;
