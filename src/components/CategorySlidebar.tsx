import { CATEGORIES } from '../types/task';

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
    <aside className="w-48 bg-sidebar p-4 pixel-border flex flex-col gap-3">
      <h2 className="text-xs text-sidebar-foreground mb-2 text-center">
        Categories
      </h2>
      <div className="flex flex-col gap-2">
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category.id;
          const count = taskCounts[category.id] || 0;

          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`
                flex items-center gap-2 px-3 py-3 text-[10px] transition-all
                pixel-border-light
                ${
                  isSelected
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground translate-x-1'
                    : 'bg-sidebar-accent text-sidebar-accent-foreground hover:translate-x-1'
                }
              `}
            >
              <span className="text-base">{category.icon}</span>
              <span className="flex-1 text-left">{category.name}</span>
              <span className="bg-background/30 px-2 py-0.5 text-[8px]">
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-auto pt-4">
        <div className="pixel-border-light bg-sidebar-accent p-3 text-center">
          <span className="text-xl animate-float inline-block">🌟</span>
          <p className="text-[8px] text-sidebar-foreground mt-2">
            Keep going!
          </p>
        </div>
      </div>
    </aside>
  );
};