export const employmentHistory = [
  {
    id: 1,
    title: "Software Developer",
    url: "https://www.anytimemailbox.com/",
    company: "Anytime Mailbox",
    location: "Remote",
    period: "2021 - Present",
    description:[
      "Perform development of the company's flagship SaaS product using ASP.NET, C# and SQL.",
      "Integrate third party APIs for payments, automate processes and follow regulations.",
      "Collaborate within an Agile development team to deliver timely solutions.",
      "Mentored junior developers and implemented modern development practices across the team."
    ],      
    technologies: ["C#", "SQL", "ASP.NET", "REST API", "Stripe", "Microservices", "AWS"],
  },
  {
    id: 2,
    title: "Associate Software Engineer",
    url: "https://www.infor.com/",
    company: "Infor",
    location: "Taguig, Philippines",
    period: "2019 - 2021",
    description:[
      "Developed and maintained Data Warehousing software using VB.NET, C#, T-SQL, and Powershell scripting.",
      "Create data pipelines for performing Extract, Transform and Load (ETL) of data to extract insights",
      "Collaborate within an Agile development team to deliver timely solutions.",
    ],
    technologies: ["C#", "SQL", "VB.NET", "SSIS", "Powershell Scripting"],
  },
  {
    id: 3,
    title: "Associate Software Engineer",
    url: "https://www.accenture.com/",
    company: "Accenture",
    location: "Taguig, Philippines",
    period: "2018 - 2019",
    description:
      [
        "Work on different projects including:",
        "Development of Data Analytics website using React, REST API(C#), and MSSQL.",  
        "Build automation scripts for monitoring and managing infrastructure using Powershell, REST API(C#), and MSSQL.",
        "Generate data pipelines using SSIS and create reports using MSSQL and SSRS.",
        "Collaborate within an Agile development team to deliver timely solutions."
      ],
    technologies: ["C#", "React", "REST API", "SQL", "Powershell Scripting", "AWS", "Azure"],
  },
]

export const projects = [
  {
    id: 1,
    title: "White Board",
    description:
      "A white board application that multiple user can use independently at the same time. Users can draw, add sticky notes and stickers/emojis",
    image: "/images/whiteboard.jpg?height=300&width=500",
    technologies: ["C#", "ASP.NET", "SignalR", "Javascript", "Docker", "Railway"],
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
    category: "Frontend Development",
    technologies: [
      "ASP .NET MVC",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vue.js",
      "Responsive Design",
    ],
  },
  {
    category: "Backend Development",
    technologies: [
      "C#",
      "REST API",
      "Hangfire",
      "Stripe",
      "Authentication",
      "Microservices",
    ],
  },
  {
    category: "Database & Storage",
    technologies: [
      "MS SQL",
      "NoSQL",
      "PostgreSQL",
      "MongoDB",
      "Data Modeling",
    ],
  },
  {
    category: "DevOps & Infrastructure",
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "Serverless"
    ],
  },
  {
    category: "Tools & Methodologies",
    technologies: [
      "VS Code",
      "Figma",
      "Jira",
      "Agile",
      "Scrum",
      "TDD",
      "BDD",
      "Postman"
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
