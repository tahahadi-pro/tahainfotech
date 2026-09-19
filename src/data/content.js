export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'technologies', label: 'Tech' },
  { id: 'projects', label: 'Projects' },
  { id: 'process', label: 'Process' },
  { id: 'testimonials', label: 'Clients' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export const sectionIds = navLinks.map((link) => link.id)

export const services = [
  {
    title: 'Custom Software Development',
    description:
      'We design and build scalable web and mobile applications tailored to your workflows, from MVPs to enterprise platforms.',
    points: ['Product discovery', 'Full-stack engineering', 'API & system integration'],
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Modernize your infrastructure with secure cloud architecture, CI/CD pipelines, and reliability engineering that reduce downtime.',
    points: ['AWS / Azure / GCP', 'Containerization', 'Monitoring & automation'],
  },
  {
    title: 'IT Consultancy & Strategy',
    description:
      'Get practical technology roadmaps that align budgets, teams, and business goals—without unnecessary complexity.',
    points: ['Digital transformation', 'Architecture reviews', 'Vendor evaluation'],
  },
  {
    title: 'Cybersecurity & Compliance',
    description:
      'Protect systems, data, and customer trust with security assessments, hardening, and compliance-ready controls.',
    points: ['Risk assessments', 'Secure SDLC', 'Access & identity controls'],
  },
  {
    title: 'Data & Analytics',
    description:
      'Turn operational data into clear decisions with dashboards, pipelines, and reporting systems your teams will actually use.',
    points: ['Data modeling', 'Business intelligence', 'Reporting automation'],
  },
  {
    title: 'Managed IT Support',
    description:
      'Keep daily operations stable with proactive support, performance monitoring, and responsive incident handling.',
    points: ['Helpdesk coverage', 'Infrastructure upkeep', 'SLA-driven delivery'],
  },
]

export const reasons = [
  {
    title: 'Business-first engineering',
    text: 'Every recommendation is measured against outcomes: speed to market, cost efficiency, and long-term maintainability.',
  },
  {
    title: 'Senior delivery teams',
    text: 'You work with experienced engineers and consultants—not a revolving door of juniors learning on your timeline.',
  },
  {
    title: 'Transparent collaboration',
    text: 'Clear milestones, shared documentation, and regular demos keep stakeholders aligned from kickoff to launch.',
  },
  {
    title: 'Security by default',
    text: 'We bake security, access control, and reliability into delivery instead of treating them as late-stage add-ons.',
  },
]

export const technologies = [
  {
    category: 'Frontend Engineering',
    summary:
      'Fast, accessible interfaces built for conversion, usability, and long-term product evolution.',
    focus: 'SPA & SSR apps · Design systems · Performance',
    items: ['React', 'Next.js', 'TypeScript', 'Vue', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend & APIs',
    summary:
      'Reliable services and integrations that scale cleanly with your business logic and traffic.',
    focus: 'REST & GraphQL · Microservices · Event-driven systems',
    items: ['Node.js', 'Python', '.NET', 'Java', 'Express', 'FastAPI'],
  },
  {
    category: 'Cloud Platforms',
    summary:
      'Secure, cost-aware cloud foundations with high availability and room to grow.',
    focus: 'Architecture · Migration · Managed services',
    items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Serverless'],
  },
  {
    category: 'Data & Analytics',
    summary:
      'Trusted data pipelines and dashboards that turn operations into clear business decisions.',
    focus: 'Warehousing · BI · Real-time insights',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Power BI', 'Snowflake', 'Apache Kafka'],
  },
  {
    category: 'DevOps & Automation',
    summary:
      'Delivery pipelines and infrastructure automation that shorten release cycles without increasing risk.',
    focus: 'CI/CD · IaC · Observability',
    items: ['GitHub Actions', 'Terraform', 'Nginx', 'Prometheus', 'Grafana', 'Ansible'],
  },
  {
    category: 'Security & Identity',
    summary:
      'Security controls embedded into architecture, access, and operations—not bolted on later.',
    focus: 'Auth · Hardening · Continuous monitoring',
    items: ['OAuth 2.0', 'OpenID Connect', 'SSO', 'WAF', 'SIEM', 'Zero Trust'],
  },
]

export const techPrinciples = [
  {
    title: 'Fit over fashion',
    text: 'We choose stacks your team can own—aligned to budget, compliance, and delivery timelines.',
  },
  {
    title: 'Built to maintain',
    text: 'Clean architecture, documentation, and testing standards keep systems stable after launch.',
  },
  {
    title: 'Secure by design',
    text: 'Identity, encryption, and monitoring are planned early so growth never outpaces protection.',
  },
]

export const projects = [
  {
    title: 'RetailOps Command Center',
    industry: 'Retail',
    summary:
      'Unified inventory, store performance, and fulfillment dashboard that cut stock discrepancies by 38% across 60 locations.',
    outcome: '38% fewer stock gaps',
  },
  {
    title: 'HealthBridge Patient Portal',
    industry: 'Healthcare',
    summary:
      'Secure patient engagement platform with appointment flows, records access, and encrypted messaging for clinic networks.',
    outcome: '2.4x online bookings',
  },
  {
    title: 'FinLedger Cloud Migration',
    industry: 'Finance',
    summary:
      'Migrated legacy reporting workloads to a hardened cloud environment with automated backups and near-zero downtime cutover.',
    outcome: '99.95% uptime',
  },
  {
    title: 'LogiTrack Fleet Intelligence',
    industry: 'Logistics',
    summary:
      'Real-time fleet tracking and route optimization suite that reduced idle time and improved on-time delivery rates.',
    outcome: '21% faster deliveries',
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    text: 'We clarify goals, constraints, systems, and success metrics through focused workshops with your stakeholders.',
  },
  {
    step: '02',
    title: 'Design',
    text: 'We map architecture, user journeys, and delivery plans so scope, risk, and investment are clear before build starts.',
  },
  {
    step: '03',
    title: 'Build',
    text: 'Our teams ship in short cycles with demos, quality checks, and continuous feedback so progress stays visible.',
  },
  {
    step: '04',
    title: 'Launch & Optimize',
    text: 'We deploy with confidence, monitor performance, and refine based on real usage to protect long-term value.',
  },
]

export const testimonials = [
  {
    quote:
      'TahaInfoTech rebuilt our internal operations platform in under four months. Communication was sharp, delivery was consistent, and the product felt production-ready from day one.',
    name: 'Aisha Rahman',
    role: 'COO, NorthPeak Retail',
  },
  {
    quote:
      'Their cloud migration plan removed years of technical debt without disrupting our finance close cycle. That kind of precision is rare.',
    name: 'Daniel Okoye',
    role: 'CTO, Meridian Capital Group',
  },
  {
    quote:
      'We needed more than developers—we needed partners who understood compliance and clinical workflows. TahaInfoTech delivered both.',
    name: 'Dr. Priya Nair',
    role: 'Director of Digital, CarePath Clinics',
  },
]

export const faqs = [
  {
    question: 'What types of companies does TahaInfoTech work with?',
    answer:
      'We partner with startups, mid-market organizations, and established enterprises that need reliable software delivery, cloud modernization, or IT strategy support.',
  },
  {
    question: 'How long does a typical engagement take?',
    answer:
      'Discovery and strategy projects often run 2–4 weeks. Product builds and migrations usually range from 8–20 weeks depending on scope, integrations, and compliance requirements.',
  },
  {
    question: 'Do you work with existing internal teams?',
    answer:
      'Yes. We frequently embed with in-house engineers, product managers, and IT leads—augmenting capacity while transferring knowledge so your team stays independent.',
  },
  {
    question: 'Can you support us after launch?',
    answer:
      'Absolutely. We offer post-launch support, monitoring, iterative enhancements, and managed service packages aligned to agreed SLAs.',
  },
  {
    question: 'How do project pricing and proposals work?',
    answer:
      'After an initial consultation, we provide a scoped proposal with timeline, milestones, and commercial options—fixed scope, phased delivery, or retainer support.',
  },
]

export const contactDetails = {
  email: 'hello@tahainfotech.com',
  phone: '+1 312 6803233',
  address: '30 N Gould St Ste R',
  city: 'Sheridan, WY 82801',
  location: '30 N Gould St Ste R, Sheridan, WY 82801',
  hours: 'Mon–Fri, 9:00 AM – 6:00 PM',
}
