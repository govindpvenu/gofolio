import type { User } from "@/profile/types/user";

export const USER: User = {
  firstName: "Govind",
  lastName: "P Venu",
  displayName: "Govind P Venu",
  username: "govindpvenu",
  gender: "male",
  pronouns: "he/him",
  bio: "I know how to center a div.",
  flipSentences: [
    "I know how to center a div.",
    "I build things for the web.",
    "I love open source.",
    "I'm working as full-stack dev.",
    "I'm learning to build in go.",
  ],
  address: "Kochi, Kerala, India",
  phoneNumber: "KzkxIDc5OTQ2NTI4NDA=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "Z292aW5kcHZlbnUuZGV2QGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://govindpvenu.dev",
  jobTitle: "Full-Stack Engineer",
  jobs: [
    {
      title: "Associate - Full Stack Developer",
      company: "Invisor",
      website: "https://www.linkedin.com/company/invisorglobal",
    },
  ],
  about: `
Hello, World! I am Govind — a Full-Stack Web Developer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.

With 2+ years of experience, I specialize in building high-quality web applications using Next.js, React, TypeScript, Node.js, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

Let's connect and collaborate!
  `,
  avatar: "https://avatars.githubusercontent.com/u/100788322?v=4",
  keywords: [
    "govindpvenu",
    "govind p venu",
    "govind",
    "p venu",
    "govindpvenu",
    "govind p venu",
    "govind",
  ],
  dateCreated: "2025-09-1", // YYYY-MM-DD
};
