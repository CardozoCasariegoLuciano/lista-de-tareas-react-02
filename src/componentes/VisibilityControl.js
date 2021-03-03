import React from "react";

const VisibilityControl = (props) => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        checked={props.isChecked}
        onChange={e => props.callback(e.target.checked)}
        id="from-check-label"
      />
      <label htmlFor="from-check-label">
          Mostrar {props.description}
      </label>
    </div>
  );
};

export default VisibilityControl;
