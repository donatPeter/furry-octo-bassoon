export interface Repo {
  id: string;
  name: string;
  description: string;
  language: string;
  open_issues: boolean;
  [p: string]: string | boolean;
}
