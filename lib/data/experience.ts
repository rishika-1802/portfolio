export interface Experience {
  id: number
  role: string
  company: string
  duration: string
  type: string
  description: string
  responsibilities: string[]
  technologies: string[]
  outcomes: string
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'AI Intern',
    company: 'Flofly Technologies - Bengaluru',
    duration: 'June 2026 – July 2026',
    type: 'Internship',
    description:
      'Developed an AI-powered drone navigation system as part of an engineering-focused AI project. Applied AI/ML and computer-vision techniques and contributed to the development of the system, improving operational efficiency by 15%.',
    responsibilities: [
      'Developed an AI-powered drone navigation system architecture',
      'Applied AI/ML and computer vision algorithms for real-time terrain and path estimation',
      'Contributed to core system engineering and deployment workflows',
      'Optimized model inference pipeline achieving a 15% improvement in operational efficiency',
    ],
    technologies: ['Python', 'Computer Vision', 'OpenCV', 'TensorFlow', 'PyTorch', 'AI / ML'],
    outcomes: '15% improvement in drone navigation operational efficiency',
  },
  {
    id: 2,
    role: 'Data Science Intern',
    company: 'Sangam Soft Solutions - Coimbatore',
    duration: 'June 2025 – July 2025',
    type: 'Internship',
    description:
      'Executed data preprocessing and exploratory data analysis (EDA) on large datasets, applying machine learning algorithms to uncover actionable insights that informed strategic business decisions.',
    responsibilities: [
      'Executed end-to-end data preprocessing and cleaning on enterprise datasets',
      'Performed exploratory data analysis and feature identification',
      'Applied supervised machine learning models for predictive analysis',
      'Extracted meaningful analytical insights to support data-driven business decisions',
    ],
    technologies: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL', 'Matplotlib'],
    outcomes: 'Delivered predictive modeling insights that guided business decision-making',
  },
]
