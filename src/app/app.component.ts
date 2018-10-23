import { Component } from '@angular/core';
import { Task } from './models/task.model';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
currentFocus: string = 'Angular Homework';
currentTime = new Date();
month: number = this.currentTime.getMonth() + 1;
day: number = this.currentTime.getDate();
year: number = this.currentTime.getFullYear();

tasks: Task[] = [
  new Task('Finish weekend Angular homework for Epicodus course', 2),
  new Task('Begin brainstorming possible JavaScript group projects',3),
  new Task('Add README file to last few Angular repos on GitHub',3)
  ];

  editTask() {
    alert("Time to edit a task!");
  }

    priorityColor(currentTask){
      if(currentTask.priority === 3){
        return "bg-primary";
      } else if(currentTask.priority === 2) {
        return "bg-success";
      } else {
        return "bg-info";
      }

    }
  
}

