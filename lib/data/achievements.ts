export interface Achievement {
  id: number
  title: string
  organization: string
  year: string
  type: 'certification' | 'internship' | 'workshop' | 'hackathon' | 'academic' | 'competition'
  description: string
  certificate?: string
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Introduction to Large Language Models',
    organization: 'NPTEL',
    year: '2024',
    type: 'certification',
    description: 'Comprehensive study of Large Language Model architectures, fine-tuning, prompting strategies, and evaluation.',
  },
  {
    id: 2,
    title: 'Explore Generative AI',
    organization: 'Microsoft Learn',
    year: '2024',
    type: 'certification',
    description: 'Exploration of Generative AI principles, foundational models, responsible AI practices, and Azure AI services.',
  },
  {
    id: 3,
    title: 'Academic Excellence (GPA: 8.53)',
    organization: 'Anna University Regional Campus, Coimbatore',
    year: '2023 – Present',
    type: 'academic',
    description: 'Maintaining a 8.53 GPA in Bachelor of Technology – Artificial Intelligence & Data Science with coursework in DSA, DBMS, ML, and Deep Learning.',
  },
]
