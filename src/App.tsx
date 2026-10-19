import { useState } from 'react'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

const experiences = [
  {
    company: 'Vena Medical',
    location: 'Ontario, Canada',
    role: 'AI Engineer Intern',
    dates: 'JAN 2026 — AUG 2026',
    intro:
      'Applied machine learning to intravascular imaging and catheter signal telemetry in a medical technology setting.',
    highlights: [
      <>
        Developed CNN, ResNet, and LSTM pipelines with PyTorch, TensorFlow, and Azure Machine Learning, improving feature extraction
        accuracy by <strong>18%</strong>.
      </>,
      <>
        Built a clinical-guidelines RAG pipeline using LangChain, Azure OpenAI, and FAISS, improving retrieval precision by{' '}
        <strong>34%</strong>.
      </>,
      <>
        Streamlined image preprocessing and augmentation, reducing execution time by <strong>42%</strong>; contributed to Docker and
        GitHub Actions workflows that shortened deployment cycles by <strong>35%</strong>.
      </>,
    ],
    tags: ['PyTorch', 'Azure ML', 'RAG', 'OpenCV', 'Docker'],
    mark: 'VM',
  },
  {
    company: 'Fortune Infosys',
    location: 'India',
    role: 'Data Scientist',
    dates: 'NOV 2021 — DEC 2023',
    intro:
      'Built and deployed machine learning solutions for financial data, from data preparation and experimentation through monitoring.',
    highlights: [
      <>
        Developed classification, regression, and clustering models on <strong>500K+ financial records</strong>, improving an
        evaluation metric by <strong>22%</strong>.
      </>,
      <>
        Prepared and analyzed data with Python, SQL, Pandas, NumPy, and Azure Blob Storage; applied statistical modeling, hypothesis
        testing, and A/B testing.
      </>,
      <>
        Used MLflow for experiment tracking and model versioning, and monitored model performance and data drift to guide retraining.
      </>,
      <>
        Contributed to an enterprise e-membership application using <strong>ASP.NET Core</strong>, including REST API development.
      </>,
    ],
    tags: ['Python', 'scikit-learn', 'XGBoost', 'Azure ML', 'MLflow', 'ASP.NET Core', 'REST APIs'],
    mark: 'FI',
  },
  {
    company: 'Fortune Infosys',
    location: 'India',
    role: 'Data Scientist Intern',
    dates: 'JUN 2021 — NOV 2021',
    intro: 'Worked on customer retention modeling and made recurring analytics workflows faster and easier to act on.',
    highlights: [
      <>
        Built churn models with Random Forest and Gradient Boosting, achieving <strong>0.88 ROC-AUC</strong> and supporting
        initiatives associated with a <strong>15% decrease</strong> in quarterly attrition.
      </>,
      <>
        Improved ETL and feature engineering in Azure Databricks, reducing weekly preparation time by <strong>28%</strong>.
      </>,
      <>
        Created Power BI and Tableau KPI dashboards, improving operational reporting speed by <strong>40%</strong>.
      </>,
    ],
    tags: ['Python', 'SQL', 'PySpark', 'Azure Databricks', 'Power BI'],
    mark: 'FI',
  },
]

const projects = [
  {
    number: '01',
    type: 'DRUG DISCOVERY · MACHINE LEARNING',
    title: 'AI-powered IC50 drug response forecasting',
    description:
      'An end-to-end system that predicts cancer cell sensitivity from genomic and compound features, helping explore how a treatment might perform.',
    approach: [
      'Benchmarked Random Forest, XGBoost, and a custom neural network.',
      'Built engineered, cross-validated feature pipelines.',
      'Evaluated performance with F1-score, ROC-AUC, and RMSE.',
      'Packaged predictions behind a Flask REST API in Docker.',
    ],
    tools: ['Python', 'scikit-learn', 'XGBoost', 'TensorFlow', 'Flask', 'Docker'],
    icon: <BrainCircuit size={21} strokeWidth={1.7} />,
    visual: 'project-visual--drug',
    visualLabel: 'DRUG RESPONSE MODEL',
    date: 'JAN — APR 2025',
  },
  {
    number: '02',
    type: 'CLIMATE SCIENCE · TIME SERIES',
    title: 'Intelligent climate trend prediction',
    description:
      'An LSTM forecasting system exploring long-range temperature, precipitation, and humidity patterns in multi-decade climate data.',
    approach: [
      'Tuned sequence length, dropout, and learning rate for stable forecasts.',
      'Evaluated model accuracy with RMSE and MAE.',
      'Validated generalization across seasons and regions.',
    ],
    tools: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'NumPy'],
    icon: <ArrowDownRight size={21} strokeWidth={1.7} />,
    visual: 'project-visual--climate',
    visualLabel: 'CLIMATE · TIME SERIES',
    date: 'SEP — DEC 2024',
  },
  {
    number: '03',
    type: 'DOCUMENT AI · RETRIEVAL-AUGMENTED GENERATION',
    title: 'Clinical Document AI Workbench',
    description:
      'A document question-answering prototype developed during my time at Vena Medical. It combines semantic retrieval with LLM-generated answers and inspectable source evidence.',
    approach: [
      'Ingested PDF, TXT, and Markdown documents, retaining source filenames and PDF page metadata.',
      'Split text into overlapping passages with LangChain and indexed OpenAI embeddings in persistent local ChromaDB storage.',
      'Retrieved relevant passages and generated answers through a LangChain pipeline and an OpenAI chat model.',
      'Built a Streamlit interface for uploads, indexing, questions, and source excerpts; tested chunking and source metadata with Pytest.',
    ],
    tools: ['Python', 'LangChain', 'RAG', 'OpenAI API', 'ChromaDB', 'Streamlit', 'PyPDF', 'Pytest'],
    icon: <FileText size={21} strokeWidth={1.7} />,
    visual: 'project-visual--documents',
    visualLabel: 'DOCUMENT → EVIDENCE',
    date: 'DEMONSTRATION PROTOTYPE',
    disclaimer:
      'Learning and demonstration only—not a medical device, diagnostic tool, or clinically validated system. Use synthetic or non-sensitive documents only; never upload patient records or confidential company documents. Source references do not guarantee answer correctness.',
  },
]

const skillGroups = [
  {
    label: 'Programming & data',
    description: 'Preparing, exploring, and understanding real-world data.',
    featured: ['Python', 'SQL'],
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'PySpark', 'ETL & data pipelines', 'EDA', 'Statistical modeling', 'A/B testing'],
  },
  {
    label: 'Machine learning',
    description: 'Training and evaluating models for images, signals, and forecasts.',
    featured: ['PyTorch', 'scikit-learn'],
    skills: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'scikit-learn',
      'XGBoost',
      'LightGBM',
      'CNNs & ResNet',
      'LSTMs',
      'Feature engineering',
      'Model evaluation',
      'Hyperparameter tuning',
      'Cross-validation',
    ],
  },
  {
    label: 'Generative AI & vision',
    description: 'Connecting clinical knowledge and visual data with applied AI.',
    featured: ['LangChain', 'RAG', 'FAISS'],
    skills: [
      'LLMs',
      'LangChain',
      'RAG',
      'FAISS',
      'ChromaDB',
      'Azure OpenAI',
      'OpenAI API',
      'Computer vision',
      'Medical imaging',
      'OpenCV',
    ],
  },
  {
    label: 'Cloud & MLOps',
    description: 'Taking experiments into reproducible deployment workflows.',
    featured: ['Azure Machine Learning', 'Docker', 'MLflow'],
    skills: [
      'Microsoft Azure',
      'Azure Machine Learning',
      'Azure Databricks',
      'Azure Blob Storage',
      'Docker',
      'MLflow',
      'Git & GitHub Actions',
      'CI/CD',
      'ONNX Runtime',
      'Model monitoring',
      'Data drift detection',
    ],
  },
  {
    label: 'APIs & visualization',
    description: 'Making predictions and insights accessible beyond the notebook.',
    featured: ['Flask', 'FastAPI'],
    skills: ['Flask', 'FastAPI', 'REST APIs', 'Streamlit', 'Power BI', 'Tableau', 'KPI dashboards'],
  },
  {
    label: 'Software development',
    description: 'Experience with web interfaces, enterprise applications, and REST API development.',
    featured: ['React', 'JavaScript', 'ASP.NET Core'],
    skills: ['React', 'JavaScript', 'ASP.NET Core', 'REST API development'],
  },
]

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <span className="eyebrow-dot" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Hinal Arya, home" onClick={closeMenu}>
          <span className="brand-mark">H</span>
          <span>HINAL ARYA</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`site-nav${menuOpen ? ' site-nav--open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero page-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              AI &amp; MACHINE LEARNING ENGINEER
            </div>
            <h1>
              Making sense
              <br />
              of <span className="serif-accent">complex</span> data.
            </h1>
            <p className="hero-description">
              I&apos;m Hinal — an AI engineer building practical machine learning solutions across healthcare, finance, and applied
              research, with additional experience in React, JavaScript, and ASP.NET Core enterprise applications.
            </p>
            <a className="hero-skills" href="#skills" aria-label="Explore my skills in Python, PyTorch, RAG, and Azure ML">
              <span>Python</span>
              <span>PyTorch</span>
              <span>RAG</span>
              <span>Azure ML</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <div className="hero-actions">
              <a className="button button--dark" href="#projects">
                Explore my work <ArrowRight size={16} />
              </a>
              <a className="button button--outline" href="/Hinal_Arya_Resume.pdf" download="Hinal_Arya_Resume.pdf">
                Download resume <Download size={18} />
              </a>
            </div>
            <div className="hero-location">
              <span className="location-dot" />
              Based in Waterloo, Ontario, Canada
            </div>
          </div>

          <div className="hero-art" aria-label="Illustration of a neural network data flow">
            <div className="art-topline">
              <span>THOUGHTFUL BY DESIGN</span>
              <span>01 — 04</span>
            </div>
            <div className="neural-art">
              <div className="orbit orbit--outer" />
              <div className="orbit orbit--inner" />
              <div className="network-lines" aria-hidden="true">
                <span className="network-line line-1" />
                <span className="network-line line-2" />
                <span className="network-line line-3" />
                <span className="network-line line-4" />
                <span className="network-line line-5" />
                <span className="network-line line-6" />
                <span className="network-line line-7" />
                <span className="network-line line-8" />
              </div>
              <span className="network-node node-1" />
              <span className="network-node node-2" />
              <span className="network-node node-3" />
              <span className="network-node node-4" />
              <span className="network-node node-5" />
              <span className="network-node node-6" />
              <span className="network-node node-7" />
              <span className="network-node node-8" />
              <div className="core-orb">
                <div className="core-orb__shine" />
                <span>AI</span>
              </div>
              <div className="art-note art-note--left">
                <span className="note-rule" />
                <span>Curiosity</span>
              </div>
              <div className="art-note art-note--right">
                <span>Clarity</span>
                <span className="note-rule" />
              </div>
            </div>
            <div className="art-caption">
              <span>FROM RAW SIGNAL TO REAL-WORLD IMPACT</span>
              <span>H.A. &nbsp;✳</span>
            </div>
            <div className="art-number" aria-hidden="true">
              HA<span>.</span>
            </div>
          </div>
          <a className="hero-scroll" href="#about">
            SCROLL TO EXPLORE <ArrowDown size={13} />
          </a>
        </section>

        <section className="proof-strip" aria-label="Career highlights">
          <div className="proof-strip__inner page-wrap">
            <div className="proof-intro">A LITTLE ABOUT MY WORK</div>
            <div className="proof-stat">
              <strong>2<span>+</span></strong>
              <span>years in data<br />&amp; machine learning</span>
            </div>
            <div className="proof-stat">
              <strong>500<span>K+</span></strong>
              <span>financial records<br />in model pipelines</span>
            </div>
            <div className="proof-stat">
              <strong>34<span>%</span></strong>
              <span>higher RAG<br />retrieval precision</span>
            </div>
            <div className="proof-stat">
              <strong>3</strong>
              <span>domains: health,<br />finance &amp; climate</span>
            </div>
          </div>
        </section>

        <section className="about section-pad page-wrap" id="about">
          <div className="about-heading">
            <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Engineer by training. Curious by nature." />
          </div>
          <div className="about-copy">
            <p className="about-lead">
              I like working where <span>good questions</span> meet data that can make a difference.
            </p>
            <p>
              My experience spans financial modeling, clinical document retrieval, medical imaging, and climate forecasting. I take
              projects from data preparation and experimentation through evaluation and deployment—with a focus on making the results
              useful outside the notebook.
            </p>
            <p>
              On the software development side, I have experience with React and JavaScript, and contributed to an enterprise
              e-membership application and REST API development using ASP.NET Core at Fortune Infosys.
            </p>
            <p>
              I hold a Master of Applied Computing from Wilfrid Laurier University and a Bachelor of Engineering in Information and
              Communication Technology from Gujarat Technological University.
            </p>
            <a className="inline-link" href="mailto:hinal2201.arya@gmail.com">
              A question or an interesting problem? Say hello <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section className="experience section-pad" id="experience">
          <div className="page-wrap">
            <SectionHeading eyebrow="WHERE I’VE BEEN" title="Experience that ships." />
            <div className="experience-list">
              {experiences.map((experience, index) => (
                <article className="experience-card" key={`${experience.company}-${experience.role}`}>
                  <div className="experience-mark" aria-hidden="true">
                    {experience.mark}
                  </div>
                  <div className="experience-main">
                    <div className="experience-meta">
                      <span>{experience.dates}</span>
                      <span className="meta-divider">/</span>
                      <span>{experience.location}</span>
                    </div>
                    <div className="experience-title">
                      <h3>{experience.role}</h3>
                      <span className="experience-index">0{index + 1}</span>
                    </div>
                    <p className="experience-company">{experience.company}</p>
                    <p className="experience-intro">{experience.intro}</p>
                    <ul className="experience-highlights">
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex}>
                          <Check size={14} aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="tag-list">
                      {experience.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section-pad page-wrap" id="projects">
          <SectionHeading eyebrow="SELECTED PROJECTS" title="Ideas, made tangible." />
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-visual ${project.visual}`}>
                  <div className="project-visual__top">
                    <span>{project.visualLabel}</span>
                    <span>FIG. {project.number}</span>
                  </div>
                  {project.number === '01' ? (
                    <div className="molecule-graphic" aria-hidden="true">
                      <span className="molecule-ring ring-a" />
                      <span className="molecule-ring ring-b" />
                      <span className="molecule-ring ring-c" />
                      <span className="molecule-bond bond-a" />
                      <span className="molecule-bond bond-b" />
                      <span className="molecule-bond bond-c" />
                      <span className="molecule-node molecule-node--a" />
                      <span className="molecule-node molecule-node--b" />
                      <span className="molecule-node molecule-node--c" />
                      <span className="molecule-node molecule-node--d" />
                      <span className="molecule-node molecule-node--e" />
                      <span className="molecule-node molecule-node--f" />
                      <div className="molecule-core">IC₅₀</div>
                    </div>
                  ) : project.number === '02' ? (
                    <div className="climate-graphic" aria-hidden="true">
                      <div className="chart-axis chart-axis--vertical" />
                      <div className="chart-axis chart-axis--horizontal" />
                      <div className="chart-grid" />
                      <svg viewBox="0 0 440 190" role="presentation">
                        <defs>
                          <linearGradient id="forecast-fill" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#f2bd76" stopOpacity=".32" />
                            <stop offset="100%" stopColor="#f2bd76" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          className="chart-fill"
                          d="M0 147 C28 135 35 141 59 115 S98 130 119 101 S156 104 180 78 S215 98 244 69 S275 77 301 48 S335 66 355 37 S397 49 440 13 V190 H0 Z"
                        />
                        <path
                          className="chart-line chart-line--actual"
                          d="M0 147 C28 135 35 141 59 115 S98 130 119 101 S156 104 180 78 S215 98 244 69 S275 77 301 48"
                        />
                        <path
                          className="chart-line chart-line--forecast"
                          d="M301 48 C322 38 335 66 355 37 S397 49 440 13"
                        />
                        <circle cx="301" cy="48" r="4.5" className="chart-marker" />
                      </svg>
                      <span className="chart-label chart-label--top">FORECAST</span>
                      <span className="chart-label chart-label--bottom">TIME →</span>
                    </div>
                  ) : (
                    <div className="document-graphic" aria-hidden="true">
                      <div className="document-graphic__source">
                        <FileText size={34} strokeWidth={1.5} />
                        <span>PDF / TXT / MD</span>
                      </div>
                      <ArrowDown size={24} />
                      <div className="document-graphic__retrieval">Semantic retrieval</div>
                      <ArrowDown size={24} />
                      <div className="document-graphic__answer">Answer + source evidence</div>
                    </div>
                  )}
                  <div className="project-visual__bottom">
                    {project.icon}
                    <span>{project.number === '03' ? 'RAG WORKFLOW' : 'APPLIED RESEARCH'}</span>
                    <span>{project.date}</span>
                  </div>
                </div>
                <div className="project-details">
                  <div className="project-heading">
                    <span className="project-number">{project.number}</span>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="project-approach">
                    {project.approach.map((point) => (
                      <li key={point}>
                        <span className="approach-mark">+</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="tag-list">
                    {project.tools.map((tool) => (
                      <span className="tag" key={tool}>
                        {tool}
                      </span>
                    ))}
                  </div>
                  {project.disclaimer && <p className="project-disclaimer">{project.disclaimer}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-pad" id="skills">
          <div className="page-wrap">
            <SectionHeading eyebrow="MY TOOLKIT" title="The right tool for the question." />
            <p className="skills-intro">
              A practical toolkit across machine learning and software development—from understanding messy data to building web
              interfaces, enterprise applications, and REST APIs.
            </p>
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article className={`skill-group skill-group--${index + 1}`} key={group.label}>
                  <div className="skill-group__heading">
                    <span className="skill-group__number" aria-hidden="true">0{index + 1}</span>
                    <h3>{group.label}</h3>
                  </div>
                  <p className="skill-group__description">{group.description}</p>
                  <div className="skill-pills">
                    {group.skills.map((skill) => (
                      <span className={`skill-pill${group.featured.includes(skill) ? ' skill-pill--featured' : ''}`} key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education section-pad page-wrap" id="education">
          <div className="education-heading">
            <SectionHeading eyebrow="THE FOUNDATION" title="Education." />
          </div>
          <div className="education-list">
            <article className="education-item">
              <span className="education-year">APR 2025</span>
              <div>
                <h3>Master of Applied Computing</h3>
                <p>Wilfrid Laurier University <span>·</span> Waterloo, Ontario, Canada</p>
              </div>
              <span className="education-arrow"><ArrowUpRight size={17} /></span>
            </article>
            <article className="education-item">
              <span className="education-year">JUN 2021</span>
              <div>
                <h3>Bachelor of Engineering</h3>
                <p>Information and Communication Technology <span>·</span> Gujarat Technological University, India</p>
              </div>
              <span className="education-arrow"><ArrowUpRight size={17} /></span>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner page-wrap">
            <div className="contact-copy">
              <span className="eyebrow eyebrow--light">
                <span className="eyebrow-dot" />
                YOUR NEXT COLLABORATOR?
              </span>
              <h2>
                Have a good
                <br />
                <span className="serif-accent">question</span> to solve?
              </h2>
              <p>I&apos;m always happy to connect about thoughtful applications of AI and machine learning.</p>
              <a className="button button--lime" href="mailto:hinal2201.arya@gmail.com">
                Start a conversation <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="contact-links">
              <a href="mailto:hinal2201.arya@gmail.com">
                <span className="contact-link-icon"><Mail size={17} /></span>
                <span>
                  <small>WRITE ME AN EMAIL</small>
                  <strong>hinal2201.arya@gmail.com</strong>
                </span>
                <ArrowUpRight className="contact-link-arrow" size={17} />
              </a>
              <a href="https://www.linkedin.com/in/hinal-arya" target="_blank" rel="noreferrer">
                <span className="contact-link-icon"><Linkedin size={17} /></span>
                <span>
                  <small>LET&apos;S CONNECT</small>
                  <strong>LinkedIn</strong>
                </span>
                <ArrowUpRight className="contact-link-arrow" size={17} />
              </a>
              <a href="https://github.com/Hinal2201" target="_blank" rel="noreferrer">
                <span className="contact-link-icon"><Github size={17} /></span>
                <span>
                  <small>FIND ME ON</small>
                  <strong>GitHub</strong>
                </span>
                <ArrowUpRight className="contact-link-arrow" size={17} />
              </a>
            </div>
            <span className="contact-watermark" aria-hidden="true">HA.</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-wrap footer-inner">
          <a className="brand brand--footer" href="#home">
            <span className="brand-mark">H</span>
            <span>HINAL ARYA</span>
          </a>
          <p>Built with curiosity in Waterloo, Ontario.</p>
          <a className="back-to-top" href="#home">
            BACK TO TOP <ArrowUpRight size={13} />
          </a>
          <span className="footer-copyright">© {new Date().getFullYear()} Hinal Arya</span>
        </div>
      </footer>
    </>
  )
}

export default App
