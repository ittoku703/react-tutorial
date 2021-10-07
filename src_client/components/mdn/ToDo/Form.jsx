import React, { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState('');

  // input:textの動作
  function handleChange(e) {
    setName(e.target.value);
  }

  // form:submitの操作
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        name="text"
        id="new-todo-input"
        className="input input__lg"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}