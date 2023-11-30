import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private tasks: any[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(title:string,description:string) {
    const newTask={title,description};
    this.tasks.push(newTask)
  }

  updateTask(index: number, title:string,description:string) {
   const task=this.tasks[index];
   if(task){
    task.title=title;
    task.description=description
   }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
