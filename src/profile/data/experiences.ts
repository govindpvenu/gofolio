import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "invisor",
    companyName: "Invisor",
    companyLogo:
      "https://play-lh.googleusercontent.com/xYVh2EbgypQFaciM-2YidCsQP_IiBVGpVDbEgn6XSdrt9uDkdoyH_oE-mZE2ildTTw=w240-h480",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Associate - Full Stack Developer",
        employmentPeriod: {
          start: "08.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: ``,
        skills: [
          "Next.js",
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "Express.js",
          "PostgreSQL",
          "Git",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
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
