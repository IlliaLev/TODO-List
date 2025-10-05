"use client"

import {useState} from 'react';

import Button from "./CButton";
import Divider from "./CDivider";

export default function Home() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  const addTask = () => {
    if(newItem.trim() === "") return;
    setItems([...items, newItem]);
    setNewItem("");
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
            px-[5px]
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
          `}
          onChange={e => setNewItem(e.target.value)}
          value={newItem}></input>
        <Button onclick={addTask}>Add Task</Button>
      </div>
      <Divider></Divider>
      <div className={`
        w-[93%] h-[70%] max-h-[70%]
        mt-[7px] mb-[7px]
        `}>
        <ol className={`
          w-full max-h-full overflow-y-auto list-decimal
          `}>
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
        </ol>
      </div>
      <Divider></Divider>
    </div>
  );
}
