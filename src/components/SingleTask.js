import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { useParams } from "react-router-dom";
import { db } from "../database/firebase";
import { useHistory } from "react-router-dom";

export const SingleTask = () => {
  const [title, setTitle] = useState();
  const [completed, setCompleted] = useState();
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    db.collection("tasks")
      .doc(id)
      .get()
      .then((snapshot) => {
        const task = snapshot.data();
        setTitle(task.title);
        setCompleted(task.completed);
      });
  }, []);

  const submitHandler = () => {
    db.collection("tasks").doc(id).update({
      title: title,
    });
    history.push("/");
  };

  const deleteTask = () => {
    alert("Are you sure you want to delete this item?");
    db.collection("tasks").doc(id).delete();
    history.push("/");
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input type="submit" className="btn btn-primary mt-3" value="Edit" />
          <button className="btn btn-danger btn-danger-custom mt-3" onClick={deleteTask}>
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};
