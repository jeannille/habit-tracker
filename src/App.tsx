import { useEffect, useState } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import type { Habit } from "./types/habit";

const STORAGE_KEY = "habits";

export default function App() {
  const [habits, setHabits] = useState<Habit[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? (JSON.parse(saved) as Habit[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit: Habit) => setHabits((prev) => [...prev, habit]);

  const toggleComplete = (id: string) => {
    const today = new Date().toISOString().split("T")[0];
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id
          ? {
              ...h,
              completedDates: h.completedDates.includes(today)
                ? h.completedDates.filter((d) => d !== today)
                : [...h.completedDates, today],
            }
          : h
      )
    );
  };

  return (
    <main className="mx-auto my-10 w-full max-w-2xl space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
      <h1 className="text-2xl font-semibold tracking-tight">Habit Tracker</h1>
      <HabitForm onAddHabit={addHabit} />
      <HabitList habits={habits} onToggleComplete={toggleComplete} />
    </main>
  );
}
