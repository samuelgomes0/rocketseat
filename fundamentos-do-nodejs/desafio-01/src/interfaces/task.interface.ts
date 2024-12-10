export interface ITask {
  id: string;
  title: string;
  description: string;
  completedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITaskDTO {
  title: string;
  description: string;
}
