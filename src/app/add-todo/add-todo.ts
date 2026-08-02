import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo implements OnInit {

  task:string= ''
  nextId: number = 1;
  tasks:{
    id: number;
    name: string,
    completed: boolean,
    edit: boolean
  }[]=[]
ngOnInit() {
  this.loadFromLocalStorage();
}
addTask() {
  const newTask = this.task.trim();

  if (newTask !== "") {

    const existingTask = this.tasks.find(
      task => task.name === newTask
    );

    if (existingTask) {
      alert("Task already exists!");
      return;
    }

    this.tasks.push({
      id: this.nextId,
      name: newTask,
      completed: false,
      edit: false
    });

    this.nextId++;
    this.task = "";
    this.saveToLocalStorage();
  }
}
saveToLocalStorage(){
  localStorage.setItem("tasks", JSON.stringify(this.tasks));
}
loadFromLocalStorage() {
  const data=localStorage.getItem("tasks")
    if (data) {
      this.tasks=JSON.parse(data)
      if (this.tasks.length > 0) {
        const lastId = this.tasks[this.tasks.length - 1].id;
        this.nextId = lastId + 1;
    }
  }
}
deleteTask(id: number) {
  const index = this.tasks.findIndex(task => task.id === id);

  if (index !== -1) {
    this.tasks.splice(index, 1);
    this.saveToLocalStorage();
  }
}
completeTask(id: number) {
  const task = this.tasks.find(task => task.id === id);

  if (task) {
    task.completed = true;
    this.saveToLocalStorage();
  }
}
getTotalTasks() {
  return this.tasks.length
}
getCompletedTasks(){
  let completed_count: number = 0;
  for (let task of this.tasks){
    if (task.completed)
      completed_count++
  }
  return completed_count
}
getPendingTasks(){
  return this.getTotalTasks()-this.getCompletedTasks()
}
editTask(id: number) {
  const task = this.tasks.find(task => task.id === id);

  if (task) {
    task.edit = true;
  }
}
saveTask(id: number) {
  const task = this.tasks.find(task => task.id === id);

  if (task) {
    task.edit = false;
    this.saveToLocalStorage();
  }
}
searchTask:string='';
getFilteredTasks(){
  return this.tasks.filter(task => {
    const matchesSearch = task.name
    .toLowerCase()
    .includes(this.searchTask.trim().toLowerCase())
    const matchesFilter =
    this.selectedFilter === "All" ||
    this.selectedFilter === "Completed" && task.completed ||
    this.selectedFilter === "Pending" && !task.completed
    return matchesSearch && matchesFilter;
  });
}

selectedFilter: string = "All";
getEmptyMessage() {

  if (this.tasks.length === 0) {
    return "📝 No tasks yet. Add your first task!";
  }

  if (this.searchTask.trim() !== "") {
    return "🔍 No matching tasks found.";
  }

  if (this.selectedFilter === "Completed") {
    return "✅ No completed tasks.";
  }

  if (this.selectedFilter === "Pending") {
    return "⏳ No pending tasks.";
  }

  return "📝 No tasks found.";
}

}

