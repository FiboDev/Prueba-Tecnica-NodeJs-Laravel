import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
import { ITask } from '../interfaces/task.interface';
import { UpdateTaskDto } from './dto/update.task.dto';
import { DeleteTaskResponse } from 'src/interfaces/delete.task.interface';

@Injectable()
export class TaskService {

  private tasks: ITask[] = [];
  private lastId: number = 0;

  createTask(createTaskDto: CreateTaskDto): ITask {

    this.lastId++;

    const task: ITask = {
      ...createTaskDto,
      id: this.lastId,
      fecha_reacion: new Date()
    };

    this.tasks.push(task);

    return task;
    }

  getTasks(): ITask[] {

    return this.tasks;
  }

  getTaskById(id: number): ITask | undefined {

    return this.tasks.find(task => task.id === id);
  }

  updateTask(id: number, updateTaskDto: UpdateTaskDto): ITask {

    const task = this.getTaskById(id);

    if (!task) {

      throw new NotFoundException(`La tarea con ID ${id} no ha sido encontrada`);

    }

    const taskIndex = this.tasks.findIndex(task => task.id === id);

    const updatedTask = {
      ...this.tasks[taskIndex],
      ...updateTaskDto
    };

    this.tasks[taskIndex] = updatedTask;

    return updatedTask;
  }

  deleteTask(id: number): DeleteTaskResponse {

    const task = this.getTaskById(id);

    if (!task) {

      throw new NotFoundException(`La tarea con ID ${id} no ha sido encontrada`);

    }

    const taskIndex = this.tasks.findIndex(task => task.id === id);

    this.tasks.splice(taskIndex, 1);

    return {
      message: `La tarea con ID ${id} ha sido eliminada`,
      tasks: this.tasks
    };
  }
}
