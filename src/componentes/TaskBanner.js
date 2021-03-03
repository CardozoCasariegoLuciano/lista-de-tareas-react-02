import React from "react";

export const TaskBanner = (props) => (
  <h4 className="bg-primary text-center text-white p-4">
    Aplicacion de tareas de {props.userName} (
    {props.taskItem.filter(el => !el.done).length} Tareas por hacer)
  </h4>
);
