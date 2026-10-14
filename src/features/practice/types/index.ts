export type ProblemDifficulty = "Easy" | "Medium" | "Hard";

export type ProblemCategory =
  | "All"
  | "DSA"
  | "DBMS"
  | "Operating Systems"
  | "Computer Networks"
  | "System Design"
  | "OOP Concepts";

export interface PracticeProblem {
  id: string;
  title: string;
  category: ProblemCategory;
  subjectSlug: string;
  difficulty: ProblemDifficulty;
  acceptanceRate: string;
  tags: string[];
  starterNote?: string;
}
