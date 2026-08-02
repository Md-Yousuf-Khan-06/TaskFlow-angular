import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { AddTodo } from './add-todo/add-todo';
import { Footer } from "./footer/footer";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, AddTodo, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My_ToDo');
}
