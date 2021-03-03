import React from "react";

export const TaskRow = (props) => (
  <tr key={props.item.name}>
    <td> {props.item.name}</td>
    <td>
      {" "}
      <input
        type="checkbox"
        checked={props.item.done}
        onChange={() => props.toogleTask(props.item)}
      />
    </td>
  </tr>
);
