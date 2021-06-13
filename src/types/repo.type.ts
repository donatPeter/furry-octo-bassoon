export interface IRepo {
  id: string;
  name: string;
  description: string;
  language: string;
  open_issues: boolean;
  [p: string]: string | boolean;
}
