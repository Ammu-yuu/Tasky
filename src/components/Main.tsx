import {useState} from 'react';
import { useNavigate } from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();
    const items = [
        "Task 1",
        "Task 2",
        "Task 3",
        "Task 4",
        "Task 5",
    ];
    const [selectedItems, setSelectedItems] = useState([false, false, false, false, false]);
    
    const toggleItem = (index: number) => {
        setSelectedItems(prevState =>  
            prevState.map((item, i) => i === index ? !item : item)
        );
    };

    return (
         <main>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="bg-gray-200 p-8 rounded-3xl w-full max-w-xl shadow-lg">   
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-4 left-4 bg-pink-300 hover:bg-pink-400 text-white text-sm font-bold py-2 px-4 rounded-full shadow transition"
                    >
                        &larr; Back
                    </button>
                    <div className="mt-[30px]"> 
                    {items.map((item, index) => (
                        <div 
                            key={item} 
                            className="flex items-center bg-pink-300 rounded-full my-4 px-6 py-3 cursor-pointer select-none"
                        >
                            <input 
                            type="checkbox"
                            checked={selectedItems[index]}
                            onChange={() => toggleItem(index)}
                            className="accent-pink-300 w-7 h-7 mr-6 rounded-md border-none"
                            />
                            <span className="text-white text-xl font-medium">
                                {item}
                            </span>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </main>
    )
}