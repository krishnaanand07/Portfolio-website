import {
  FaPython, FaJava, FaDatabase, FaJs, FaBrain, FaEye, FaRobot,
  FaChartBar, FaServer, FaCodeBranch,
} from "react-icons/fa";
import {
  SiTensorflow, SiPytorch, SiOpencv, SiScikitlearn, SiPandas,
  SiNumpy, SiStreamlit, SiFlask, SiMongodb, SiMysql, SiGit, SiGithub,
  SiFastapi, SiDocker,
} from "react-icons/si";

export const SKILL_CATEGORIES = [
  {
    id: "programming",
    title: "Programming",
    icon: FaPython,
    color: "#3776AB",
    skills: ["Python", "Java", "SQL", "JavaScript"],
  },
  {
    id: "ml",
    title: "Machine Learning",
    icon: FaBrain,
    color: "#118AB2",
    skills: [
      "Regression",
      "Classification",
      "Clustering",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    id: "dl",
    title: "Deep Learning",
    icon: FaRobot,
    color: "#8B5CF6",
    skills: ["ANN", "CNN", "RNN", "LSTM", "TensorFlow", "PyTorch"],
  },
  {
    id: "nlp",
    title: "NLP",
    icon: FaChartBar,
    color: "#D88A4B",
    skills: ["TF-IDF", "BERT", "Text Classification", "Sentiment Analysis"],
  },
  {
    id: "cv",
    title: "Computer Vision",
    icon: FaEye,
    color: "#22C55E",
    skills: ["OpenCV", "Image Classification"],
  },
  {
    id: "genai",
    title: "Generative AI",
    icon: FaRobot,
    color: "#EC4899",
    skills: ["Prompt Engineering", "LangChain", "RAG", "Vector Databases"],
  },
  {
    id: "libraries",
    title: "Libraries & Tools",
    icon: SiScikitlearn,
    color: "#F97316",
    skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
  },
  {
    id: "deployment",
    title: "Deployment",
    icon: FaServer,
    color: "#06B6D4",
    skills: ["Streamlit", "Flask", "FastAPI"],
  },
  {
    id: "database",
    title: "Database",
    icon: FaDatabase,
    color: "#0EA5E9",
    skills: ["MySQL", "MongoDB"],
  },
  {
    id: "vcs",
    title: "Version Control",
    icon: FaCodeBranch,
    color: "#F05032",
    skills: ["Git", "GitHub"],
  },
];
