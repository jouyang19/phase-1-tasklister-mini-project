document.addEventListener("DOMContentLoaded", () => {
  /**
   * TaskLister Lab
   * by Sakib Rasul
   *
   * USER STORIES:
   * The user should be able to...
   * 1. ... specify a new task's description [bonus: and priority] in <form>
   * 2. ... on submit, add that new task based on priority.
   * 3. [bonus] add color to indicate priority
   * 4. [bonus] ability to delete tasks
   * 5. [bonus] empty text box after adding task and do not add tasks if text box is empty
   */

  // your code here
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    // Prevent the clicking of the submit button to a non-existent remote server
    event.preventDefault();

    //Assign value of new task description to the constant newTask
    const newTask = event.target["new-task-description"].value;

    // Check if the value is empty (no characters)
    if (newTask.trim() === "") {
      return; //Exit the function if empty
    }

    // If the value is not empty, create new list item and assign new task description to new list item.
    const newLi = document.createElement("li");
    newLi.textContent = newTask;

    // Add the new list item and create new button
    document.querySelector("#tasks").append(newLi);
    const delButton = document.createElement("button");
    delButton.style.margin = "10px";

    // Add X to button to let users know it is a delete button.
    delButton.textContent = "X";

    // Add click event listener to the button
    delButton.addEventListener("click", (event) => {
      newLi.remove();
    });

    // Append a delete button to the task list item.
    newLi.appendChild(delButton);

    // [Bonus] Set the task's priority.
    const priority = form.priority.value;
    if (priority === "Low") newLi.style.color = "black";
    if (priority === "Medium") newLi.style.color = "purple";
    if (priority === "High") newLi.style.color = "red";

    // Clear the text box after successful creation
    event.target["new-task-description"].value = "";
    event.target["priority"].value = document.querySelector("Low");
  });
});
