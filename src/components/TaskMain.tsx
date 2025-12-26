import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbHttpDelete } from "react-icons/tb";

import { CategorySidebar } from "./CategorySlidebar";
import { CATEGORIES } from "../types/task";
import AddTaskModal from "../components/AddTaskModal";
import CongratsModal from "../components/CongratsModal";
import { MotivationalBar } from "../components/motivationalBar";
import { useTasks } from "../hooks/useTasks";

export default function TaskMain() {
  const navigate = useNavigate();

  const {
    tasks,
    allTasks,
    selectedCategory,
    setSelectedCategory,
    addTask,
    toggleTask,
    deleteTask,
    completedCount,
    totalCount,
  } = useTasks();

  const [showAddModal, setShowAddModal] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [showCongrats, setShowCongrats] = useState(false);

  const taskCounts: Record<string, number> = { all: allTasks.length };
  CATEGORIES.forEach((cat) => {
    if (cat.id !== "all") {
      taskCounts[cat.id] = allTasks.filter((t) => t.category === cat.id).length;
    }
  });

  const handleToggle = (id: string) => {
    toggleTask(id);

    const allDone =
      allTasks.length > 0 &&
      allTasks.every((task) =>
        task.id === id ? !task.completed : task.completed
      );

    if (allDone) setShowCongrats(true);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    const category =
      selectedCategory === "all" ? "study" : selectedCategory; // temp default
    addTask(newTask, category);
    setNewTask("");
    setShowAddModal(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center py-10">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-pink-300 hover:bg-pink-400 text-white text-sm font-bold py-2 px-4 rounded-full shadow transition"
      >
        &larr; Back
      </button>

      <div className="w-full max-w-5xl flex gap-6">
        {/* Sidebar */}
        <CategorySidebar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          taskCounts={taskCounts}
        />

        {/* Tasks + buttons + progress */}
        <section className="flex-1 flex flex-col">
          <div className="border-4 border-[#4b2f5a] bg-[#fff7ea] px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#4b2f5a]">
                📝{" "}
                {selectedCategory === "all"
                  ? "All Tasks"
                  : CATEGORIES.find((c) => c.id === selectedCategory)?.name ??
                    "Tasks"}
              </h2>
              <p className="text-xs font-semibold text-[#4b2f5a]">
                {allTasks.length} quests
              </p>
            </div>

            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center bg-[#fdf6e9] border border-[#e1d5c2] px-4 py-3"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggle(task.id)}
                    className="accent-pink-300 w-5 h-5 mr-4 rounded-sm border-none"
                  />
                  <span
                    className={`text-sm font-medium text-[#4b2f5a] ${
                      task.completed ? "line-through opacity-60" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                  <TbHttpDelete
                    className="ml-auto text-[#b48b9e] w-4 h-4 hover:text-[#4b2f5a] cursor-pointer"
                    onClick={() => deleteTask(task.id)}
                  />
                </div>
              ))}

              {tasks.length === 0 && (
                <p className="text-xs text-[#8c6f80]">
                  No tasks in this category yet. Add one below!
                </p>
              )}
            </div>
          </div>

          <div className="mt-3 flex gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="flex-1 border-4 border-[#4b2f5a] bg-[#9ee7dc] py-3 text-sm font-bold text-[#4b2f5a] shadow-sm"
            >
              ＋ Add New Task
            </button>
            <button className="flex-1 border-4 border-[#4b2f5a] bg-[#f78fb8] py-3 text-sm font-bold text-[#4b2f5a] shadow-sm">
              💾 Save Progress
            </button>
          </div>

          <MotivationalBar
            completedCount={completedCount}
            totalCount={totalCount}
          />
        </section>
      </div>

      {showAddModal && (
        <AddTaskModal
          newTask={newTask}
          setNewTask={setNewTask}
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddTask}
        />
      )}

      {showCongrats && (
        <CongratsModal onClose={() => setShowCongrats(false)} />
      )}
    </main>
  );
}
