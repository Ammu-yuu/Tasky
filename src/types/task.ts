import React from "react";
import { BsListStars } from "react-icons/bs";
import { GiBookshelf } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { MdSelfImprovement } from "react-icons/md";
import { GiPrayerBeads } from "react-icons/gi";
import { GiPalette } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { GiMedicinePills } from "react-icons/gi";

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
    icon: React.ReactNode;
    color: string;
};
export const CATEGORIES: Category[]=[
     { id: 'all', name: 'All', icon: React.createElement(BsListStars), color: 'var(--primaryLight)' },
    { id: 'study', name: 'Study', icon: React.createElement(GiBookshelf), color: 'var(--primaryLight)' },
    { id: 'workout', name: 'Workout', icon: React.createElement(CgGym), color: 'var(--primaryLight)' },
    { id: 'self-care', name: 'Self Care', icon: React.createElement(MdSelfImprovement), color: 'var(--primaryLight)' },
    { id: 'spiritual', name: 'Spiritual', icon: React.createElement(GiPrayerBeads), color: 'var(--primaryLight)' },
    { id: 'paint', name: 'Paint', icon: React.createElement(GiPalette), color: 'var(--primaryLight)' },
    { id: 'food', name: 'Food', icon: React.createElement(FaBowlFood), color: 'var(--primaryLight)' },
    { id: 'health', name: 'Health', icon: React.createElement(GiMedicinePills), color: 'var(--primaryLight)' },
];