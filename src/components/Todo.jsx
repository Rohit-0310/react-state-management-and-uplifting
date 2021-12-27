import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
    const [list, setList] = useState([]);

    const handleClick = (data) => {
        //data
        console.log("Data in Parents", data)
        setList([...list, data])
    };
    return (
        <>
            <TodoInput 
            getData={handleClick} />
                {list.map((e) => (
                    <TodoItem title={e} />
                
            ))}
        </>
    );
}