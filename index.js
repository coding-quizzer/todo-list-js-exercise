/* // Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];
 */// Create a new task by adding to the arrays
// A new task will be created as incomplete

/* // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
}
 */

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
  };

  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the \u{1F4A9} out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "\u{1F628}");
const tasks = [task1, task2];

console.log(tasks);

/* logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
 */
