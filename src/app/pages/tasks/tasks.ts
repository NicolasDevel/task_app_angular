import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-tasks',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})

export class Tasks {

  tasks: Task[] = [];
  newTaskDescription: string = '';
  errorMessage: string = '';

  constructor(){
    this.loadDataFromLocalStorage()
  }

  loadDataFromLocalStorage(){
    const dataFromLocalStorage : string | null = localStorage.getItem('angular-tasks')
    if (dataFromLocalStorage) { //Comprobar que la variable dataFromLocalStorage sea distinta de null
      this.tasks = JSON.parse(dataFromLocalStorage)
    }
  }

  addTask(): void {
    //Validar si la descripción está vacía
    if(this.newTaskDescription.trim()){
      //Crear una nueva tarea
      const newTask: Task = {
        id: this.tasks.length > 0 ? Math.max(... this.tasks.map(t => t.id)) + 1 : 1,
        description: this.newTaskDescription,
        completed: false
      }
      this.tasks.push(newTask)
      this.newTaskDescription = ''
      this.errorMessage = ''
      this.saveTasks()
    }else{
      this.errorMessage = 'La descripción de la tarea no puede estar vacía' 
    }
  }

  saveTasks():void {
    localStorage.setItem('angular-tasks', JSON.stringify(this.tasks))
  }
}
