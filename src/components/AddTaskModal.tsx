import { useState } from "react";
import { CATEGORIES } from "../types/task";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (text: string, category: string) => void;
}

export default function AddTaskModal({
  isOpen,
  onClose,
  onAdd,
}: AddTaskModalProps) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("study");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim(), category);
    setText("");
    setCategory("study");
    onClose();
  };

  const selectableCategories = CATEGORIES.filter((c) => c.id !== "all");

  return (
    <div className="fixed inset-0 bg-(--overlay) flex items-center justify-center z-50 p-4">
      <div className="bg-(--primaryLight) rounded-2xl border-4 border-(--borderMain) p-6 w-full max-w-md shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-(--textMain) flex items-center gap-2">
            <span>✨</span> New Task
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-(--textMuted) hover:text-(--secondary) transition-colors text-lg leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Task input */}
          <div>
            <label className="block text-[15px] text-(--textMuted) mb-2">
              What do you need to do?
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your task..."
              className="w-full border border-(--borderMain) rounded-lg p-3 text-(--textMain) placeholder:text-(--primaryLight) focus:outline-none focus:ring-2 focus:ring-(--primaryLight)"
              autoFocus
            />
          </div>

          {/* Category selection */}
          <div>
            <label className="block text-[15px] text-(--textMuted) mb-2">
              Category
            </label>
            <div className="grid grid-cols-3 gap-2">
              {selectableCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={`p-3 text-center items-center border rounded-lg transition-all
                    ${
                      category === cat.id
                        ? "bg-(--primary) text-(--textMain) border-(--primary)"
                        : "bg-(--primaryLight) text-(--textMain) border-(--primaryLight) hover:bg-(--primaryLight)"
                    }`}
                >
                  <span className="text-2xl text-center">{cat.icon}</span>
                  <span className="text-[10px] mt-1">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={!text.trim()}
            className="w-full bg-(--secondary) text-(--textMain) rounded-lg py-3 text-xs font-semibold shadow disabled:cursor-not-allowed"
          >
            Add Task ✨
          </button>
        </form>
      </div>
    </div>
  );
}
