import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "entegram",
    title: "entegram",
    period: {
      start: "05.2026",
      end: "05.2025",
    },
    link: "https://github.com/govindpvenu/entegram",
    skills: [
      "TypeScript",
      "React Native / Expo",
      "Expo Router",
      "AsyncStorage",
      "EAS Build",
    ],
    description: ` Entegram opens Instagram inside the app and lets you choose which distracting parts of the Instagram web experience should be hidden.
 * **Focus-friendly Instagram WebView** that opens Instagram inside the app.
* **Distraction filters** to hide Reels, Explore, Home Feed, Suggestions, and Stories.
* **Runtime script injection** applies filters locally inside the WebView.
* **LockIn mode** to password-protect filters from being turned off casually.
`,
    logo: "/projects-logo/entegram.png",
  },
  {
    id: "justbetweenus",
    title: "justbetweenus",
    period: {
      start: "12.2025",
      end: "01.2026",
    },
    link: "https://github.com/govindpvenu/justbetweenus",
    skills: [
      "Next.js 16",
      "Bun",
      "Elysia.js",
      "TanStack Query",
      "Upstash Redis",
      "PWA",
      "WebSockets",
      "AES-256-GCM",
      "E2EE",
    ],
    description: `A modern real-time chat app with auto-expiring rooms. [See how it works](https://www.tldraw.com/f/xl7XIQ3W8BzCjcOixfIwb?d=v-468.-11453.2465.1475.page)
* **E2E Encryption:** Messages are encrypted in the browser before leaving your device.
* **Keys stay private:** Room keys are shared through the URL fragment, not via server.
* **No accounts or tracking:** No signups, no personal profile data collection.
* **Short-lived chats:** Rooms expire after 10 minutes or can be destroyed manually.
`,
    logo: "/projects-logo/justbetweenus.ico",
  },
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
    id: "glitchess",
    title: "glitchess",
    period: {
      start: "03.2024",
      end: "04.2024",
    },
    link: "https://github.com/govindpvenu/glitchess",
    skills: [
      "TypeScript",
      "React + Vite",
      "Tailwind CSS",
      "TanStack Router",
      "Redux",
      "react-chessboard",
      "chess.js",
      "Node.js + Express",
      "Socket.IO",
      "MongoDB + Mongoose",
    ],
    description: `A full-stack multiplayer chess platform with real-time gameplay, user authentication, and player rankings.
* **Real-time online chess** with WebSocket matchmaking.
* **Multiple modes**: online, local, and vs computer.
* **Full chess rules** with validation, timers, and move history.
* **Profiles & rankings** with stats, ratings, and leaderboard.
* **Secure auth** with OTP, Google OAuth, bcrypt, and JWT.
* **Clean UI** with themes, sounds, panels, and notifications.
`,
    logo: "/projects-logo/glitchess.png",
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
