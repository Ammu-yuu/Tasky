import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbHttpDelete } from "react-icons/tb";
import { SiGoogletasks } from "react-icons/si";
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

  const handleAddFromModal = (text: string, category: string) => {
    addTask(text, category);
    // no need to manage local text here; modal takes care of it
  };

  return (
    <main className="min-h-screen flex flex-col items-center py-10">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-(--primaryLight) hover:bg-(--primary) text-white text-sm font-bold py-2 px-4 rounded-full shadow transition"
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
          <div className="rounded-xl bg-(--primaryLight) px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-(--textMain) flex items-center gap-2">
                <SiGoogletasks className="text-2xl" /> {" "}
                {selectedCategory === "all"
                  ? "All Tasks"
                  : CATEGORIES.find((c) => c.id === selectedCategory)?.name ??
                    "Tasks"}
              </h2>
              <p className="text-xs font-semibold text-(--textMain)">
                {allTasks.length} quests
              </p>
            </div>

            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center bg-(--secondary) rounded-2xl border-2 border-(--borderMain) px-4 py-3"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggle(task.id)}
                    className="accent-(--primary) w-5 h-5 mr-4 rounded-xl border-none"
                  />
                  <span
                    className={`text-sm font-medium text-(--textMain) ${
                      task.completed ? "line-through opacity-60" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                  <TbHttpDelete
                    className="ml-auto text-(--textSecondary) w-4 h-4 hover:text-(--textMain) cursor-pointer"
                    onClick={() => deleteTask(task.id)}
                  />
                </div>
              ))}

              {tasks.length === 0 && (
                <p className="text-xs text-(--textSecondary)">
                  No tasks in this category yet. Add one below!
                </p>
              )}
            </div>
          </div>

          <div className="mt-3 flex gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="flex-1 border-4 border-(--primaryLight) bg-(--primary) py-3 text-sm font-bold text-(--textMain) shadow-sm"
            >
              ＋ Add New Task
            </button>
            <button className="flex-1 border-4 border-(--primaryLight) bg-(--primary) py-3 text-sm font-bold text-(--textMain) shadow-sm">
              💾 Save Progress
            </button>
          </div>

          <MotivationalBar
            completedCount={completedCount}
            totalCount={totalCount}
          />
        </section>
      </div>

      {/* Add Task Modal (new props shape) */}
      <AddTaskModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddFromModal}
      />

      {showCongrats && (
        <CongratsModal onClose={() => setShowCongrats(false)} />
      )}
    </main>
  );
}
