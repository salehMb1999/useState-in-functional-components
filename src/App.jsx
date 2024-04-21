import { useState } from "react";

export default function App() {
  const [counter, setCount] = useState(0);
  const [users, setUser] = useState([
    { id: 1, name: "saber", age: 24 },
    { id: 2, name: "saleh", age: 23 },
    { id: 3, name: "mona", age: 25 },
    { id: 4, name: "sadegh", age: 31 },
  ]);
  const increase = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  const decrease = () => {
    setCount((prevState) => {
      return prevState - 1;
    });
  };
  const removeUser = (userId) => {
    const newUsers = users.filter((user) => {
      return user.id !== userId;
    });
    setUser(newUsers);
  };
  return (
    <>
      <div>
        <button onClick={increase}>+</button>
        <h1>{counter}</h1>
        <button onClick={decrease}>-</button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}{" "}
            <button
              onClick={() => {
                removeUser(user.id);
              }}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
