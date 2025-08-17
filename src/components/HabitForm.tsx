import { useState } from "react";
import type { Habit } from "../types/habit";


interface HabitFormProps {
    onAddHabit : (habit : Habit) => void;
}

export default function HabitForm ({onAddHabit} : HabitFormProps){

const [ habitName, setHabitName] = useState("")

const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    if(!habitName.trim()) return;

    const newHabit = {
        id: crypto.randomUUID(),
        name: habitName.trim(),
        completedDates: [],
    }

    onAddHabit(newHabit);
    setHabitName(""); 
};

return(
    <form onSubmit={handleSubmit} className="flex gap-2">
        <input 
        type = "text"
        value = {habitName}
        onChange = { (e) => setHabitName(e.target.value)}
        placeholder="Enter habit name"
        className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-900"
        />
        <button
        type = "submit"
        className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
      >
        Add Habit
      </button>
    </form>
)

}
