import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type AddNewTask } from '../user-task/user-task.model'
import { TaskService } from '../task.service';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  @Input({ required: true }) userId!: string
  @Output() cancleTask = new EventEmitter();
  enteredTitle = '';
  enteredSummasry = '';
  enteredDate = '';
  private taskService = inject(TaskService);

  onCancleTask() {
    this.cancleTask.emit();
  }
  onSubmit() {
    this.taskService.addUserTask(({
      title: this.enteredTitle,
      summary: this.enteredSummasry,
      date: this.enteredDate
    }), this.userId)
    this.cancleTask.emit();
  }
}
