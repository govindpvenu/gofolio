import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "glichess",
    title: "glichess",
    period: {
      start: "10.2026",
      end: "11.2026",
    },
    link: "https://github.com/govindpvenu/glichess",

    skills: [
      "TypeScript",
      "React 19 + Vite",
      "Express 5",
      "Socket.IO",
      "WebRTC",
      "PostgreSQL",
      "Drizzle ORM",
      "Better Auth",
      "Playwright",
      "Docker",
    ],

    description: `A realtime chess platform with built-in video, voice, and chat on one screen.
* **Server-authoritative games:** Move validation, clocks, and every end condition run on the server.
* **Video & voice:** Peer-to-peer WebRTC calls signalled over Socket.IO, with Cloudflare TURN fallback.
* **Glicko-2 ratings:** Rated games for signed-in players, with rematches, invite links, and quick pairing.
* **Guest or Google sign-in:** Guests can play instantly and link to a Google account later.
`,
    logo: "/projects-logo/glichess.png",
  },
  {
    id: "getcited",
    title: "getcited",
    period: {
      start: "06.2026",
      end: "07.2026",
    },
    link: "https://github.com/govindpvenu/getcited",

    skills: [
      "Next.js 16",
      "OpenRouter",
      "PostgreSQL",
      "Vercel Cron",
      "AI SDK",
      "AI Elements",
      "Drizzle ORM",
      "Better Auth",
    ],

    description: `A full-stack AI prompt tracking platform to analyze how different AI models mention, cite, and describe a brand.
* **Multi-model prompt runs:** Integrated OpenRouter to run prompts across OpenAI-labelled and Gemini-labelled models and store individual responses.
* **Brand analytics:** Developed analytics for prompt runs, model responses, brand mentions, citation rates, sentiment, and 14-day mention trends.
* **Batch testing:** Added batch prompt testing for comparing up to five brands against the same prompt.
* **Scheduled tracking:** Built daily and weekly prompt tracking with active/paused states, run history, and automated cron-based processing.
`,
    logo: "/projects-logo/getcited.png",
  },
  {
    id: "getmycv",
    title: "getmycv",
    period: {
      start: "11.2025",
      end: "01.2026",
    },
    link: "https://github.com/govindpvenu/getmycv",

    skills: [
      "Next.js 16",
      "Intercepting Routes",
      "PostgreSQL",
      "Drizzle ORM",
      "Better Auth",
      "Resend",
      "Vercel Blob",
    ],
    description: `A modern resume link manager for uploading, sharing, and tracking PDF resumes.
* **Role-specific CVs:** Manage multiple resume versions for different job roles.
* **Stable links:** Share clean username-based URLs which will be updated live.
* **Visibility control:** Keep drafts private or publish when they are ready.
* **Analytics:** Track views and downloads in a chart view.
`,
    logo: "/projects-logo/getmycv.ico",
  },
  {
    id: "entegram",
    title: "entegram",
    period: {
      start: "05.2026",
      end: "05.2026",
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
