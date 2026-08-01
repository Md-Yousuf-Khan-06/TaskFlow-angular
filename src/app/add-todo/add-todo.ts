import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo {

  task:string= ''
  nextId: number = 1;
  tasks:{
    id: number;
    name: string,
    completed: boolean,
    edit: boolean
  }[]=[]

addTask(){
  // console.log(this.task)
  // console.log("button clicked")
  if (this.task!=''){
    this.tasks.push({
      id: this.nextId,
      name:this.task,
      completed:false,
      edit: false
    })
    console.log(this.tasks)
    this.nextId++;
    this.task = '';

  }
}
deleteTask(id: number) {
  const index = this.tasks.findIndex(task => task.id === id);

  if (index !== -1) {
    this.tasks.splice(index, 1);
  }
}
completeTask(id: number) {
  const task = this.tasks.find(task => task.id === id);

  if (task) {
    task.completed = true;
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
}

