import type { Habit } from "../types/habit";

interface HabitItemProps {
  habit: Habit;
  onToggleComplete: (id: string) => void;
}

export default function HabitItem({ habit, onToggleComplete }: HabitItemProps) {
  const today = new Date().toISOString().split("T")[0];
  const isCompleted = habit.completedDates.includes(today);

  return (
    <li className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3">
      <span className="text-sm"> {habit.name}</span>
      <button 
      onClick={() => onToggleComplete(habit.id)}
      className={`rounded-lg px-3 py-1.5 text-sm font-medium ${
        isCompleted
          ? "bg-emerald-600 text-white"
          : "border border-gray-300 text-gray-800 hover:bg-gray-100"
      }`}
      >
        {isCompleted ? "Done" : "Mark Done"}
      </button>
    </li>
  );
}
