function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE CHANGES BELOW

const task1 = newTask("buy food", "to make dinner");
const task2 = newTask("Do Laundry", "you have no clothing left");
const task3 = newTask("disposable camera", "I wanna see the photos I took");
const tasks = [task1, task2, task3];

task1.logState();
task1.markCompleted();
task1.logState();
task2.logState();
task2.markCompleted();
task2.logState();
task3.logState();


