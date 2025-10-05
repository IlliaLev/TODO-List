"use client"

import Button from "./CButton";

export default function Home() {
  //max-width
  const addTask = () => {
    console.log("Helo");
  }

  return (
    <div className={`
      bg-white/40 backdrop-blur-md shadow-lg
      w-[85%] h-[75%]
      mt-8 rounded-2xl
      max-w-[500px]
      flex flex-col items-center
    `}>
      <div className={`
          flex flex-col items-center justify-center gap-[20px]
          mt-[20px]
        `}>
        <input placeholder="Enter task name..." className={`
            outline-none
            text-center
            bg-white/20
            placeholder-[#D17A8E]
            text-[#D17A8E]
            focus:placeholder-[#DD797D]
            focus:text-[#DD797D]
            rounded-[5px]
            border-0 border-b-2 border-transparent
            focus:shadow-md focus:shadow-[#DD797D]
            hover:shadow-md hover:shadow-[#D17A8E]
            focus:border-b-[#DD797D] focus:border-b-2
            hover:border-b-[#D17A8E] hover:border-b-2
            transition duration-300
          `}></input>
        <Button onclick={addTask}>Add Task</Button>
      </div>
      <ol>
          
      </ol>
    </div>
  );
}
