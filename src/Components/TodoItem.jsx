import {
    CheckOutlined,
    CloseOutlined,
    DeleteOutlined,
    EditOutlined,
    SaveOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Tooltip } from "antd";

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            editTodo(todo.id, newText);
        }
    };

    //FROM from-[#10AF8F] to-[#188657]

    return (
        <div

            className="bg-white p-4 rounded-xl mb-6 flex bg-gradient-to-br from-[#41ffd9] to-[#097044]"
        >
            <div className=" flex-1 text-left mr-6">

                {isEditing ? (
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className='bg-transparent focus:outline-none focus:border-transparent w-full mr-4 text-gray-800  text-[20px] font-medium focus:border-b focus:border-black border-b border-black'
                    />
                ) : (
                    <span className={`text-gray-800 text-[20px] font-medium line-t ${todo.completed ? "line-through" : ""}`}>{todo.text}</span>
                )}

            </div>
            <div className="flex gap-4">


                {!isEditing && <>

                    <button onClick={() => toggleComplete(todo.id)}>
                        {todo.completed ? (
                            <Tooltip placement="top" title={"Un Mark"}>
                                <CloseOutlined />
                            </Tooltip>
                        ) : (
                            <Tooltip placement="top" title={"Complete"}>
                                <CheckOutlined />
                            </Tooltip>
                        )}
                    </button>
                    <button onClick={() => deleteTodo(todo.id)}>
                        <Tooltip placement="top" title={"Delete"}>
                            <DeleteOutlined />
                        </Tooltip>
                    </button>
                </>
                }


                <button onClick={handleEdit}>
                    {isEditing ? (
                        <Tooltip placement="top" title={"Save"}>
                            <SaveOutlined />
                        </Tooltip>
                    ) : (
                        <Tooltip placement="top" title={"Edit"}>
                            <EditOutlined />
                        </Tooltip>
                    )}
                </button>
            </div>
        </div>
    );
}

export default ToDoItem;
