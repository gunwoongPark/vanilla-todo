const $ = document.querySelector.bind(document);

const renderInputTodoView = () => {
  return `
    <span class="input-container">
      <input class="todo-input"/>
      <button class="save-button">등록</button>
    </span> 
  `;
};

const renderTodoListView = (todoList) => {
  return `
    <ul class="todo-container">
      ${todoList.reduce(
        (html, todo) => `${html} <li class="todo">${todo.todo}</li>`,
        ``
      )}
    </ul>
  `;
};

const render = (todoList) => {
  const inputTodoView = renderInputTodoView();
  const todoListView = renderTodoListView(todoList);

  return `
    <div class="wrapper">
      <h1>TODO APP</h1>
      ${inputTodoView}
      ${todoListView}
    </div>
  `;
};

(() => {
  const todoList = [
    { id: 1, todo: "먹기" },
    { id: 2, todo: "자기" },
    { id: 3, todo: "싸기" },
  ];

  $("#app").innerHTML = render(todoList);
})();
