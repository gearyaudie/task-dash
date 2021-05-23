import React, { useState } from "react";
import { db } from "../database/firebase";
import firebase from "firebase";

export const TaskForm = () => {
  const [newTask, setNewTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    db.collection("tasks")
      .add({
        title: newTask,
        completed: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        alert("Tasks Added");
      })
      .catch((e) => {
        alert(e.message);
      });

    setNewTask("");
  };

  return (
    <div className="container mt-5">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control"
          placeholder="Cooking with Joe"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input type="submit" className="btn btn-custom-add mt-3" value="Add" />
      </form>
    </div>
  );
};
