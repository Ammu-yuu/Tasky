import { useEffect, useState } from "react";
import { BsEmojiHeartEyesFill } from "react-icons/bs";

const MESSAGES = [
  "You got this, Pixel Princess! 👑",
  "One task at a time~ 🌸",
  "You're doing amazing! ✨",
  "Keep up the great work! 💪",
  "Small steps lead to big wins! 🏆",
  "Believe in yourself! 💖",
  "Today is your day! 🌟",
  "You're a productivity star! ⭐",
];

interface MotivationalBarProps {
  completedCount: number;
  totalCount: number;
}

export const MotivationalBar = ({
  completedCount,
  totalCount,
}: MotivationalBarProps) => {
  const [message, setMessage] = useState(MESSAGES[0]);

  useEffect(() => {
    const randomMessage =
      MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    setMessage(randomMessage);
  }, [completedCount]);

  const progress =
    totalCount > 0 ? Math.min(100, (completedCount / totalCount) * 100) : 0;

  return (
    <div className="mt-6 flex justify-center">
      <div className="w-full max-w-5xl rounded-xl bg-(--secondary) px-4 py-3">
        {/* Top row: message + count */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold text-(--textMain) tracking-wide">
            {message}
          </p>
          <p className="text-xs font-semibold text-(--textMain) tracking-wide">
            {completedCount}/{totalCount} done
          </p>
        </div>

        {/* Progress track */}
        <div className="h-4 bg-(--primary) border border-(--borderMain)">
          <div
            className="h-full bg-(--primaryLight) flex items-center justify-end transition-all duration-500"
            style={{ width: `${progress}%` }}
          >
            {progress > 5 && (
              <span className="text-[20px] mr-1">
                <BsEmojiHeartEyesFill className="text-(--textMain)" />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
