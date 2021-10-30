import React, { useEffect, useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState();
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタン
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 完了ボタン
  const onClickComplete = (index) => {
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 戻すボタン
  const onClickUndo = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTODOは5個までです。</p>
      )}

      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos completeTodos={completeTodos} onClickUndo={onClickUndo} />
    </>
  );
};
