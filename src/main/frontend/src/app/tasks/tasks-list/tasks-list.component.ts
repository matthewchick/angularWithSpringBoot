import { Component, OnInit } from '@angular/core';
import { Task } from "src/app/tasks/task.model";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];   //tasks is an array object of Task

  constructor() { }

  ngOnInit() {
    this.tasks.push( new Task(1, "Task 1", true, "12/11/19"));
    this.tasks.push( new Task(2, "Task 2", false, "12/11/19"));
    this.tasks.push( new Task(3, "Task 3", false, "12/11/19"));
  }

  getDueDateLabel(task: Task){
    return task.completed ? 'badge-success' : 'badge-primary';
  }

  onTaskChange(event, task) {
    console.log('Task has been changed');
  }
}