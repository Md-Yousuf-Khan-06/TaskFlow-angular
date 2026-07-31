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
  tasks:{
    name: string,
    completed: boolean,
    edit: boolean
  }[]=[]

addTask(){
  // console.log(this.task)
  // console.log("button clicked")
  if (this.task!=''){
    this.tasks.push({
      name:this.task,
      completed:false,
      edit: false
    })
    console.log(this.tasks)
    this.task=''
  }
}
deleteTask(index: number){
  this.tasks.splice(index, 1)
}
completeTask (index: number){
  this.tasks[index].completed=true
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
editTask(index:number){
  this.tasks[index].edit=true;
}
saveTask(index:number){
  this.tasks[index].edit=false;
}
}

