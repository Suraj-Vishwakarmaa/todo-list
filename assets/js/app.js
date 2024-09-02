"use strict";

const todoInput = document.querySelector(".input");
const todoSubmit = document.querySelector(".submit");
let todoListUl = document.querySelector(".todo-list");
let todoContent = document.querySelector(".todo-content");

let editingItem = null; // Variable to store the item being edited

// Function to handle adding or editing a to-do item
function handleTodoAction() {
  let inputValue = todoInput.value;
  let todoError = document.createElement("p");

  if (inputValue) {
    todoError.textContent = "";

    if (editingItem) {
      // Update the existing item
      editingItem.querySelector("div").textContent = inputValue;
      editingItem = null; // Clear the editing reference
    } else {
      // Create a new list item
      let todoList = document.createElement("li");
      let todoListDiv = document.createElement("div");
      let todoListEdit = document.createElement("button");
      let todoListDelete = document.createElement("button");

      todoListEdit.classList.add("edit");
      todoListDelete.classList.add("delete");
      todoListDiv.textContent = inputValue;

      todoListEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-pen-line">
                                <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
                                <path
                                    d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                                <path d="M8 18h1" />`;

      todoListDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash">
                                <path d="M3 6h18" />
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />`;

      todoListUl.appendChild(todoList);
      todoList.appendChild(todoListDiv);
      todoList.appendChild(todoListEdit);
      todoList.appendChild(todoListDelete);

      todoListEdit.addEventListener("click", function () {
        todoInput.value = inputValue;
        editingItem = todoList; // Store the reference to the item being edited
      });

      todoListDelete.addEventListener("click", function () {
        todoList.remove();
        editingItem = null; // Clear the editing reference if deleted
      });
    }

    todoInput.value = ""; // Clear input field
  } else {
    todoContent.appendChild(todoError);
    todoError.textContent = "Please Enter Your Schedule";
  }
}

// Listen for click on submit button
todoSubmit.addEventListener("click", handleTodoAction);

// Listen for "Enter" key press
todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleTodoAction();
  }
});
