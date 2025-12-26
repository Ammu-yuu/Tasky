export interface Task{
    id: string;
    text: string;
    category: string;
    completed: boolean;
    createdAt: Date;
}
export type Category = {
    id: string;
    name: string;
    icon: string;
    color: string;
};
export const CATEGORIES: Category[]=[
     { id: 'all', name: 'All', icon: '⭐', color: 'pixel-yellow' },
    { id: 'study', name: 'Study', icon: '📚', color: 'pixel-mint' },
    { id: 'workout', name: 'Workout', icon: '💪', color: 'pixel-lavender' },
    { id: 'self-care', name: 'Self Care', icon: '🧘', color: 'pixel-green' },
    { id: 'spiritual', name: 'Spiritual', icon: '✨', color: 'pixel-yellow' },
    { id: 'paint', name: 'Paint', icon: '🎨', color: 'pixel-yellow' },
    { id: 'food', name: 'Food', icon: '🍱', color: 'pixel-yellow' },
    { id: 'health', name: 'Health', icon: '💊', color: 'pixel-yellow' },
];