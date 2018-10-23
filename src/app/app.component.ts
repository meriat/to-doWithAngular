import { Component } from '@angular/core';
import { Task } from './models/task.model';


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
  new Task('Add README file to last few Angular repos on GitHub',0)
  ];

  selectedTask = null;

    priorityColor(currentTask){
      if(currentTask.priority === 3){
        return "bg-primary";
      } else if(currentTask.priority === 2) {
        return "bg-success";
      } else if (currentTask.priority === 1 ){ 
        return "bg-warning";
      } else {
        return "bg-info";
      }

    }

    editTask(clickedTask) {
      this.selectedTask = clickedTask;
    }
    finishedEditing() {
      this.selectedTask = null;
    }
  
}

