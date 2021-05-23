import React from "react";
import { Navbar } from "./Navbar";
import { TaskForm } from "./TaskForm";
import { TasksList } from "./TasksList";

export const DashboardHome = () => {
  return (
    <div>
      <Navbar />
      <TaskForm />
      <TasksList />
    </div>
  );
};
