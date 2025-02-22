import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';
import { ITask } from '../interfaces/task.interface';
import { DeleteTaskResponse } from 'src/interfaces/delete.task.interface';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
    
    @Post()
    create(@Body() createTaskDto: CreateTaskDto): ITask {

        return this.taskService.createTask(createTaskDto);
    }

    @Get()
    findAll(): ITask[] {

        return this.taskService.getTasks();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): ITask {

        return this.taskService.getTaskById(id) ?? {} as ITask;
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateTaskDto: UpdateTaskDto,
    ): ITask {
        
        return this.taskService.updateTask(id, updateTaskDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): DeleteTaskResponse {

        return this.taskService.deleteTask(id);
    }
}
