import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import{type Task} from'./user-task.model';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-user-task',
  imports: [DatePipe],
  templateUrl: './user-task.html',
  styleUrl: './user-task.css',
})
export class UserTask {
  @Input ({required: true}) uTask!: Task
  private taskService = inject(TaskService);

  onClickCompleteBtn(){
    this.taskService.removeTask(this.uTask.id);
  }
}
