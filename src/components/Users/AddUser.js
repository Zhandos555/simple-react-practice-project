import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredUserAge, setenteredUserAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }

    if (+enteredUserAge < 1) {
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setenteredUserName("");
    setenteredUserAge("");
  };

  const userNameChangeHandler = (event) => {
    setenteredUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setenteredUserAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={userNameChangeHandler}
        />
        <label htmlFor="username">Age (Years)</label>
        <input
          id="username"
          type="number"
          value={enteredUserAge}
          onChange={userAgeChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
