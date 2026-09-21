export interface SkillCategory {
  id: string
  label: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'PROGRAMMING LANGUAGES',
    skills: ['Python', 'SQL'],
  },
  {
    id: 'genai',
    label: 'AI & GENERATIVE AI',
    skills: [
      'Generative AI',
      'LLMs',
      'Prompt Engineering',
      'RAG',
      'LangChain',
      'LangGraph',
      'Machine Learning',
      'Deep Learning',
      'Predictive Analytics',
    ],
  },
  {
    id: 'cv',
    label: 'COMPUTER VISION',
    skills: ['Computer Vision', 'OpenCV', 'Image Processing', 'Object Detection', 'Image Segmentation', 'YOLO'],
  },
  {
    id: 'frameworks',
    label: 'FRAMEWORKS & LIBRARIES',
    skills: ['TensorFlow', 'Scikit-learn', 'PyTorch', 'Pandas', 'NumPy', 'Matplotlib', 'SHAP'],
  },
  {
    id: 'backend',
    label: 'BACKEND & DATABASES',
    skills: ['FastAPI', 'Flask', 'REST APIs', 'MySQL', 'SQLite'],
  },
  {
    id: 'tools',
    label: 'DEVELOPER & DEPLOYMENT TOOLS',
    skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'VS Code', 'Jupyter'],
  },
]
