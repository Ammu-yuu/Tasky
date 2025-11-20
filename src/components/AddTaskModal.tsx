interface AddTaskModalProps {
  newTask: string;
  setNewTask: (val: string) => void;
  onClose: () => void;
  onSubmit: () => void;
}

export default function AddTaskModal({
  newTask,
  setNewTask,
  onClose,
  onSubmit,
}: AddTaskModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[999]">
      {/* Modal box */}
      <div className="bg-white rounded-2xl p-6 w-80 shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-black">Add New Task</h2>

        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
          className="w-full p-2 border rounded-lg text-black mb-4"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-pink-400 text-white rounded-lg"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
