import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "gofolio",
    title: "gofolio",
    period: {
      start: "10.2025",
      end: "10.2025",
    },
    link: "https://github.com/govindpvenu/gofolio",
    skills: [
      "Next.js 16",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Radix UI",
      "Motion",
      "Vercel",
    ],
    description: `A minimal dev portfolio with a clean, modern design inspired by Vercel’s design system. 
  - Content managed through simple array updates
  - Spam-protected email & contact number
  - GitHub contribution graph and LeetCode stats.
  - Theme support with light/dark mode toggle.
`,
    logo: "/projects-logo/gofolio.png",
  },
  {
    id: "guza",
    title: "guza",
    period: {
      start: "09.2023",
      end: "10.2023",
    },
    link: "https://github.com/govindpvenu/guza",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Razorpay",
      "JWT Auth",
      "MVC Architecture",
    ],
    description: `A full-stack e-commerce web application built with Node.js, Express, and MongoDB. 
* **Authentication** with JWT sessions, OTP verification, and bcrypt password hashing.
* **Product management** with CRUD, inventory control, image upload, banners, and coupons.
* **Admin dashboard** for sales reports, orders, customers, and analytics.
* **Full shopping flow** with cart, wishlist, addresses, orders, and cancellation.
* **Razorpay integration** with coupons, wallet payments, and multiple payment methods.
* **Advanced product browsing** with search, filters, pagination, image gallery, and zoom.
`,
    logo: "/projects-logo/guza.svg",
  },
];
