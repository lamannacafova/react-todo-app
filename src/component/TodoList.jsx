import React, { useState } from 'react'
import {  FaEdit } from 'react-icons/fa'
import {  FaTrashCan } from 'react-icons/fa6'

const TodoList = () => {
    const [value, setValue] = useState("")
    const [todo, setTodo] = useState([])
    const [editIndex, setEditIndex] = useState(-1)
    const handleChange = (e) => {
        setValue(e.target.value)
    };

    const show = () => {
        if (value !== "") {
            if (editIndex === -1) {
                setTodo([...todo, value])
            } else {
                const updatedTodo = [...todo]
                updatedTodo[editIndex] = value
                setTodo(updatedTodo)
                setEditIndex(-1)
            }
            setValue("")
        }
    }

    const editedTodo = (index) => {
        setValue(todo[index])
        setEditIndex(index)
    }

    const deleteTodo = (id) => {
        const filteredTodo = todo.filter((item) => item !== id)
        setTodo(filteredTodo)
    }

    const clearItem = () => {
        setTodo([])
    }

    return (
        <div className="h-[90vh] flex items-center justify-center">
            <div className="w-[390px] py-[40px] bg-white rounded-[7px] px-[20px]">
                <div>
                    <h2 className="text-[24px] font-bold">Todo App</h2>
                    <div className="w-full h-full flex items-center justify-between mt-[20px]">
                        <input
                            type="text"
                            className="w-[230px] h-[35px] border-2 border-[#ecdcdc] rounded-[4px] px-[20px]"
                            value={value}
                            onChange={handleChange}
                        />
                        <button
                            className="w-[100px] h-[35px] bg-[#970897] rounded-[6px] text-white font-bold uppercase"
                            onClick={show}
                        >
                            Add
                        </button>
                    </div>
                </div>
                <div>
                    <ul className="my-[30px]">
                        {todo.map((item, index) => (
                            <li
                                className="flex items-center justify-between mt-[20px] text-[19px] font-semibold text-[#333]"
                                key={index}
                            >
                                {item}
                                <span className="flex">
                                    <FaEdit
                                        className="text-[18px]"
                                        onClick={() => editedTodo(index)}
                                    />
                                    <FaTrashCan
                                        className="text-[18px] ml-[10px]"
                                        onClick={() => deleteTodo(item)}
                                    />
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center justify-between mt-[35px]">
                    <p>You have {todo.length} pending tasks</p>
                    <button
                        className="w-[100px] h-[35px] bg-[#970897] rounded-[6px] text-white font-bold"
                        onClick={clearItem}
                    >
                        Clear All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoList
