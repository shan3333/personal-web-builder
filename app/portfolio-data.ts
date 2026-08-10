// Keep personal destinations centralized so temporary URLs are easy to replace.
export const contact = {
  email: "sliu10133@gmail.com",
  linkedin: "https://www.linkedin.com/in/shan-liu-6b5800195/",
  github: "https://github.com/", // Temporary: replace with Shan's personal profile URL.
  cv: "", // Existing CV action remains disabled until its file path is configured.
  profilePhoto: "", // After copying the coaching photo, set this to "/images/shan-profile.jpg".
};

export const projects = [
  { title: "The Hague Appointment Alert", description: "A hosted monitoring service that checks municipality appointment availability and alerts users when suitable dates appear.", longDescription: "Built from a problem experienced first-hand and designed as an extensible service—not a one-off script.", technologies: ["TypeScript", "Node.js", "Playwright", "Telegram", "Google Cloud", "Codex"], highlights: ["Matches multiple services against customer-specific date preferences", "Real monitoring and simulation modes with automated testing and CI", "Continuously deployed for monitoring, with room to expand to more municipalities"], githubUrl: "", liveUrl: "", image: "", status: "Active build", featured: true, mark: "DH" },
  { title: "API Change Assistant", description: "A backend system for ingesting and processing API-change events reliably using asynchronous workflows and database-backed state.", longDescription: "Reliability-focused event processing with explicit safeguards for retries, duplication, and concurrency.", technologies: ["PHP", "Symfony", "PostgreSQL", "Redis", "Docker", "Webhooks"], highlights: ["Processes GitHub webhooks and prevents duplicate event handling", "Redis-backed Messenger jobs with asynchronous retries", "Transactions, locking, automated tests, and CI for concurrency safety"], githubUrl: "", liveUrl: "", image: "", status: "Case study", featured: false, mark: "API" },
];

export const impact = [
  { label: "Performance", metric: "416 → 2", story: "Eliminated an N+1 ORM problem, reducing endpoint latency from 213ms to 13ms." },
  { label: "Architecture", metric: "97% faster", story: "Compared three solutions, built proofs of concept, and presented the chosen materialized-view approach to a Technical Design Authority." },
  { label: "Testing", metric: "5,000+", story: "Co-developed an API testing framework that became widely adopted across the team." },
  { label: "Security", metric: "121 → 0", story: "Introduced daily vulnerability scanning across more than ten services." },
  { label: "Automation", metric: "Hours → Min", story: "Automated SDK generation workflows while preserving repeatability and quality checks." },
];

export const experience = [
  { company: "Evident", title: "Software Engineer", location: "UK", dates: "May 2021 — May 2025", summary: "Built and improved scalable backend systems, REST APIs, infrastructure, and engineering workflows in a cross-functional product environment.", outcomes: ["Automated Annual Audit operations, reducing workload by approximately 80%, and helped make onboarding approximately 60% faster", "Improved APIs, performance, testing, security, and release infrastructure—helping move releases from days to hours", "Resolved 50+ high-priority issues through root-cause analysis and led onboarding sessions for 10+ colleagues"] },
  { company: "xeArts", title: "Web Developer", location: "Japan", dates: "Apr 2018 — May 2021", summary: "Developed full-stack web applications and integrations across e-commerce, frontend, backend optimization, and automation.", outcomes: ["Built PHP and PostgreSQL applications with Shopify, Google Translate, and Instagram integrations", "Explored machine learning in production-adjacent work, using a CNN image-classification model to help categorize product images"] },
];

export const skills = [
  { title: "Backend Engineering", items: ["PHP", "Symfony", "API Platform", "Laravel", "Python", "Java", "REST", "OpenAPI"] },
  { title: "Data & Performance", items: ["PostgreSQL", "MySQL", "Redis", "query optimization", "ORM optimization", "caching"] },
  { title: "Infrastructure", items: ["Docker", "Kubernetes", "AWS", "Google Cloud", "CI/CD", "GitHub Actions", "Linux"] },
  { title: "Testing & Reliability", items: ["PHPUnit", "API testing", "integration testing", "monitoring", "debugging"] },
  { title: "Frontend", items: ["TypeScript", "JavaScript", "Vue.js", "HTML", "CSS"] },
  { title: "AI-assisted Development", items: ["OpenAI Codex", "TensorFlow", "PyTorch", "scikit-learn", "NumPy"] },
];
