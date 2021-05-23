import React from "react";
import { Link } from "react-router-dom";
import { db } from "../database/firebase";

export const TaskItem = ({ id, completed, title }) => {
  const toggleCompletion = () => {
    db.collection("tasks").doc(id).update({
      completed: !completed,
    });
  };

  return (
    <div>
      <Link className="title-link-none" to={`/task/${id}`}>
        <p className={completed ? "card-completed task-title  m-3" : "card-title task-title m-3"}>
          {title}
        </p>

        {completed === true ? (
          <p className="m-3">Task is done</p>
        ) : (
          <p className="m-3">Task is on progress</p>
        )}
      </Link>
      <button onClick={toggleCompletion} className="btn-toggle-completion">
        {completed ? "On Progress" : "Done"}
      </button>
    </div>
  );
};
