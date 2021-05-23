import React, { useState, useEffect } from "react";
import { db } from "../database/firebase";
import { TaskItem } from "./TaskItem";

export const TasksList = () => {
  const [tasks, setTasks] = useState();
  const [titleSearch, setTitleSearch] = useState();

  useEffect(() => {
    db.collection("tasks")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTasks(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            completed: doc.data().completed,
          }))
        );
      });
  }, []);

  const searchTask = async (e) => {
    e.preventDefault();

    let query = db.collection("tasks").where("title", "==", titleSearch);
    let querySnapshot = await query.get();
    if (querySnapshot.size > 0) {
      const title = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        title.push(data);
      });
      setTasks(title);
    } else {
      db.collection("tasks")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setTasks(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              title: doc.data().title,
              completed: doc.data().completed,
            }))
          );
        });
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={searchTask}>
        <input
          type="search"
          class="custom-search form-control mr-sm-2"
          placeholder="Search"
          onChange={(e) => setTitleSearch(e.target.value)}
          value={titleSearch}
        />
      </form>

      {tasks ? (
        tasks.map((task, id) => {
          return (
            <div key={id} className="card mt-5">
              <TaskItem title={task.title} id={task.id} completed={task.completed} />
            </div>
          );
        })
      ) : (
        <h5 className="no-task">No tasks to display</h5>
      )}
    </div>
  );
};
