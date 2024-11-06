import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setNamePassword } from "../redux/userSlice";

const User = () => {
  //   useSelector מאפשר לנו לקרוא מה-state
  const user = useSelector((state: RootState) => state.user);
  const { name, password } = user;
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const updateUser = () => {
    if (!nameRef.current?.value || !passwordRef.current?.value) {
      return;
    }
    dispatch(
      setNamePassword({
        name: nameRef.current.value,
        password: Number(passwordRef.current.value),
      })
    );
  };

  return (
    <div className="user">
      <h1>
        {name} {password}
      </h1>
      <input type="text" ref={nameRef} placeholder="insert your name" />
      <input
        type="number"
        placeholder="insert your password"
        ref={passwordRef}
      />
      <button onClick={updateUser}>set user</button>
    </div>
  );
};

export default User;
