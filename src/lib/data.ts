export const employmentHistory = [
  {
    id: 1,
    title: "Fullstack Software Developer",
    url: "https://www.anytimemailbox.com/",
    company: "Anytime Mailbox",
    location: "Remote",
    period: "August 2020 – Present",
    description:[
      "Led payment integration work with Stripe and other payment gateways — built out subscription billing, one-time charges, refunds, proration, and webhook event handling, replacing a slow in-house billing system and opening the platform up to future products.",
      "Worked across all three sides of the platform — customer-facing features (mailbox management, billing self-service), operator tools (mail handling workflows), and admin dashboards (account management, reporting, configuration).",
      "Contributed to the Azure cloud migration — wrote the data migration code to move hundreds of thousands of historical records to the new cloud environment.",
      "Own the third-party integration layer: tax compliance APIs, webhook pipelines, and a handful of external service connectors that need to stay in sync with the core platform.",
      "Became the internal point of contact for platform architecture questions — reviewed PRs, ran knowledge-sharing sessions, and helped 10+ engineers get up to speed on the cloud-migrated codebase.",
    ],      
    technologies: ["C#", ".NET / ASP.NET Core", "JavaScript", "T-SQL", "SQL Server", "Stripe", "Azure", "REST API", "Microservices", "Webhooks"],
  },
  {
    id: 2,
    title: "Associate Software Engineer",
    url: "https://www.infor.com/",
    company: "Infor PSSC, Inc.",
    location: "Taguig, Philippines",
    period: "April 2019 – August 2020",
    description:[
      "Worked on a Data Warehouse Designer tool built in C# and VB.NET — an internal application that lets users visually design and generate SSIS packages, simplifying the data warehousing process without hand-coding ETL pipelines.",
      "Heavy T-SQL work across both cloud and on-premises SQL Server environments — wrote stored procedures, reporting queries, and data transformation logic to support the generated SSIS packages and downstream BI reports.",
      "Automated several recurring ops tasks with PowerShell scripts, cutting the team's weekly manual maintenance work noticeably.",
      "Part of an Agile squad that pushed for better sprint habits — picked up technical debt alongside feature work rather than deferring it.",
    ],
    technologies: ["C#", "VB.NET", "T-SQL", "SQL Server", "SSIS", "SSRS", "PowerShell"],
  },
  {
    id: 3,
    title: "Associate Software Engineer",
    url: "https://www.accenture.com/",
    company: "Accenture Inc.",
    location: "Taguig, Philippines",
    period: "October 2017 – April 2019",
    description:[
      "Built an analytics dashboard in ReactJS and Web API that replaced a manual client reporting process — gave stakeholders a live view of their data instead of waiting on weekly exports.",
      "Designed and built ETL pipelines and SSRS reports as part of a data integration project spanning both Azure and AWS environments.",
      "Wrote cloud infrastructure automation scripts for AWS and Azure in support of the environment delivery team — reduced the number of manual environment checks and provisioning steps the team ran each week.",
      "Monitored a fleet of 10,000+ servers to verify sites were up, meeting performance benchmarks, and compliant with infrastructure standards.",
      "Worked in a global Scrum team across multiple timezones — got comfortable with async-first collaboration and documentation quickly.",
    ],
    technologies: ["C#", "React", "REST API", "T-SQL", "SQL Server", "SSIS", "SSRS", "PowerShell", "AWS", "Azure"],
  },
]

export const projects = [
  {
    id: 1,
    title: "White Board",
    description:
      "A white board application that multiple user can use independently at the same time. Users can draw, add sticky notes and stickers/emojis",
    image: "/images/whiteboard.jpg?height=300&width=500",
    technologies: ["C#", "ASP.NET", "SignalR", "Entity Framework", "SQL", "Javascript", "Docker", "Railway"],
    demoUrl: "https://whiteboard.toljm.dev/",
    githubUrl: "https://github.com/JmTOL/WhiteBoardApp",
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "My own porfolio page on the web with its own custom domain, working contact form and links.",
    image: "/images/portfolio.jpg?height=300&width=500",
    technologies: ["React", "Next.js", "Tailwind CSS", "Netlify"],
    demoUrl: "https://toljm.dev/",
    githubUrl: "https://github.com/JmTOL/portfolio",
  }
]

export const skills = [
  {
    category: "Languages & Frameworks",
    technologies: [
      "C#",
      ".NET / ASP.NET Core",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "VB.NET",
      "Entity Framework / EF Core",
      "T-SQL",
      "HTML / CSS",
    ],
  },
  {
    category: "API & Architecture",
    technologies: [
      "RESTful API",
      "Microservices",
      "Event-Driven Architecture",
      "GraphQL",
      "SignalR / WebSockets",
      "RabbitMQ",
      "Apache Kafka",
      "Swagger / OpenAPI",
    ],
  },
  {
    category: "Integrations & Payments",
    technologies: [
      "Stripe",
      "Authorize.NET",
      "Billing & Subscriptions",
      "Tax Compliance APIs",
      "Webhooks",
      "OAuth / JWT",
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      "Azure App Services",
      "Azure Functions",
      "Azure Service Bus",
      "AWS EC2 / S3 / Lambda / RDS",
      "Docker",
      "Kubernetes / AKS",
      "CI/CD Pipelines",
      "Cloud Migration",
    ],
  },
  {
    category: "Database & Data Engineering",
    technologies: [
      "SQL Server",
      "PostgreSQL",
      "CosmosDB",
      "MongoDB",
      "Redis",
      "ETL / ELT",
      "SSIS",
      "SSRS",
      "Data Warehousing",
      "Performance Tuning",
    ],
  },
  {
    category: "Observability",
    technologies: [
      "Azure Application Insights",
      "Azure Monitor",
      "Sentry",
      "Datadog",
    ],
  },
  {
    category: "AI & LLM Integration",
    technologies: [
      "Semantic Kernel",
      "OpenAI API",
      "LangChain",
      "AI Agents",
      "n8n",
    ],
  },
  {
    category: "Practices & Tooling",
    technologies: [
      "Agile / Scrum",
      "Git / GitHub / GitLab / Azure DevOps",
      "xUnit / NUnit / Jest",
      "TDD / BDD",
      "Technical Mentoring",
      "PowerShell",
    ],
  },
]

export const contactInfo = {
  name: "John Matthew Tolentino",
  email: "tolentino.jm@live.com",
  phone: "+63 927 165 0882",
  location: "Manila, Philippines",
  socialMedia: {
    github: "https://github.com/jmtol",
    linkedin: "https://linkedin.com/in/tolentinojm",
    twitter: "https://twitter.com/",
  },
}
