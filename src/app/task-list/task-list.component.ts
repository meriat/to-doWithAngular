import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../models/task.model'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent  {

  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(taskToEdit: Task){
    this.clickSender.emit(taskToEdit);
  }

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

}
