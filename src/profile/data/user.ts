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
  website: "https://govindpvenu.tech",
  jobTitle: "Full-Stack Engineer",
  jobs: [
    {
      title: "Associate - Full Stack Developer",
      company: "Invisor",
      website: "https://www.linkedin.com/company/invisorglobal",
    },
  ],
  about: `
I’m a self-taught full-stack developer passionate about building meaningful products.

I started coding at 15, for making games —which sparked my interest in technology. Since then, I’ve been continuously learning, building, and evolving my skill set. By 18, I landed my first full-time developer role.

I believe learning by doing is the most effective way to master any skill. That’s why I chose a self-taught path—focusing on real-world projects, solving practical problems, and gaining hands-on experience rather than following a traditional route.

I’m always open to connecting with like-minded people, collaborating on interesting ideas, and exploring new opportunities.
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
