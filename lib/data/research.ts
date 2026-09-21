export interface ResearchInterest {
  id: number
  title: string
  description: string
  icon: string
}

export interface Experiment {
  model: string
  domain: string
  dataset: string
  status: 'Completed' | 'In Progress' | 'Planned'
}

export const researchInterests: ResearchInterest[] = [
  {
    id: 1,
    title: 'Computer Vision',
    description: 'Visual perception systems for real-world understanding, segmentation, and detection tasks.',
    icon: 'Eye',
  },
  {
    id: 2,
    title: 'Autonomous Systems',
    description: 'AI-driven decision-making for navigation, risk assessment, and autonomous operation.',
    icon: 'Navigation',
  },
  {
    id: 3,
    title: 'Intelligent Systems',
    description: 'End-to-end AI systems that perceive, reason, and act with engineering rigor.',
    icon: 'Cpu',
  },
  {
    id: 4,
    title: 'Multimodal AI',
    description: 'Learning from multiple data modalities — vision, text, and structured data together.',
    icon: 'Layers',
  },
  {
    id: 5,
    title: 'AI for Decision Making',
    description: 'Combining ML models with explainability and structured workflows for human-in-the-loop systems.',
    icon: 'Brain',
  },
  {
    id: 6,
    title: 'Responsible AI',
    description: 'Fairness, bias monitoring, privacy-by-design, and transparent AI systems.',
    icon: 'Shield',
  },
]

export const researchDirection =
  'Exploring how visual perception, machine learning, and risk estimation can be combined to support intelligent decision-making in autonomous and institutional AI systems.'

export const experiments: Experiment[] = [
  {
    model: 'YOLO (Segmentation)',
    domain: 'Computer Vision',
    dataset: 'OpenEarth (Aerial)',
    status: 'Completed',
  },
  {
    model: 'Random Forest',
    domain: 'IoT / Machine Learning',
    dataset: 'Smart Parking Sensors',
    status: 'Completed',
  },
  {
    model: 'TF-IDF + Annoy',
    domain: 'Recommender Systems',
    dataset: 'Movie Metadata',
    status: 'Completed',
  },
  {
    model: 'CNN (Custom)',
    domain: 'Deep Learning / CV',
    dataset: 'FER Dataset',
    status: 'Completed',
  },
  {
    model: 'Multi-Model Ensemble',
    domain: 'Explainable AI',
    dataset: 'Institutional Data',
    status: 'Completed',
  },
]
