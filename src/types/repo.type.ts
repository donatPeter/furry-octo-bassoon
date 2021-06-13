export interface IRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  open_issues: boolean;
  [p: string]: string | boolean | number;
}
