import { ITask } from "./task.interface";

export interface DeleteTaskResponse {
    message: string;
    tasks: ITask[];
  }