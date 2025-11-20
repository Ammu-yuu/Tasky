// import "./App.css";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { TbHttpDelete } from "react-icons/tb";

import AddTaskModal from "../components/AddTaskModal";
import CongratsModal from "../components/CongratsModal";

export default function TaskMain() {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState<string[]>([
        "Task 1",
        "Task 2",
        "Task 3",
        "Task 4",
        "Task 5",
    ]);
    const [selectedItems, setSelectedItems] = useState<boolean[]>(
        new Array(5).fill(false)
    );
    const [showAddModal, setShowAddModal] = useState(false);
    const [newTask, setNewTask] = useState("");

    const [showCongrats, setShowCongrats] = useState(false);
    
    const toggleItem = (index: number) => {
        const updated = [...selectedItems];
    updated[index] = !updated[index];
    setSelectedItems(updated);

    // Show congrats popup if checked
    if (updated[index] === true) {
      setShowCongrats(true);
    }
    };

    const addTask = () => {
        if (newTask.trim() !== "") return;

        setTasks(prev => [...prev, newTask]);
        setSelectedItems(prev => [...prev, false]);
        setNewTask("");
        setShowAddModal(false);
    };
    const deleteTask = (index: number) => {
        setTasks(prev => prev.filter((_, i) => i !== index));
        setSelectedItems(prev => prev.filter((_, i) => i !== index));
    };

    return (
         <main>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button
                        onClick={() => navigate(-1)}
                        className="absolute top-4 left-4 bg-pink-300 hover:bg-pink-400 text-white text-sm font-bold py-2 px-4 rounded-full shadow transition"
                    >
                        &larr; Back
                    </button>


                {/* Main Task List */}
                <div className="mt-30 bg-gray-200 p-8 rounded-3xl w-full max-w-xl shadow-lg">   
                    
                    {tasks.map((task, index) => (
                        <div 
                            key={index} 
                            className="flex items-center bg-pink-300 rounded-full my-4 px-6 py-3 cursor-pointer select-none"
                        >
                            <input 
                            type="checkbox"
                            checked={selectedItems[index]}
                            onChange={() => toggleItem(index)}
                            className="accent-pink-300 w-7 h-7 mr-6 rounded-md border-none"
                            />
                            <span className="text-white text-xl font-medium">
                                {task}
                            </span>
                            <TbHttpDelete 
                                className="ml-auto text-white w-6 h-6 hover:text-gray-300 cursor-pointer"
                                onClick={() => deleteTask(index)}
                            />
                        </div>
                    ))}
                    </div>
                
            </div>

            {/* Add Task Button */}
            <div className="flex items-center justify-center">
                <button
                onClick={() => setShowAddModal(true)}
                >
                    Add Task 
                </button>
            </div>

            {showAddModal && (
        <AddTaskModal
          newTask={newTask}
          setNewTask={setNewTask}
          onClose={() => setShowAddModal(false)}
          onSubmit={addTask}
        />
      )}
      {showCongrats && (
        <CongratsModal onClose={() => setShowCongrats(false)} />
      )}
        </main>
    )
}