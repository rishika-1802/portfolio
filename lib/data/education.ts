export interface Education {
  id: number
  degree: string
  field: string
  institution: string
  period: string
  status: string
  description: string
}

export const education: Education[] = [
  {
    id: 1,
    degree: 'B.Tech',
    field: 'Artificial Intelligence & Data Science',
    institution: 'Anna University Regional Campus, Coimbatore',
    period: 'September 2023 — Present',
    status: 'Final Year (GPA: 8.53)',
    description:
      'Pursuing a Bachelor of Technology in Artificial Intelligence & Data Science with an 8.53 GPA. Coursework encompasses Data Structures & Algorithms, DBMS, Machine Learning, Deep Learning, Generative AI, and Computer Networks.',
  },
]
