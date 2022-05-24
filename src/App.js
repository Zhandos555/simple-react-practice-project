import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setusersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setusersList((prevUserList) => {
      return [...prevUserList, { name: userName, age: userAge, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
