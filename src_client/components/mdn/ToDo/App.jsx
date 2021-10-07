import React, { useState } from "react";
import { nanoid } from "nanoid";
import './ToDoApp.css';
import ToDo from './ToDo.jsx';
import Form from './Form.jsx';
import FilterButton from "./FilterButton.jsx";

const TO_DO_APP_TASK_DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
  { id: "todo-3", name: "Move", completed: false },
];

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

// todo application
// Add: What needs to be done?の下のインプットに入力しAddボタンを押すと
// taskが追加される
// filter:
// Edit: 編集用のフォームが現れ、入力するとtaskの項目が変更される。
// また、Cancelすることも可能
// Delete: ボタンを押すとtaskが消去される
export default function App(props) {
  const [tasks, setTasks] = useState(TO_DO_APP_TASK_DATA);
  const [filter, setFilter] = useState('All');

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  // checkbox要素の状態を、ブラウザと同期させる
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // taskを編集する要素を探す
  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return { ...task, name: newName }
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  // taskを削除する要素を探す
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
      <ToDo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    ));

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  // taskの長さを取得して、整形して文字列として表示する
  const taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${taskNoun} remaining`;

  // ToDoをtasksに追加する
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name: name, completed: false }
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}