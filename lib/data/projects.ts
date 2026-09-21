export interface Project {
  id: number
  slug: string
  title: string
  subtitle: string
  category: string
  categoryTags: string[]
  year: string
  status: string
  tier: 1 | 2 | 3
  shortDescription: string
  longDescription: string
  domain: string
  type: string
  technologies: string[]
  problem: string
  approach: string
  architecture: string[]
  features: string[]
  challenges: string
  futureWork: string
  whatILearned: string
  github: string
  demo: string
  imagePlaceholder: string
  accentColor: string
  stats: { label: string; value: string }[]
}

/**
 * ============================================================================
 * HOW TO ADD YOUR GITHUB REPOSITORY LINKS:
 *
 * For each project below, look for the `github:` field (e.g. line 85, 140, etc.).
 * Replace '[ADD GITHUB LINK]' with your repository URL, for example:
 *   github: 'https://github.com/rishika-1802/gradiora'
 *
 * Once a valid URL is provided (not starting with '['), the portfolio will
 * automatically render the active "SOURCE CODE" button with GitHub icon on
 * the project detail page and case studies.
 * ============================================================================
 */
export const projects: Project[] = [
  {
    id: 1,
    slug: 'gradiora',
    title: 'GRADIORA',
    subtitle: 'Institutional Early-Warning & Student Support Platform',
    category: 'EXPLAINABLE AI / MACHINE LEARNING / SAAS',
    categoryTags: ['AI / ML', 'EXPLAINABLE AI', 'FULL STACK'],
    year: '2026',
    status: 'Completed',
    tier: 1,
    domain: 'AI / Machine Learning',
    type: 'Full-Stack System',
    shortDescription:
      'A production-oriented institutional SaaS platform that identifies student risk across academic, emotional, and financial dimensions using explainable AI and structured intervention workflows.',
    longDescription:
      'Gradiora is designed to support institutional staff with AI-assisted early warning for at-risk students. Three independent machine-learning models evaluate academic, emotional, and financial risk dimensions, contributing to an aggregated risk score explained through SHAP-based factor analysis. The system emphasizes privacy-by-design, consent-gated data collection, and bias monitoring rather than automated decision-making.',
    problem:
      'Educational institutions often identify student struggles too late — after significant academic decline or emotional crisis. Manual monitoring is resource-intensive and inconsistent. Gradiora addresses this by providing staff with an AI-assisted early warning layer that surfaces risk signals early and connects them to structured human interventions.',
    approach:
      'Three independent ML models — academic, emotional, and financial — are trained on institutional data. Predictions feed into a risk aggregation layer. SHAP explanations translate model outputs into plain-language factor summaries for staff. An intervention workflow connects risk alerts to counseling, academic support, or financial aid processes. Bias monitoring audits model fairness across departments.',
    architecture: [
      'Student Data',
      'Independent Risk Models (Academic / Emotional / Financial)',
      'Risk Aggregation',
      'Overall Risk Score',
      'SHAP Explanation',
      'Early Warning',
      'Intervention Workflow (Academic Support / Counseling / Financial Aid)',
      'Audit / Monitoring',
    ],
    features: [
      'Multi-dimensional risk detection across three independent models',
      'SHAP-based explainability for every risk prediction',
      'Early warning system for attendance drops, GPA decline, stress signals',
      'Structured intervention workflows for staff',
      'Privacy-by-design with consent-gated data collection',
      'Exclusion of protected attributes from predictive models',
      'Department-level bias monitoring and false-positive-rate auditing',
      'Audit trails for all interventions',
    ],
    challenges:
      'Balancing model accuracy with fairness across different student demographic groups. Ensuring SHAP explanations remain meaningful and non-technical for non-engineering staff. Designing privacy-preserving data flows that still provide useful risk signals.',
    futureWork:
      'Integration with institutional ERP/SIS systems. Longitudinal tracking of intervention outcomes. Improved multimodal risk signals. Federated learning for cross-institutional model improvement without sharing raw data.',
    whatILearned:
      'Designing AI systems for institutional use requires balancing technical performance with interpretability, fairness, and privacy. SHAP explanations bridge the gap between model outputs and staff decision-making. Privacy-by-design is not an afterthought — it shapes the entire data architecture.',
    github: 'https://github.com/rishika-1802/Gradiora',
    demo: '[ADD DEMO LINK]',
    imagePlaceholder: 'GRADIORA',
    accentColor: '#C9973E',
    stats: [
      { label: 'MODELS', value: '3' },
      { label: 'EXPLAINABILITY', value: 'SHAP' },
      { label: 'RISK DIMENSIONS', value: '3' },
      { label: 'MONITORING', value: 'BIAS + FPR AUDIT' },
    ],
    technologies: ['Python', 'Scikit-learn', 'SHAP', 'Flask', 'SQLite', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    id: 2,
    slug: 'terrain-risk-assessment',
    title: 'TERRAIN RISK ASSESSMENT',
    subtitle: 'AI-Based Vision Navigation for Autonomous UAVs',
    category: 'COMPUTER VISION / AUTONOMOUS AI',
    categoryTags: ['COMPUTER VISION', 'AI / ML'],
    year: '2025',
    status: 'Completed',
    tier: 1,
    domain: 'Computer Vision',
    type: 'AI System',
    shortDescription:
      'An AI pipeline for terrain understanding and risk estimation from aerial imagery, enabling navigation decision support for autonomous UAV applications using YOLO-based segmentation.',
    longDescription:
      'This system processes aerial imagery through a YOLO segmentation model to classify terrain into eight categories, assigns risk levels to each class, and generates spatial risk maps that can inform UAV navigation decision-making. The pipeline covers preprocessing, model training, segmentation, risk assignment, and risk map visualization.',
    problem:
      'Autonomous UAVs require real-time understanding of terrain composition to make safe navigation decisions. Traditional rule-based approaches are brittle. A vision-based AI pipeline that segments and risk-scores terrain from aerial imagery can enable more adaptive autonomous navigation.',
    approach:
      'Aerial images are preprocessed and fed through a YOLO segmentation model trained on an open aerial dataset. Each detected terrain class is assigned a risk level. The segmentation output is converted into a spatial risk map. Risk maps inform downstream navigation decision-support logic.',
    architecture: [
      'Aerial Image',
      'Preprocessing',
      'YOLO Segmentation',
      'Terrain Classification',
      'Risk Assignment',
      'Risk Map',
      'Navigation Decision Support',
    ],
    features: [
      'Eight-class terrain segmentation (Bareland, Grass, Pavement, Road, Tree, Building, Water, Cropland)',
      'Per-class risk level assignment',
      'Spatial risk map generation',
      'Navigation decision support output',
      'Real-time inference pipeline',
    ],
    challenges:
      'Handling class imbalance in aerial datasets. Tuning YOLO for small terrain object boundaries. Defining meaningful risk levels for mixed-terrain regions.',
    futureWork:
      'Integration with UAV flight control systems. Multi-temporal risk tracking. 3D terrain reconstruction from stereo aerial imagery.',
    whatILearned:
      'YOLO segmentation on aerial imagery presents unique challenges around scale, class imbalance, and boundary precision. Risk assignment requires domain knowledge beyond model metrics. The pipeline design matters as much as model accuracy.',
    github: '[ADD GITHUB LINK]',
    demo: '[ADD DEMO LINK]',
    imagePlaceholder: 'TERRAIN AI',
    accentColor: '#9B7230',
    stats: [
      { label: 'MODEL', value: 'YOLO' },
      { label: 'TERRAIN CLASSES', value: '8' },
      { label: 'DOMAIN', value: 'COMPUTER VISION' },
      { label: 'TYPE', value: 'SEGMENTATION' },
    ],
    technologies: ['Python', 'YOLO', 'Ultralytics', 'OpenCV', 'PyTorch', 'NumPy', 'Matplotlib'],
  },
  {
    id: 3,
    slug: 'movie-recommendation',
    title: 'MOVIE RECOMMENDATION SYSTEM',
    subtitle: 'Full-Stack Personalized Recommendation Platform',
    category: 'MACHINE LEARNING / RECOMMENDER SYSTEM / FULL-STACK',
    categoryTags: ['AI / ML', 'FULL STACK', 'DATA SCIENCE'],
    year: '2024',
    status: 'Completed',
    tier: 1,
    domain: 'Machine Learning',
    type: 'Full-Stack Application',
    shortDescription:
      'An end-to-end personalized movie recommendation platform with genre-based, cast-based, and popularity-based recommendations, user authentication, and a Flask web interface.',
    longDescription:
      'A full-stack recommendation system built with Python, Flask, SQLite, TF-IDF, and Annoy approximate nearest-neighbor search. Users can sign up, authenticate, and receive personalized movie recommendations based on genre preferences, cast similarity, and popularity signals.',
    problem:
      'Movie discovery is overwhelming with thousands of options. A content-based recommendation system that understands user preferences through genre and cast signals provides a more targeted discovery experience.',
    approach:
      'Movie metadata is preprocessed and encoded using TF-IDF for text feature representation. Annoy builds an approximate nearest-neighbor index for fast similarity search. Flask serves a web interface with user authentication backed by SQLite. Multiple recommendation strategies (genre, cast, popularity) are combined.',
    architecture: [
      'Movie Data',
      'Data Preprocessing',
      'Feature Engineering',
      'TF-IDF Text Representation',
      'Annoy Similarity Index',
      'Recommendation Engine',
      'Flask Web Application',
      'Personalized Results',
    ],
    features: [
      'User sign-up and authentication',
      'Genre-based recommendations',
      'Cast-based recommendations',
      'Popularity-based recommendations',
      'Movie discovery interface',
      'Flask web application',
      'SQLite user management',
    ],
    challenges:
      'Balancing recommendation diversity with relevance. Cold-start problem for new users. Efficient similarity search across large movie catalogs.',
    futureWork:
      'Collaborative filtering for user-based recommendations. Hybrid recommendation combining content and collaborative signals. Deployment on cloud infrastructure.',
    whatILearned:
      'Building an end-to-end ML system requires as much engineering skill as modeling skill. TF-IDF + Annoy provides a practical, fast baseline for content-based recommendation before moving to more complex models.',
    github: 'https://github.com/rishika-1802/Movie-Recommendation-System',
    demo: '[ADD DEMO LINK]',
    imagePlaceholder: 'MOVIE REC',
    accentColor: '#C9973E',
    stats: [
      { label: 'ALGORITHM', value: 'TF-IDF + ANNOY' },
      { label: 'FRAMEWORK', value: 'FLASK' },
      { label: 'DATABASE', value: 'SQLITE' },
      { label: 'TYPE', value: 'RECOMMENDER' },
    ],
    technologies: ['Python', 'Flask', 'SQLite', 'TF-IDF', 'Annoy', 'Scikit-learn', 'Pandas'],
  },
  {
    id: 4,
    slug: 'disease-prediction',
    title: 'DISEASE PREDICTION SYSTEM',
    subtitle: 'ML-Powered Symptom-Based Healthcare Application',
    category: 'MACHINE LEARNING / HEALTHCARE APPLICATION',
    categoryTags: ['AI / ML', 'FULL STACK', 'DATA SCIENCE'],
    year: '2024',
    status: 'Completed',
    tier: 2,
    domain: 'Machine Learning',
    type: 'Web Application',
    shortDescription:
      'An academic machine-learning web application that predicts possible diseases from user-provided symptoms and generates structured PDF reports. Intended as an experimental decision-support tool, not a clinical diagnostic system.',
    longDescription:
      'A symptom-based disease prediction system built as an experimental academic project. Users input symptoms through a Flask web interface. A trained ML model predicts possible conditions and provides structured disease information. ReportLab generates PDF summaries for user records.',
    problem:
      'Symptom-based disease lookup is often unstructured and unreliable. A modular ML application that maps symptom combinations to likely conditions with structured information provides a cleaner experimental framework for exploring healthcare ML applications.',
    approach:
      'Symptom inputs are processed and encoded for ML model input. A trained classifier predicts disease probabilities. A disease information module provides structured context. ReportLab generates downloadable PDF reports.',
    architecture: [
      'User Symptoms',
      'Input Processing',
      'ML Model',
      'Prediction',
      'Disease Information',
      'PDF Report',
    ],
    features: [
      'Symptom-based disease prediction',
      'Flask web interface',
      'Disease information module',
      'PDF report generation via ReportLab',
      'Modular architecture',
    ],
    challenges:
      'Handling noisy or ambiguous symptom inputs. Communicating model limitations clearly in the UI to avoid misuse as a clinical tool.',
    futureWork:
      'Improved symptom disambiguation. Confidence calibration for prediction outputs. Integration with verified medical knowledge bases.',
    whatILearned:
      'Healthcare ML applications require rigorous communication of system limitations. Modular architecture separates prediction logic from the information and reporting layers cleanly.',
    github: 'https://github.com/rishika-1802/Disease-Prediction',
    demo: '[ADD DEMO LINK]',
    imagePlaceholder: 'DISEASE PRED',
    accentColor: '#9B7230',
    stats: [
      { label: 'FRAMEWORK', value: 'FLASK' },
      { label: 'REPORTS', value: 'PDF (REPORTLAB)' },
      { label: 'INPUT', value: 'SYMPTOMS' },
      { label: 'TYPE', value: 'CLASSIFICATION' },
    ],
    technologies: ['Python', 'Scikit-learn', 'Flask', 'SQL', 'ReportLab', 'Pandas'],
  },
  {
    id: 5,
    slug: 'emotion-detection',
    title: 'EMOTION DETECTION USING CNN',
    subtitle: 'Real-Time Facial Expression Classification',
    category: 'DEEP LEARNING / COMPUTER VISION',
    categoryTags: ['COMPUTER VISION', 'AI / ML'],
    year: '2024',
    status: 'Completed',
    tier: 2,
    domain: 'Deep Learning',
    type: 'Computer Vision System',
    shortDescription:
      'A CNN-based facial expression classification system trained on the FER dataset across seven emotion categories, with a real-time OpenCV webcam application and timestamped CSV logging.',
    longDescription:
      'A convolutional neural network project for classifying facial expressions into seven emotion categories. The training pipeline includes data augmentation and model evaluation. A real-time application uses OpenCV to detect faces, preprocess frames, and overlay live emotion predictions with confidence scores.',
    problem:
      'Automatic facial expression recognition is a foundational computer vision task with applications in HCI, affective computing, and behavioral analysis. Training a CNN from scratch on the FER dataset provides hands-on experience with the full deep-learning pipeline.',
    approach:
      'Facial images from the FER dataset are preprocessed and augmented for training. A CNN is designed and trained for seven-class emotion classification. An OpenCV webcam application runs real-time face detection, preprocessing, and model inference, overlaying predictions on the video frame.',
    architecture: [
      'Facial Image / Webcam',
      'Face Detection (OpenCV)',
      'Preprocessing & Augmentation',
      'CNN',
      'Emotion Classification (7 classes)',
      'Confidence Score Display',
      'CSV Logging',
    ],
    features: [
      'CNN trained on FER dataset',
      'Seven emotion classes: Angry, Disgust, Fear, Happy, Sad, Surprise, Neutral',
      'Data augmentation pipeline',
      'Model evaluation and visualization',
      'Real-time webcam emotion detection',
      'Confidence score overlay',
      'Timestamped CSV logging',
    ],
    challenges:
      'Class imbalance in the FER dataset. Handling lighting variation in real-time webcam inference. Balancing model depth with inference speed for real-time use.',
    futureWork:
      'Transfer learning with pre-trained face models. Multi-face simultaneous tracking. Integration with affective computing applications.',
    whatILearned:
      'Training CNNs from scratch on standard benchmarks reveals the practical impact of data augmentation and class balancing. Real-time inference requires careful optimization beyond training accuracy.',
    github: 'https://github.com/rishika-1802/Emotion-Detection',
    demo: '[ADD DEMO LINK]',
    imagePlaceholder: 'EMOTION CNN',
    accentColor: '#C9973E',
    stats: [
      { label: 'DATASET', value: 'FER' },
      { label: 'EMOTION CLASSES', value: '7' },
      { label: 'REAL-TIME', value: 'OPENCV' },
      { label: 'TYPE', value: 'CNN CLASSIFICATION' },
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    id: 6,
    slug: 'ai-readme-generator',
    title: 'AI README GENERATOR',
    subtitle: 'Local LLM-Powered Documentation Tool',
    category: 'GENERATIVE AI / DEVELOPER TOOL / LOCAL LLM',
    categoryTags: ['GENERATIVE AI', 'FULL STACK'],
    year: '2025',
    status: 'Completed',
    tier: 2,
    domain: 'Generative AI',
    type: 'Developer Tool',
    shortDescription:
      'An intelligent developer tool that analyzes local project repositories and GitHub repositories to generate comprehensive README documentation using locally hosted language models via Ollama — no external API key required.',
    longDescription:
      'A developer productivity tool that uses local LLM inference (Ollama) to analyze project structures and generate complete README documentation. The system supports local repository analysis and GitHub repository analysis, with customizable templates and a web interface. By using local models, it avoids external API dependencies and keeps code analysis private.',
    problem:
      'Writing comprehensive README documentation is time-consuming and often neglected. Automated README generation using code-aware LLMs can dramatically reduce documentation effort while maintaining quality.',
    approach:
      'A repository analyzer traverses the project structure, identifies key files, and constructs a rich context representation. This is fed into a prompt pipeline for a locally hosted LLM via Ollama. The LLM generates structured README content. A web interface allows users to input repository paths and customize generation settings.',
    architecture: [
      'Local Project / GitHub Repository',
      'Repository Analyzer',
      'File & Code Analysis',
      'Project Structure Detection',
      'Local LLM (Ollama)',
      'README Generation',
      'Web Interface',
      'Final Documentation',
    ],
    features: [
      'AI-powered README generation',
      'Local LLM inference via Ollama',
      'No external API key required',
      'Local repository analysis',
      'GitHub repository analysis',
      'Project structure detection',
      'Customizable templates',
      'Web interface',
      'Model flexibility',
    ],
    challenges:
      'Constructing effective prompts for code-aware LLMs. Handling large repositories that exceed context windows. Generating structured Markdown output reliably.',
    futureWork:
      'Support for multiple documentation formats. Incremental updates for existing READMEs. Embedding search for code-aware context retrieval.',
    whatILearned:
      'Local LLM inference is increasingly practical for developer tools. Prompt engineering for structured output requires iterative refinement. Repository analysis is a richer problem than simple file listing.',
    github: 'https://github.com/rishika-1802/ai-readme-generator',
    demo: '[ADD DEMO LINK]',
    imagePlaceholder: 'AI README',
    accentColor: '#9B7230',
    stats: [
      { label: 'LLM', value: 'OLLAMA (LOCAL)' },
      { label: 'API KEY', value: 'NOT REQUIRED' },
      { label: 'INPUT', value: 'REPO / GITHUB' },
      { label: 'OUTPUT', value: 'README.MD' },
    ],
    technologies: ['Python', 'FastAPI', 'Prompt Engineering', 'LLMs', 'Ollama', 'Git', 'Markdown'],
  },
  {
    id: 7,
    slug: 'smart-parking',
    title: 'SMART PARKING SYSTEM',
    subtitle: 'IoT & ML-Based Predictive Parking Monitoring',
    category: 'IOT / MACHINE LEARNING',
    categoryTags: ['IOT', 'AI / ML'],
    year: '2024',
    status: 'Completed',
    tier: 3,
    domain: 'IoT / Machine Learning',
    type: 'Embedded + ML System',
    shortDescription:
      'A sensor-based smart parking system with ML-powered occupancy prediction, real-time dashboard monitoring, and cloud connectivity via ThingSpeak.',
    longDescription:
      'An IoT system using ESP32/ESP8266 microcontrollers with IR sensors to monitor parking slot occupancy. Sensor data is transmitted to ThingSpeak for cloud storage and monitoring. A machine-learning model predicts occupancy patterns from historical data.',
    problem:
      'Manual parking management is inefficient and wasteful. A sensor-based system with predictive occupancy modeling can improve parking utilization and reduce driver wait times.',
    approach:
      'IR sensors detect slot occupancy. ESP32/ESP8266 processes sensor readings and transmits data to ThingSpeak via WiFi. Historical occupancy data trains an ML model for predictive monitoring. An LCD display provides on-site status.',
    architecture: [
      'IR Sensors',
      'ESP32 / ESP8266',
      'Data Processing',
      'ThingSpeak (Cloud)',
      'ML Model',
      'Occupancy Prediction',
      'Dashboard',
    ],
    features: [
      'Real-time slot occupancy detection',
      'ESP32/ESP8266 microcontroller',
      'IR sensor array',
      'ThingSpeak cloud dashboard',
      'ML occupancy prediction',
      'LCD on-site display',
    ],
    challenges:
      'IR sensor noise and false detection. WiFi connectivity reliability on microcontrollers. Collecting sufficient data for meaningful ML training.',
    futureWork:
      'Camera-based vision occupancy detection. Mobile app integration. Multi-level parking management.',
    whatILearned:
      'Embedded systems require careful sensor calibration and noise handling before any ML layer can be meaningful. Cloud connectivity adds significant value to local sensor systems.',
    github: '[ADD GITHUB LINK]',
    demo: '[ADD DEMO LINK]',
    imagePlaceholder: 'SMART PARK',
    accentColor: '#8D8177',
    stats: [
      { label: 'MCU', value: 'ESP32/ESP8266' },
      { label: 'SENSORS', value: 'IR' },
      { label: 'CLOUD', value: 'THINGSPEAK' },
      { label: 'ML', value: 'OCCUPANCY PRED.' },
    ],
    technologies: ['ESP32', 'ESP8266', 'Python', 'Scikit-learn', 'ThingSpeak', 'LCD', 'IR Sensors'],
  },
  {
    id: 8,
    slug: 'water-level-monitoring',
    title: 'WATER LEVEL MONITORING',
    subtitle: 'Arduino-Based Ultrasonic Alert System',
    category: 'IOT / EMBEDDED SYSTEMS',
    categoryTags: ['IOT', 'EMBEDDED'],
    year: '2023',
    status: 'Completed',
    tier: 3,
    domain: 'Embedded Systems',
    type: 'Hardware Project',
    shortDescription:
      'An Arduino-based water-level monitoring system using ultrasonic sensing with visual LED indicators and an audible buzzer alert at predefined threshold levels.',
    longDescription:
      'A hardware project using an Arduino Uno and HC-SR04 ultrasonic sensor to continuously measure water level. The system compares measured distance against predefined thresholds and activates green, yellow, or red LEDs with a buzzer alert for critical levels.',
    problem:
      'Manual water-level monitoring is impractical for tanks and reservoirs. An automated ultrasonic sensing system with threshold-based alerts provides continuous monitoring with minimal cost.',
    approach:
      'The HC-SR04 ultrasonic sensor measures distance to the water surface. Arduino translates distance measurements into water-level estimates. Threshold logic drives LED indicators (green/yellow/red) and a buzzer for critical levels.',
    architecture: [
      'HC-SR04 Ultrasonic Sensor',
      'Distance Measurement',
      'Water Level Estimation',
      'Threshold Check',
      'LED Indicators (Green / Yellow / Red)',
      'Buzzer Alert',
    ],
    features: [
      'Continuous ultrasonic water-level measurement',
      'Three-level threshold system (low / medium / high)',
      'Green / Yellow / Red LED indicators',
      'Buzzer alert for critical levels',
      'Arduino Uno based',
      'Low-cost hardware components',
    ],
    challenges:
      'Ultrasonic sensor accuracy in narrow containers. Debouncing threshold transitions to prevent rapid LED switching.',
    futureWork:
      'LCD display for numeric level readings. IoT connectivity for remote monitoring. Battery-powered wireless operation.',
    whatILearned:
      'Hardware projects require careful physical calibration alongside software logic. Ultrasonic sensors have practical limitations in confined spaces that require compensation.',
    github: 'https://github.com/rishika-1802/Water-level-Monitoring-System',
    demo: '[ADD DEMO LINK]',
    imagePlaceholder: 'WATER LEVEL',
    accentColor: '#8D8177',
    stats: [
      { label: 'MCU', value: 'ARDUINO UNO' },
      { label: 'SENSOR', value: 'HC-SR04' },
      { label: 'ALERTS', value: 'LED + BUZZER' },
      { label: 'TYPE', value: 'EMBEDDED' },
    ],
    technologies: ['Arduino', 'C++', 'HC-SR04', 'LEDs', 'Buzzer', 'Breadboard'],
  },
]

export const featuredProjects = projects.filter((p) => p.tier === 1)
export const archiveProjects = projects.filter((p) => p.tier > 1)

export const projectCategories = [
  { label: 'ALL', value: 'ALL' },
  { label: 'AI / ML', value: 'AI / ML' },
  { label: 'COMPUTER VISION', value: 'COMPUTER VISION' },
  { label: 'DATA SCIENCE', value: 'DATA SCIENCE' },
  { label: 'GENERATIVE AI', value: 'GENERATIVE AI' },
  { label: 'FULL STACK', value: 'FULL STACK' },
  { label: 'IOT', value: 'IOT' },
  { label: 'EMBEDDED', value: 'EMBEDDED' },
]
