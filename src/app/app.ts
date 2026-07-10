import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { AddTodo } from './add-todo/add-todo';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, AddTodo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My_ToDo');
}
