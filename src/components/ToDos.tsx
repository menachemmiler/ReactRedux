import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { addTask, setCompleted } from "../redux/toDosSlice";
import { useRef } from "react";

const ToDos = () => {
  const tasks = useSelector((state: RootState) => state.todo.tasks);
  const toDoRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch(); //מחלקה שמאפשרת לבצע שינויים בסטייט

  const newToDO = () => {
    let theToDo = toDoRef.current?.value;
    if (!theToDo) {
      return;
    }
    dispatch(addTask({ text: theToDo }));
    toDoRef.current!.value = "";
  };

  // console.log({ tasks });
  return (
    <div className="todos">
      <input
        type="text"
        ref={toDoRef}
        placeholder="insert new to do description"
      />
      <button onClick={newToDO}>add task</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id} className={`${t.completed}`}>
            {t.text}
            <button
              onClick={() => {
                dispatch(setCompleted({ id: t.id }));
              }}
            >
              completed
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDos;
