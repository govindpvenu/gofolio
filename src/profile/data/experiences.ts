import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "invisor",
    companyName: "Invisor",
    companyLogo: "/invisor-logo.webp",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Associate - Full Stack Developer",
        employmentPeriod: {
          start: "08.2024",
        },

        employmentType: "Full-time",
        icon: "code",
        description: `Work as an Associate - Full Stack Developer supporting learning and consulting platforms, focusing on feature development, system improvements, and internal tools.

→ Developed and maintained internal tools, including student management and ERP systems.

→ Built and improved learning management systems for educational workflows.

→ Automated HR processes, including payslip generation and bulk email handling.

→ Contributed to payroll software development and maintenance.

→ Designed and optimized marketing web pages to boost performance and SEO.

→ Converted Figma designs into responsive, production-ready code.

→ Updated legacy systems by improving code quality.

→ Supported interns by creating learning roadmaps, sharing resources, and reviewing side projects.`,
        skills: [
          "TypeScript",
          "Next.js",
          "Tailwind CSS",
          "Hono",
          "PostgreSQL",
          "AWS",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "solbyss",
    companyName: "Solbyss Software Solutions (acquired by 24 Tech)",
    companyLogo: "/24tech-logo.webp",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417d",
        title: "Web Developer",
        employmentPeriod: {
          start: "04.2023",
          end: "07.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `Started my career as a Web Developer at a small-scale company, working on marketing and e-commerce projects while building a strong foundation in web development.

→ Built marketing websites for small businesses, helping them establish an online presence and generate leads.

→ Contributed to e-commerce projects by supporting feature development and core functionality.

→ Gained hands-on experience with project development, Git, and collaboration through GitHub.

→ Developed a strong foundation in web development and real-world workflows.

This role gave me the opportunity to work with real clients.`,
        skills: [
          "JavaScript",
          "Node.js",
          "React.js",
          "MongoDB",
          "Express.js",
          "Git",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },

  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Mar Elias Higher Secondary School",
        employmentPeriod: {
          start: "06.2021",
          end: "03.2023",
        },
        icon: "education",
        description: `Computer Science`,
        skills: [],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "Sobhana English Medium High School",
        employmentPeriod: {
          start: "06.2020",
          end: "03.2021",
        },
        icon: "education",
        description: ``,
        skills: [],
      },
    ],
  },
];
