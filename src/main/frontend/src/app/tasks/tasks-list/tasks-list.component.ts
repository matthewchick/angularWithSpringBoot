import { Component, OnInit } from '@angular/core';
import { Task } from "src/app/tasks/task.model";
import { TaskService } from "../task.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];   //tasks is an array object of Task

  // constructor is not part of angular, which is called
  // when the class is instantiated
  // ngOnInit is called after the constructor is executed

  constructor(private taskService: TaskService ) { }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(
        (tasks: any[]) => {
          this.tasks = tasks
        },
        (error) => console.log(error)
      );

    this.taskService.onTaskAdded
      .subscribe(
        (task: Task) => this.tasks.push(task)
      );

    // add Task to the array, using "for-loop" -> for (let tasks of Task)
    /*this.tasks.push( new Task(1, "Task 1", true, "12/11/19"));
    this.tasks.push( new Task(2, "Task 2", false, "12/11/19"));
    this.tasks.push( new Task(3, "Task 3", false, "12/11/19"));*/
  }

  getDueDateLabel(task: Task){
    return task.completed ? 'badge-success' : 'badge-primary';
  }

  onTaskChange(event, task) {
    console.log('Task has been changed');
    this.taskService.saveTask(task, event.target.checked).subscribe();
  }
}
