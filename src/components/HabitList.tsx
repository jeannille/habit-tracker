import type{ Habit } from "../types/habit";
import HabitItem from "./HabitItem";

interface HabitListProps {
    habits: Habit[];
    onToggleComplete: (id: string) => void

}

export default function HabitList({habits, onToggleComplete} : HabitListProps){
    if (habits.length === 0) {
        return(
            <p className="text-sm text-gray-600">
            No habitts added yet - add one above.
            </p>
        )
    }

    return(
        <ul className="mt-4 grid gap-2">
            {
                habits.map( (habit) => 
                    <HabitItem key={habit.id}
                    habit = {habit}
                    onToggleComplete = {onToggleComplete}
                    />
            )}
        </ul>
    )
}