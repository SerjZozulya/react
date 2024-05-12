import { Dayjs } from "dayjs";

export interface ITask {
  id: number;
  summary: string;
  description: string;
  type: string;
  status: string;
  pubDate: Dayjs;
  reporterId: number;
  assigneeId: number;
  projectId: number;
}
