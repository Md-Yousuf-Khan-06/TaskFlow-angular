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
    completed: boolean
  }[]=[]

addTask(){
  // console.log(this.task)
  // console.log("button clicked")
  if (this.task!=''){
    this.tasks.push({
      name:this.task,
      completed:false
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
}
