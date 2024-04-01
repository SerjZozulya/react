export interface ITask {
    id: number;
    summary: string;
    description: string;
    type: string;
    status: string;
    pubDate: string;
    reporterId: number;
    assigneeId: number;
  }