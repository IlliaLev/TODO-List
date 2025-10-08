"use client"

import {useState, useEffect} from 'react';

import Button from "./CButton";
import Divider from "./CDivider";
import Item from './Item';

type Todo = {
  id: number,
  text: string,
  completed: boolean,
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if(saved) {
      setTodos(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {
    if(text.trim() === "") return;
    const newTodo: Todo = {id: Date.now(), text: text, completed: false};
    setTodos([...todos, newTodo]);
    setText("");
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => (
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      ))
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
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
          onChange={e => setText(e.target.value)}
          value={text}></input>
        <Button onclick={addTask}>Add Task</Button>
      </div>
      <Divider></Divider>
      <div className={`
        w-[93%] h-[70%] max-h-[70%]
        mt-[7px] mb-[7px]
        `}>
        <ol className={`
          w-full max-h-full overflow-y-scroll list-decimal no-scrollbar
          `}>
            {todos.map(todo => (
              <li key={todo.id}><Item title={todo.text} completed={todo.completed} onToggle={() => toggleTodo(todo.id)} onDelete={() => deleteTodo(todo.id)}></Item></li>
            ))}
        </ol>
      </div>
      <Divider></Divider>
    </div>
  );
}
