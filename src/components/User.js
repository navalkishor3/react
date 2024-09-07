import { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  const { name, location } = props;

  const updateCounter = () => {
    setCount(count + 1);
  };
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2> Name: {name}</h2>
      <h3> Location: {location} </h3>
      <h4> Contact: 9999</h4>
      <button onClick={updateCounter}>Update Counter</button>
    </div>
  );
};

export default User;
