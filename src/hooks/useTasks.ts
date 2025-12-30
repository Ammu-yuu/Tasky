import { useState, useEffect } from 'react';
import { Task } from '../types/task';

const STORAGE_KEY = 'pixel-tasks';
const getInitialTasks = (): Task[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored){
        const parsed = JSON.parse(stored);
        return parsed.map((item: any) => ({
            ...item,
            createdAt: new Date(item.createdAt),
        }));
    }
    return [
        { id: '1', text: 'Finish homework assignment', category: 'study', completed: false, createdAt: new Date() },
        { id: '2', text: 'Draw some cool pixels', category: 'creative', completed: false, createdAt: new Date() },
        { id: '3', text: 'Water the plants', category: 'home', completed: true, createdAt: new Date() },
        { id: '4', text: 'Play a fun game', category: 'creative', completed: false, createdAt: new Date() },
        { id: '5', text: 'Feed the cat', category: 'pets', completed: true, createdAt: new Date() },
        { id: '6', text: 'Go for a walk', category: 'health', completed: false, createdAt: new Date() },
    ];
};
export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>(getInitialTasks);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (text: string, category: string) => {
        const newTask: Task = {
            id: Date.now().toString(),
            text,
            category,
            completed: false,
            createdAt: new Date(),
        };
        setTasks(prev => [...prev, newTask]);
    };
    const toggleTask = (id: string) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };
    const deleteTask = (id: string) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };
    const saveProgress = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    };
    const filteredTasks = selectedCategory === 'all'
        ? tasks
        : tasks.filter(task => task.category === selectedCategory);
    const completedCount = tasks.filter(task => task.completed).length;
    const totalCount = tasks.length;

    return {
        tasks: filteredTasks,
        allTasks: tasks,
        selectedCategory,
        setSelectedCategory,
        addTask,
        toggleTask,
        deleteTask,
        saveProgress,
        completedCount,
        totalCount,
    };
}