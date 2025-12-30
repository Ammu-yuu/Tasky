import { CATEGORIES } from '../types/task';
import keep from '../assets/keep.png';

interface CategorySidebarProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  taskCounts: Record<string, number>;
}

export const CategorySidebar = ({
  selectedCategory,
  onSelectCategory,
  taskCounts,
}: CategorySidebarProps) => {
  return (
    <aside className="w-48 bg-(--secondary) rounded-lg border-4 border-(--secondary) p-4 flex flex-col gap-3">
      <h1 className="text-xl text-(--textMain) mb-2 text-center font-semibold">
        Categories
      </h1>

      <div className="flex flex-col gap-2">
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category.id;
          const count = taskCounts[category.id] || 0;

          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`flex items-center gap-2 px-3 py-3 text-[10px] transition-all border border-(--borderMain)
                ${
                  isSelected
                    ? 'bg-(--primary) text-(--textMain) translate-x-1'
                    : 'bg-(--primaryLight) text-(--textMain) hover:bg-(--primary) hover:translate-x-1'
                }`}
            >
              <span className={`text-2xl text-${category.color}`}>{category.icon}</span>
              <span className="flex-1 text-left">{category.name}</span>
              <span className="bg-(--primaryLight) px-2 py-1 text-black rounded-sm">
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-auto pt-4">
        <div className="bg-(--primary) rounded-xl shadow-2xl p-3 text-center">
            <img src={keep} className="inline-block w-25 h-25"/>
          <p className="text-[15px] text-() mt-2 font-semibold">
            Keep going!
          </p>
        </div>
      </div>
    </aside>
  );
};
