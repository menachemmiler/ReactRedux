import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

interface newTaskDTO {
  text: string;
}

//הגדרת איטרפייס למבנה של הסטייט
interface TodoState {
  tasks: {
    id: string;
    text: string;
    completed: boolean;
  }[];
}

//ההגדרה של הסטייט
const initialState: TodoState = {
  tasks: [
    {
      completed: false,
      id: "1",
      text: "defalte to do",
    },
  ],
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, actions: PayloadAction<newTaskDTO>) => {
      let newID: string = v4();
      state.tasks.push({
        completed: false,
        text: actions.payload.text,
        id: newID,
      });
    },
    setCompleted: (state, actions: PayloadAction<{ id: string }>) => {
      const toUpdate = state.tasks.find((t) => t.id == actions.payload.id);
      if (toUpdate) {
        toUpdate.completed = true;
      }
    },
    deleteTask: (state, actions: PayloadAction<{ id: string }>) => {
      const newTasks = state.tasks.filter((t) => t.id !== actions.payload.id);
      state.tasks = newTasks;
    },
  },
});

//ייצוא הפעולות של הסטייט
export const { addTask, setCompleted , deleteTask} = toDoSlice.actions;

// ייצוא ה-reducer לשימוש ב-store
export default toDoSlice.reducer;
