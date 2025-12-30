interface CongratsModalProps {
  onClose: () => void;
}

export default function CongratsModal({ onClose }: CongratsModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[999]">
      <div className="bg-white rounded-2xl p-8 w-80 shadow-xl text-center">
        <h2 className="text-2xl font-bold mb-3 text-black">🎉 Congratulations!</h2>
        <p className="text-gray-700 mb-6">
          You have completed a task.
        </p>

        <button
          onClick={onClose}
          className="px-5 py-2 bg-pink-400 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
