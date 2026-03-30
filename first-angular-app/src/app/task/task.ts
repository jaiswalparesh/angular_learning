import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTask } from './user-task/user-task';
import { AddTask } from './add-task/add-task';
import { type AddNewTask } from './user-task/user-task.model';
import { TaskService } from './task.service';


@Component({
  selector: 'app-task',
  imports: [UserTask, AddTask],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) userTaskId!: string
  @Input({ required: true }) name!: string

  isTaskAddClick = false

  constructor(private taskService: TaskService) { }

  get selectedUserTask() {
    return this.taskService.getUserTask(this.userTaskId);
  }

  onCompleteUserTask(id: string) {
    this.taskService.removeTask(id);
  }

  onAddTaskClick() {
    this.isTaskAddClick = true;
  }

  onCancleTaskClick() {
    this.isTaskAddClick = false;
  }
}
